import React from "react";
import { IncreaseDecrease } from ".";
import { toComma } from "../../utils";

const RegionItemRecord = ({ number, increaseDecreaseNumber }) => (
  <div className="w-full h-12 flex justify-center items-center">
    {toComma(number)}
    <div className="inline-block ml-1" style={+increaseDecreaseNumber === 0 ? { display: "none" } : {}}>
      <IncreaseDecrease increaseDecreaseNumber={increaseDecreaseNumber} hasTextColor={false} />
    </div>
  </div>
);

export default React.memo(RegionItemRecord);
