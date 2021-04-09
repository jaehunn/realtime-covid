import RegionItem from "./RegionItem";

const RegionalTable = ({ covidItems }) => {
  console.log("RegionalTable", covidItems); // 일별 지역 데이터 19개

  const todayCovidItems = covidItems.slice(0, 19);
  const yesterdayCovidItems = covidItems.slice(19, 38);
  const dayBeforeYesterdayCovidItems = covidItems.slice(38, 57);

  // TODO) 무한 스크롤 기능
  // TODO) 금일 확진자 수, 어제기준 증감 수 구하기
  return (
    <div className="w-1/2 h-80 bg-blue-50 flex flex-col m-auto mt-16 shadow-lg rounded-md">
      <div className="w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold">
        <div className="w-1/5 h-12 flex justify-center items-center">Location</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Today Confirmed</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Confirmed</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Deaths</div>
        <div className="w-1/5 h-12 flex justify-center items-center">Recovered</div>
      </div>

      {todayCovidItems.map(({ gubunEn, incDec, defCnt, deathCnt, isolClearCnt }, index) => {
        const { defCnt: yesterdayDefCnt } = yesterdayCovidItems[index];
        const { defCnt: dayBeforeYesterdayDefCnt } = dayBeforeYesterdayCovidItems[index];

        const todayConfirmed = defCnt - yesterdayDefCnt;
        const yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;

        return (
          <RegionItem
            key={index}
            region={gubunEn}
            todayConfirmed={todayConfirmed}
            todayIncreaseDecrease={todayConfirmed - yesterdayConfirmed}
            confirmed={defCnt}
            increaseDecrease={incDec}
            deaths={deathCnt}
            recovered={isolClearCnt}
          />
        );
      })}
    </div>
  );
};

export default RegionalTable;
