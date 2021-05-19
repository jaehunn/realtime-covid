import axios from "axios";
import { OverseasRegionTable } from "../components";
import { Header, Navbar, Cases, ChartByDate } from "../components/shared";
import { OverseasCovidService } from "../env";
import { toComma, toIncreaseDecreaseNumber, getAllDecideDeathCnt, getOverseasChartDataForm } from "../utils";
import { overseasChartSelectOptions } from "../data";
import { useScroll } from "../hooks";

const Overseas = ({ overseasCovidItems }) => {
  const { todayOverseasCovidItems, yesterdayOverseasCovidItems, dayBeforeYesterdayOverseasCovidItems, page, setPage } = useScroll(overseasCovidItems);

  const [accDecideCnt, accDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(0, 190));
  const [yesterdayaccDecideCnt, yesterdayAccDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(190, 380));

  const accOverseasCovidItemInfos = [accDecideCnt, accDeathCnt];
  const yesterdayAccOverseasCovidItemInfos = [yesterdayaccDecideCnt, yesterdayAccDeathCnt];

  const overseasChartData = getOverseasChartDataForm(overseasCovidItems);

  const overseasCaseInfosItems = [
    ["Confirmed", "text-red-400"],
    ["Deaths", "text-black"],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: toComma(accOverseasCovidItemInfos[index]),
    caseIncreaseDecrease: toIncreaseDecreaseNumber(accOverseasCovidItemInfos[index] - yesterdayAccOverseasCovidItemInfos[index]),
    color,
  }));

  return (
    <div className="container mx-auto px-5 py-12 bg-gray-50 dark:bg-gray-800 overflow-auto">
      <Header title={"Overseas"} />
      <Navbar />
      <Cases caseInfosItems={overseasCaseInfosItems} />
      <ChartByDate chartData={overseasChartData} chartSelectOptions={overseasChartSelectOptions} />
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

export const getStaticProps = async () => {
  const { baseUrl: overseasCovidBaseUrl, serviceKey: overseasCovidServiceKey, params: overseasCovidParams } = OverseasCovidService;

  const {
    pageNo: overseasCovidPageNo,
    numOfRows: overseasCovidNumOfRows,
    startCreateDt: overseasCovidStartCreateDt,
    endCreateDt: overseasCovidEndCreateDt,
  } = overseasCovidParams;

  let overseasCovidItems = [];

  try {
    const { data: _overseasCovidData } = await axios.get(
      `${overseasCovidBaseUrl}?serviceKey=${overseasCovidServiceKey}&pageNo=${overseasCovidPageNo}&numOfRows=${overseasCovidNumOfRows}&startCreateDt=${overseasCovidStartCreateDt}&endCreateDt=${overseasCovidEndCreateDt}`
    );

    overseasCovidItems = await _overseasCovidData.response.body.items.item;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      overseasCovidItems,
    },
  };
};

export default Overseas;
