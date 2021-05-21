import axios from "axios";
import { Header, Navbar, Cases, ChartByDate, RegionTable, FetchMoreTrigger } from "../components/shared";
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

  const overseasCaseInfosItems = [
    ["Confirmed", "text-red-400"],
    ["Deaths", "text-black"],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: toComma(accOverseasCovidItemInfos[index]),
    caseIncreaseDecrease: toIncreaseDecreaseNumber(accOverseasCovidItemInfos[index] - yesterdayAccOverseasCovidItemInfos[index]),
    color,
  }));

  const overseasChartData = getOverseasChartDataForm(overseasCovidItems);

  const records = [];
  todayOverseasCovidItems.forEach(({ nationNmEn, natDefCnt, natDeathCnt }, index) => {
    const { natDefCnt: yesterdayDefCnt, natDeathCnt: yesterdayDeathCnt } = yesterdayOverseasCovidItems[index];
    const { natDefCnt: dayBeforeYesterdayDefCnt, natDeathCnt: dayBeforeDeathCnt } = dayBeforeYesterdayOverseasCovidItems[index];

    const todayConfirmed = natDefCnt - yesterdayDefCnt;
    const yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;

    const todayDeaths = natDeathCnt - yesterdayDeathCnt;
    const yesterdayDeaths = yesterdayDeathCnt - dayBeforeDeathCnt;

    const currentRecords = {
      region: nationNmEn,
      regionRecord: [
        {
          number: toComma(natDefCnt),
          increaseDecreaseNumber: toIncreaseDecreaseNumber(todayConfirmed - yesterdayConfirmed),
        },
        {
          number: toComma(natDeathCnt),
          increaseDecreaseNumber: toIncreaseDecreaseNumber(todayDeaths - yesterdayDeaths),
        },
      ],
    };

    records.push(currentRecords);
  });

  const overseasRegionTableInfosItems = {
    fields: ["Location", "Confirmed", "Deaths"],
    records,
  };

  return (
    <div className="container mx-auto px-5 py-12 bg-gray-50 dark:bg-gray-800 overflow-auto">
      <Header title={"Overseas"} />
      <Navbar />
      <Cases caseInfosItems={overseasCaseInfosItems} />
      <ChartByDate chartData={overseasChartData} chartSelectOptions={overseasChartSelectOptions} />
      <RegionTable regionTableInfosItems={overseasRegionTableInfosItems}>
        <FetchMoreTrigger page={page} setPage={setPage} />
      </RegionTable>
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
