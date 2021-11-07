import React from "react";
import { getSignNumber, toIncreaseDecreaseNumber } from "../../utils";
import { IncreaseDecreaseIcon } from ".";

const IncreaseDecrease = ({ increaseDecreaseNumber, hasTextColor = true }) => {
  let signNumber = getSignNumber(increaseDecreaseNumber);
  const classes = `inline-flex items-center text-xs leading-4 tracking-wide rounded-full sm:py-1 sm:px-2 py-1/2 px-1 bg-blue-100 font-semibold dark:bg-gray-500`;

  return (
    <div
      className={classes}
      style={
        hasTextColor
          ? {}
          : {
              color: `${
                signNumber === 1 ? "red" : signNumber === -1 ? "blue" : "black"
              }`,
            }
      }
    >
      <div className="pr-0.5">
        {toIncreaseDecreaseNumber(increaseDecreaseNumber)}
      </div>
      <IncreaseDecreaseIcon increaseDecreaseNumber={increaseDecreaseNumber} />
    </div>
  );
};

export default React.memo(IncreaseDecrease);
