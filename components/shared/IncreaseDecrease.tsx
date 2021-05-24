import React from "react";
import { getSignNumber } from "../../utils";
import { IncreaseDecreaseIcon } from ".";

const IncreaseDecrease = ({ increaseDecreaseNumber, hasTextColor = true }) => {
  let signNumber = getSignNumber(increaseDecreaseNumber);
  const classes = `text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold dark:bg-gray-500`;

  return (
    <div className={classes} style={hasTextColor ? {} : { color: `${signNumber === 1 ? "red" : signNumber === -1 ? "blue" : "black"}` }}>
      <IncreaseDecreaseIcon increaseDecreaseNumber={increaseDecreaseNumber} /> {increaseDecreaseNumber}
    </div>
  );
};

export default React.memo(IncreaseDecrease);
