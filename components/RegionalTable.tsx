import RegionItem from "./RegionItem";
import { getRegionName } from "../utils";

const RegionalTable = ({ todayCovidItems, yesterdayCovidItems, dayBeforeYesterdayCovidItems }) => {
  // TODO) 무한 스크롤 기능
  return (
    <div className="w-1/2 bg-blue-50 border flex flex-col m-auto mt-16 shadow-lg rounded-md dark:border-gray-500 dark:bg-gray-600">
      <div className="w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold dark:text-gray-200 dark:bg-gray-500">
        <div className="w-1/5 h-12 flex justify-center items-center">Location</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Today Confirmed</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Confirmed</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Deaths</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Recovered</div>
      </div>

      {todayCovidItems.map(({ gubunEn, incDec, defCnt, deathCnt, isolClearCnt }, index) => {
        const {
          defCnt: yesterdayDefCnt,
          deathCnt: yesterdayDeathCnt,
          isolClearCnt: yesterdayRecoveredCnt,
        } = yesterdayCovidItems[index];

        const {
          defCnt: dayBeforeYesterdayDefCnt,
          deathCnt: dayBeforeYesterdayDeathCnt,
          isolClearCnt: dayBeforeYesterdayRecoveredCnt,
        } = dayBeforeYesterdayCovidItems[index];

        const todayConfirmed = defCnt - yesterdayDefCnt;
        const yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;

        const todayDeaths = deathCnt - yesterdayDeathCnt;
        const yesterdayDeaths = yesterdayDeathCnt - dayBeforeYesterdayDeathCnt;

        const todayRecovered = isolClearCnt - yesterdayRecoveredCnt;
        const yesterdayRecovered = yesterdayRecoveredCnt - dayBeforeYesterdayRecoveredCnt;

        if (~gubunEn.indexOf("-do")) gubunEn = getRegionName(gubunEn);

        return (
          <RegionItem
            key={index}
            region={gubunEn}
            todayConfirmed={todayConfirmed}
            todayConfirmedIncreaseDecrease={todayConfirmed - yesterdayConfirmed}
            confirmed={defCnt}
            confirmedIncreaseDecrease={incDec}
            deaths={deathCnt}
            todayDeathsIncreaseDecrease={todayDeaths - yesterdayDeaths}
            recovered={isolClearCnt}
            todayRecoveredIncreaseDecrease={todayRecovered - yesterdayRecovered}
          />
        );
      })}
    </div>
  );
};

export default RegionalTable;
