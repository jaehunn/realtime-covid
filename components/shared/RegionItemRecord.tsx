import React from "react";
import { IncreaseDecrease } from ".";

const RegionItemRecord = ({ number, increaseDecreaseNumber }) => (
  <div className="w-full h-12 flex justify-center items-center">
    {number}
    <div className="inline-block ml-1" style={+increaseDecreaseNumber === 0 ? { display: "none" } : {}}>
      <IncreaseDecrease increaseDecreaseNumber={increaseDecreaseNumber} hasTextColor={false} />
    </div>
  </div>
);

export default React.memo(RegionItemRecord);
