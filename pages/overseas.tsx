import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { OverseasCovidService } from "../env";
import { getAllDecideDeathCnt, getOverseasChartDataForm, toComma } from "../utils";

import { Header, Navbar, ChartByDate, OverseasRegionTable, Cases } from "../components";

// TODO) 국기를 어떻게 뽑아올까
// TODO) 로드가 느리다. 어떻게 해결할까.
const Overseas = ({ overseasCovidItems }) => {
  const REGION_ITEMS_PER_PAGE = 38; // 38 * 5 = 190
  const [page, setPage] = useState(1);

  const [todayOverseasCovidItems, setTodayOverseasCovidItems] = useState([]);
  const todayOverseasCovidItemsStartIndex = 0;

  const [yesterdayOverseasCovidItems, setYesterdayOverseasCovidItems] = useState([]);
  const yesterdayOverseasCovidItemsStartIndex = 190;

  const [dayBeforeYesterdayOverseasCovidItems, setDayBeforeYesterdayOverseasCovidItems] = useState([]);
  const dayBeforeYesterdayOverseasCovidItemsStartIndex = 380;

  const [accDecideCnt, accDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(0, 190));
  const [yesterdayaccDecideCnt, yesterdayAccDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(190, 380));

  const accOverseasCovidItemInfos = [accDecideCnt, accDeathCnt];
  const yesterdayAccOverseasCovidItemInfos = [yesterdayaccDecideCnt, yesterdayAccDeathCnt];

  const overseasChartData = getOverseasChartDataForm(overseasCovidItems);

  const caseInfosItems = [
    ["Confirmed", "rgba(248, 113, 113, 1)"],
    ["Deaths", "rgba(0, 0, 0, 1)"],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: toComma(accOverseasCovidItemInfos[index]),
    caseIncreaseDecrease: accOverseasCovidItemInfos[index] - yesterdayAccOverseasCovidItemInfos[index],
    color,
  }));

  const chartSelectOptions = {
    firstOptions: [
      { value: "decideCnt", name: "Confirmed" },
      { value: "deathCnt", name: "Deaths" },
    ],
    secondOptions: [
      {
        value: "daily",
        name: "Daily",
      },
      { value: "weekly", name: "Weekly" },
      { value: "monthly", name: "Monthly" },
    ],
  };

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

      setDayBeforeYesterdayOverseasCovidItems(
        overseasCovidItems.slice(
          dayBeforeYesterdayOverseasCovidItemsStartIndex,
          dayBeforeYesterdayOverseasCovidItemsStartIndex + REGION_ITEMS_PER_PAGE * page
        )
      );
    }
  }, [page]);

  return (
    <div className="container mx-auto px-5 py-12 bg-gray-200 dark:bg-gray-800 overflow-auto">
      <Header title={"Overseas"} />
      <Navbar />
      <Cases caseInfosItems={caseInfosItems} />
      <ChartByDate chartData={overseasChartData} chartSelectOptions={chartSelectOptions} />
      <OverseasRegionTable
        todayOverseasCovidItems={todayOverseasCovidItems}
        yesterdayOverseasCovidItems={yesterdayOverseasCovidItems}
        dayBeforeYesterdayOverseasCovidItems={dayBeforeYesterdayOverseasCovidItems}
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
