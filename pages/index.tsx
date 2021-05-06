import { GetStaticProps } from "next";
import axios from "axios";
import { DomesticCovidService, DomesticRegionCovidService } from "../env";

import { Header, Navbar, Cases, ChartByDate, RegionTable } from "../components";
import { toComma } from "../utils";

const Home = ({ domesticCovidItems, domesticRegionCovidItems }) => {
  const [accCovidItem, yesterdayAccCovidItem] = domesticCovidItems;

  const {
    decideCnt: accDecideCnt,
    deathCnt: accDeathCnt,
    clearCnt: accClearCnt,
    accExamCnt: accExamCnt,
  } = accCovidItem;

  const {
    decideCnt: yesterdayAccDecideCnt,
    deathCnt: yesterdayAccDeathCnt,
    clearCnt: yesterdayAccClearCnt,
    accExamCnt: yesterdayAccExamCnt,
  } = yesterdayAccCovidItem;

  const accCovidItemInfos = [accDecideCnt, accDeathCnt, accClearCnt, accExamCnt];
  const yesterdayAccCovidItemInfos = [
    yesterdayAccDecideCnt,
    yesterdayAccDeathCnt,
    yesterdayAccClearCnt,
    yesterdayAccExamCnt,
  ];

  const todayCovidItems = domesticRegionCovidItems.slice(0, 19);
  const yesterdayCovidItems = domesticRegionCovidItems.slice(19, 38);
  const dayBeforeYesterdayCovidItems = domesticRegionCovidItems.slice(38, 57);

  const caseInfosItems = [
    ["Confirmed", "rgba(248, 113, 113, 1)"],
    ["Deaths", "rgba(0, 0, 0, 1)"],
    ["Recovered", "rgba(52, 211, 153, 1)"],
    ["Tested", "rgba(96, 165, 250, 1)"],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: toComma(accCovidItemInfos[index]),
    caseIncreaseDecrease: accCovidItemInfos[index] - yesterdayAccCovidItemInfos[index],
    color,
  }));

  const chartSelectOptions = {
    firstOptions: [
      { value: "decideCnt", name: "Confirmed" },
      { value: "deathCnt", name: "Deaths" },
      { value: "clearCnt", name: "Recovered" },
      { value: "accExamCnt", name: "Tested" },
      { value: "decideRate", name: "Confirmed Rate" },
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

  return (
    <div className="container mx-auto px-5 py-12 bg-gray-200 dark:bg-gray-800">
      <Header title={"Domestic"} />
      <Navbar />
      <Cases caseInfosItems={caseInfosItems} />
      <ChartByDate chartData={domesticCovidItems} chartSelectOptions={chartSelectOptions} />
      <RegionTable
        todayCovidItems={todayCovidItems}
        yesterdayCovidItems={yesterdayCovidItems}
        dayBeforeYesterdayCovidItems={dayBeforeYesterdayCovidItems}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    baseUrl: domesticCovidBaseUrl,
    serviceKey: domesticCovidServiceKey,
    params: domesticCovidParams,
  } = DomesticCovidService;

  const {
    pageNo: domesticCovidPageNo,
    numOfRows: domesticCovidNumOfRows,
    startCreateDt: domesticCovidStartCreateDt,
    endCreateDt: domesticCovidEndCreateDt,
  } = domesticCovidParams;

  const {
    baseUrl: domesticRegionCovidBaseUrl,
    serviceKey: domesticRegionCovidServiceKey,
    params: domesticRegionCovidParams,
  } = DomesticRegionCovidService;

  const {
    pageNo: domesticRegionCovidPageNo,
    numOfRows: domesticRegionCovidNumOfRows,
    startCreateDt: domesticRegionCovidStartCreateDt,
    endCreateDt: domesticRegionCovidEndCreateDt,
  } = domesticRegionCovidParams;

  const { data: domesticCovidData } = await axios.get(
    `${domesticCovidBaseUrl}?serviceKey=${domesticCovidServiceKey}&pageNo=${domesticCovidPageNo}&numOfRows=${domesticCovidNumOfRows}&startCreateDt=${domesticCovidStartCreateDt}&endCreateDt=${domesticCovidEndCreateDt}`
  );

  const domesticCovidItems = await domesticCovidData.response.body.items.item;

  const { data: domesticRegionCovidData } = await axios.get(
    `${domesticRegionCovidBaseUrl}?serviceKey=${domesticRegionCovidServiceKey}&pageNo=${domesticRegionCovidPageNo}&numOfRows=${domesticRegionCovidNumOfRows}&startCreateDt=${domesticRegionCovidStartCreateDt}&endCreateDt=${domesticRegionCovidEndCreateDt}`
  );

  const domesticRegionCovidItems = await domesticRegionCovidData.response.body.items.item;

  return {
    props: {
      domesticCovidItems,
      domesticRegionCovidItems,
    },
  };
};

export default Home;
