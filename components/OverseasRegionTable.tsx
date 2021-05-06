import FetchMoreTrigger from "./FetchMoreTrigger";
import IncreaseDecrease from "./IncreaseDecrease";
import { toComma } from "../utils";

const OverseasRegionlTable = ({
  todayOverseasCovidItems,
  yesterdayOverseasCovidItems,
  dayBeforeYesterdayOverseasCovidItems,
  page,
  setPage,
}) => {
  return (
    <div className="lg:w-3/5 relative flex flex-col pb-10 mb-10 mt-16 mx-auto border-b border-gray-800 shadow-lg rounded-md bg-blue-50 dark:bg-gray-600">
      <div className="w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold dark:text-gray-200 dark:bg-gray-500">
        <div className="w-1/3 h-12 flex justify-center items-center">Location</div>
        <div className="w-1/3 h-12 flex justify-center items-center">Confirmed</div>
        <div className="w-1/3 h-12 flex justify-center items-center">Deaths</div>
      </div>

      {todayOverseasCovidItems.map(({ nationNmEn, natDefCnt, natDeathCnt }, index) => {
        const { natDefCnt: yesterdayDefCnt, natDeathCnt: yesterdayDeathCnt } = yesterdayOverseasCovidItems[index];
        const {
          natDefCnt: dayBeforeYesterdayDefCnt,
          natDeathCnt: dayBeforeDeathCnt,
        } = dayBeforeYesterdayOverseasCovidItems[index];

        const todayConfirmed = natDefCnt - yesterdayDefCnt;
        const yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;

        const todayDeaths = natDeathCnt - yesterdayDeathCnt;
        const yesterdayDeaths = yesterdayDeathCnt - dayBeforeDeathCnt;

        return (
          <OverseasRegionItem
            key={index}
            region={nationNmEn}
            confirmed={natDefCnt}
            confirmedIncreaseDecrease={todayConfirmed - yesterdayConfirmed}
            deaths={natDeathCnt}
            deathsIncreaseDecrease={todayDeaths - yesterdayDeaths}
          />
        );
      })}

      <FetchMoreTrigger page={page} setPage={setPage} />
    </div>
  );
};

const OverseasRegionItem = ({ region, confirmed, confirmedIncreaseDecrease, deaths, deathsIncreaseDecrease }) => {
  return (
    <div className="w-full h-full flex justify-evenly text-xs leading-2 tracking-wide font-semibold dark:bg-gray-600 dark:text-gray-200">
      <div className="w-1/3 h-12 flex justify-center items-center">{region}</div>
      <div className="w-1/3 h-12 flex justify-center items-center">
        {toComma(confirmed)}
        <div className="inline-block ml-3" style={confirmedIncreaseDecrease === 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={confirmedIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/3 h-12 flex justify-center items-center">
        {toComma(deaths)}
        <div className="inline-block ml-3" style={deathsIncreaseDecrease <= 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={deathsIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
    </div>
  );
};

export default OverseasRegionlTable;
