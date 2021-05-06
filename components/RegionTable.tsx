import { IncreaseDecrease } from "../components";
import { getRegionName, toComma } from "../utils";

const RegionTable = ({ todayCovidItems, yesterdayCovidItems, dayBeforeYesterdayCovidItems }) => {
  return (
    <div className="lg:w-3/5 flex flex-col pb-10 mb-10 mt-16 mx-auto border-b border-gray-800 shadow-lg rounded-md bg-blue-50 dark:bg-gray-600">
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

const RegionItem = ({
  region,
  todayConfirmed,
  todayConfirmedIncreaseDecrease,
  confirmed,
  confirmedIncreaseDecrease,
  deaths,
  todayDeathsIncreaseDecrease,
  recovered,
  todayRecoveredIncreaseDecrease,
}) => {
  return (
    <div className="w-full h-full bg-blue-50 flex justify-evenly text-xs leading-2 tracking-wide font-semibold dark:bg-gray-600 dark:text-gray-200">
      <div className="w-1/5 h-12 flex justify-center items-center">{region}</div>
      <div className="w-1/5 h-12 flex justify-center items-center">
        {toComma(todayConfirmed)}
        <div className="inline-block ml-3" style={todayConfirmedIncreaseDecrease === 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={todayConfirmedIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 flex justify-center items-center">
        {toComma(confirmed)}
        <div className="inline-block ml-3" style={confirmedIncreaseDecrease <= 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={confirmedIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 flex justify-center items-center">
        {toComma(deaths)}
        <div className="inline-block ml-3" style={todayDeathsIncreaseDecrease <= 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={todayDeathsIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 flex justify-center items-center ">
        {toComma(recovered)}
        <div className="inline-block ml-3" style={todayRecoveredIncreaseDecrease <= 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={todayRecoveredIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
    </div>
  );
};

export default RegionTable;
