import axios from "axios";
import { Header, Navbar, Cases, ChartByDate, RegionTable } from "../components/shared";
import { DomesticCovidService, DomesticRegionCovidService } from "../env";
import { toComma, toIncreaseDecreaseNumber } from "../utils";
import { domesticChartSelectOptions } from "../data";

const Home = ({ domesticCovidItems, domesticRegionCovidItems }) => {
  const [accCovidItem, yesterdayAccCovidItem] = domesticCovidItems;

  const { decideCnt: accDecideCnt, deathCnt: accDeathCnt, clearCnt: accClearCnt, accExamCnt: accExamCnt } = accCovidItem;

  const {
    decideCnt: yesterdayAccDecideCnt,
    deathCnt: yesterdayAccDeathCnt,
    clearCnt: yesterdayAccClearCnt,
    accExamCnt: yesterdayAccExamCnt,
  } = yesterdayAccCovidItem;

  const accCovidItemInfos = [accDecideCnt, accDeathCnt, accClearCnt, accExamCnt];
  const yesterdayAccCovidItemInfos = [yesterdayAccDecideCnt, yesterdayAccDeathCnt, yesterdayAccClearCnt, yesterdayAccExamCnt];

  const todayCovidItems = domesticRegionCovidItems.slice(0, 19);
  const yesterdayCovidItems = domesticRegionCovidItems.slice(19, 38);
  const dayBeforeYesterdayCovidItems = domesticRegionCovidItems.slice(38, 57);

  const domesticCaseInfosItems = [
    ["Confirmed", "text-red-400"],
    ["Deaths", "text-black"],
    ["Recovered", "text-green-400"],
    ["Tested", "text-blue-400"],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: toComma(accCovidItemInfos[index]),
    caseIncreaseDecrease: toIncreaseDecreaseNumber(accCovidItemInfos[index] - yesterdayAccCovidItemInfos[index]),
    color,
  }));

  return (
    <div className="container mx-auto px-5 py-12 bg-gray-50 dark:bg-gray-800">
      <Header title={"Domestic"} />
      <Navbar />
      <Cases caseInfosItems={domesticCaseInfosItems} />
      <ChartByDate chartData={domesticCovidItems} chartSelectOptions={domesticChartSelectOptions} />
      <RegionTable
        todayCovidItems={todayCovidItems}
        yesterdayCovidItems={yesterdayCovidItems}
        dayBeforeYesterdayCovidItems={dayBeforeYesterdayCovidItems}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const { baseUrl: domesticCovidBaseUrl, serviceKey: domesticCovidServiceKey, params: domesticCovidParams } = DomesticCovidService;

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

  let domesticCovidItems = [];
  let domesticRegionCovidItems = [];

  try {
    const { data: domesticCovidData } = await axios.get(
      `${domesticCovidBaseUrl}?serviceKey=${domesticCovidServiceKey}&pageNo=${domesticCovidPageNo}&numOfRows=${domesticCovidNumOfRows}&startCreateDt=${domesticCovidStartCreateDt}&endCreateDt=${domesticCovidEndCreateDt}`
    );

    domesticCovidItems = await domesticCovidData.response.body.items.item;
  } catch (err) {
    console.error(err);
  }

  try {
    const { data: domesticRegionCovidData } = await axios.get(
      `${domesticRegionCovidBaseUrl}?serviceKey=${domesticRegionCovidServiceKey}&pageNo=${domesticRegionCovidPageNo}&numOfRows=${domesticRegionCovidNumOfRows}&startCreateDt=${domesticRegionCovidStartCreateDt}&endCreateDt=${domesticRegionCovidEndCreateDt}`
    );

    domesticRegionCovidItems = await domesticRegionCovidData.response.body.items.item;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      domesticCovidItems,
      domesticRegionCovidItems,
    },
  };
};

export default Home;
