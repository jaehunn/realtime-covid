import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { OverseasCovidService } from "../env";
import { getAllDecideDeathCnt, getOverseasChartDataForm } from "../utils";

import { Header, Navbar, OverseasCases, OverseasRegionTable, OverseasChartByDate } from "../components";

// TODO) 국기를 어떻게 뽑아올까
// TODO) 로드가 느리다. 어떻게 해결할까.
const Overseas = ({ overseasCovidItems }) => {
  const REGION_ITEMS_PER_PAGE = 38; // 38 * 5 = 190
  const [page, setPage] = useState(1);

  const [todayOverseasCovidItems, setTodayOverseasCovidItems] = useState([]);
  const todayOverseasCovidItemsStartIndex = 0;

  const [yesterdayOverseasCovidItems, setYesterdayOverseasCovidItems] = useState([]);
  const yesterdayOverseasCovidItemsStartIndex = 190;

  const [dayBeforeYesterdayCovidItems, setDayBeforeYesterdayCovidItems] = useState([]);
  const dayBeforeYesterdayCovidItemsStartIndex = 380;

  const [accDecideCnt, accDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(0, 190));
  const [yesterdayaccDecideCnt, yesterdayAccDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(190, 380));

  const accOverseasCovidItemInfos = [accDecideCnt, accDeathCnt];
  const yesterdayAccOverseasCovidItemInfos = [yesterdayaccDecideCnt, yesterdayAccDeathCnt];

  const overseasChartData = getOverseasChartDataForm(overseasCovidItems);

  // TODO) 매번 자르는게아니라 이어붙히고싶다.
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
  }, [page]);

  return (
    <div className="w-screen h-screen mx-auto px-5 py-12 overflow-auto bg-gray-200 dark:bg-gray-800">
      <Header title={"Overseas"} />
      <Navbar />
      <OverseasCases
        accOverseasCovidItemInfos={accOverseasCovidItemInfos}
        yesterdayAccOverseasCovidItemInfos={yesterdayAccOverseasCovidItemInfos}
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

export const getStaticProps: GetStaticProps = async () => {
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
};

export default Overseas;
