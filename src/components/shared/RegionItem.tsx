import React from "react";
import { RegionItemRecord } from ".";

const RegionItem = ({ region, regionRecord }) => {
  return (
    <div className="flex justify-evenly sm:text-sm text-xs leading-4 tracking-wide font-semibold bg-blue-50 dark:bg-gray-600 dark:text-gray-200">
      <div className="w-full flex justify-center items-center">{region}</div>
      {regionRecord.map(({ number, increaseDecreaseNumber }, index) => (
        <RegionItemRecord key={`record${index}`} number={number} increaseDecreaseNumber={increaseDecreaseNumber} />
      ))}
    </div>
  );
};
export default React.memo(RegionItem);
