import FetchMoreTrigger from "./FetchMoreTrigger";
import OverseasRegionItem from "./OverseasRegionItem";

interface OverseasRegionlTableProps {}

const OverseasRegionlTable = ({
  todayOverseasCovidItems,
  yesterdayOverseasCovidItems,
  dayBeforeYesterdayCovidItems,
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
        const { natDefCnt: dayBeforeYesterdayDefCnt, natDeathCnt: dayBeforeDeathCnt } = dayBeforeYesterdayCovidItems[
          index
        ];

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

export default OverseasRegionlTable;
