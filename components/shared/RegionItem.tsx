import React from "react";
import { RegionItemRecord } from ".";

const RegionItem = ({ region, regionRecord }) => {
  return (
    <div className="w-full h-full bg-blue-50 flex justify-evenly text-xs leading-2 tracking-wide font-semibold dark:bg-gray-600 dark:text-gray-200">
      <div className="w-1/5 h-12 flex justify-center items-center">{region}</div>
      {regionRecord.map(({ number, increaseDecreaseNumber }, index) => (
        <RegionItemRecord key={`record${index}`} number={number} increaseDecreaseNumber={increaseDecreaseNumber} />
      ))}
    </div>
  );
};
export default React.memo(RegionItem);
