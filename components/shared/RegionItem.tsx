import React from "react";
import { IncreaseDecrease } from "../shared";
import { toComma } from "../../utils";

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
export default React.memo(RegionItem);
