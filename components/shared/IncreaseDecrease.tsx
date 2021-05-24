import React from "react";
import { getSignNumber } from "../../utils";
import { IncreaseDecreaseIcon } from ".";

const IncreaseDecrease = ({ increaseDecreaseNumber, hasTextColor = true }) => {
  let signNumber = getSignNumber(increaseDecreaseNumber);
  const classes = `flex text-xs leading-4 tracking-wide rounded-full sm:py-1 sm:px-2 py-1/2 px-1 bg-blue-100 font-semibold dark:bg-gray-500`;

  return (
    <div className={classes} style={hasTextColor ? {} : { color: `${signNumber === 1 ? "red" : signNumber === -1 ? "blue" : "black"}` }}>
      <IncreaseDecreaseIcon increaseDecreaseNumber={increaseDecreaseNumber} /> {increaseDecreaseNumber}
    </div>
  );
};

export default React.memo(IncreaseDecrease);
