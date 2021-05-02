import { useState, useEffect } from "react";
import axios from "axios";
import { OverseasCovidService } from "../env";
import { getAllDecideDeathCnt, getOverseasChartDataForm } from "../utils";
import { NATION } from "../types";

import { Header, Navbar, OverseasCases, OverseasRegionTable, OverseasChartByDate } from "../components";

// TODO) 국기를 어떻게 뽑아올까
// TODO) 로드가 느리다. 어떻게 해결할까. Rendering 에 대해서 다시 공부해보자
const Overseas = ({ overseasCovidItems }) => {
  const REGION_ITEMS_PER_PAGE = 38; // 38 * 5 = 190
  const [page, setPage] = useState(1);

  const [todayOverseasCovidItems, setTodayOverseasCovidItems] = useState([]);
  const todayOverseasCovidItemsStartIndex = 0;

  const [yesterdayOverseasCovidItems, setYesterdayOverseasCovidItems] = useState([]);
  const yesterdayOverseasCovidItemsStartIndex = 190;

  const [dayBeforeYesterdayCovidItems, setDayBeforeYesterdayCovidItems] = useState([]);
  const dayBeforeYesterdayCovidItemsStartIndex = 380;

  const [todayAllDecideCnt, todayAllDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(0, 190));
  const [yesterdayAllDecideCnt, yesterdayAllDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(190, 380));

  const overseasChartData = getOverseasChartDataForm(overseasCovidItems);

  useEffect(() => {
    if (page <= 5) {
      setTodayOverseasCovidItems(
        overseasCovidItems.slice(
          todayOverseasCovidItemsStartIndex,
          todayOverseasCovidItemsStartIndex + REGION_ITEMS_PER_PAGE * page
        )
      );

      setYesterdayOverseasCovidItems(
        overseasCovidItems.slice(
          yesterdayOverseasCovidItemsStartIndex,
          yesterdayOverseasCovidItemsStartIndex + REGION_ITEMS_PER_PAGE * page
        )
      );

      setDayBeforeYesterdayCovidItems(
        overseasCovidItems.slice(
          dayBeforeYesterdayCovidItemsStartIndex,
          dayBeforeYesterdayCovidItemsStartIndex + REGION_ITEMS_PER_PAGE * page
        )
      );
    }

    console.log(page);
  }, [page]);

  return (
    <div className="w-screen h-screen flex flex-col flex-1 bg-blue-100 overflow-auto dark:bg-gray-800">
      <Header nation={NATION.OVERSEAS} />
      <Navbar />
      <OverseasCases
        todayAllDecideCnt={todayAllDecideCnt}
        todayAllDeathCnt={todayAllDeathCnt}
        yesterdayAllDecideCnt={yesterdayAllDecideCnt}
        yesterdayAllDeathCnt={yesterdayAllDeathCnt}
      />
      <OverseasChartByDate overseasChartData={overseasChartData} />
      <OverseasRegionTable
        todayOverseasCovidItems={todayOverseasCovidItems}
        yesterdayOverseasCovidItems={yesterdayOverseasCovidItems}
        dayBeforeYesterdayCovidItems={dayBeforeYesterdayCovidItems}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export async function getStaticProps() {
  const {
    baseUrl: overseasCovidBaseUrl,
    serviceKey: overseasCovidServiceKey,
    params: overseasCovidParams,
  } = OverseasCovidService;

  const {
    pageNo: overseasCovidPageNo,
    numOfRows: overseasCovidNumOfRows,
    startCreateDt: overseasCovidStartCreateDt,
    endCreateDt: overseasCovidEndCreateDt,
  } = overseasCovidParams;

  const { data: _overseasCovidData } = await axios.get(
    `${overseasCovidBaseUrl}?serviceKey=${overseasCovidServiceKey}&pageNo=${overseasCovidPageNo}&numOfRows=${overseasCovidNumOfRows}&startCreateDt=${overseasCovidStartCreateDt}&endCreateDt=${overseasCovidEndCreateDt}`
  );

  const overseasCovidItems = await _overseasCovidData.response.body.items.item;

  return {
    props: {
      overseasCovidItems,
    },
  };
}

export default Overseas;
