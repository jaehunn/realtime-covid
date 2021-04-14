import React from "react";
import { OverseasCovidDataType } from "../pages/overseas";
import OverseasRegionItem from "./OverseasRegionItem";

interface OverseasRegionlTableProps {
  overseasCovidItems: OverseasCovidDataType[];
}

const OverseasRegionlTable = ({ overseasCovidItems }: OverseasRegionlTableProps) => {
  const accOverseasCovidItems = overseasCovidItems.slice(0, 190);
  const yesterdayCovidItems = overseasCovidItems.slice(190, 380);
  const dayBeforeYesterdayCovidItems = overseasCovidItems.slice(380, 570);

  console.log(accOverseasCovidItems);

  // TODO) 무한 스크롤 기능
  return (
    <div className="w-1/3 bg-blue-50 flex flex-col m-auto mt-16 shadow-lg rounded-md">
      <div className="w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold">
        <div className="w-1/3 h-12 flex justify-center items-center">Location</div>
        <div className="w-1/3 h-12 flex justify-center items-center">Confirmed</div>
        <div className="w-1/3 h-12 flex justify-center items-center">Deaths</div>
      </div>

      {accOverseasCovidItems.map(({ nationNmEn, natDefCnt, natDeathCnt }, index) => {
        const { natDefCnt: yesterdayDefCnt, natDeathCnt: yesterdayDeathCnt } = yesterdayCovidItems[index];
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
