import React from "react";

import OverseasRegionItem from "./OverseasRegionItem";

interface OverseasRegionlTableProps {}

const OverseasRegionlTable = ({
  todayOverseasCovidItems,
  yesterdayOverseasCovidItems,
  dayBeforeYesterdayCovidItems,
}) => {
  // TODO) 무한 스크롤 기능
  return (
    <div className="w-1/2 bg-blue-50 flex flex-col m-auto mt-16 shadow-lg rounded-md">
      <div className="w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold">
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
    </div>
  );
};

export default OverseasRegionlTable;
