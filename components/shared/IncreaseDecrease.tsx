import React from "react";
import { getSignNumber } from "../../utils";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IncreaseDecrease = ({ increaseDecreaseNumber, hasTextColor = true }) => {
  let signNumber = getSignNumber(increaseDecreaseNumber);

  return (
    <div
      className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold dark:bg-gray-500"
      style={hasTextColor ? {} : { color: `${signNumber === 1 ? "red" : signNumber === -1 ? "blue" : "black"}` }}
    >
      <IncreaseDecreaseIcon increaseDecreaseNumber={increaseDecreaseNumber} /> {increaseDecreaseNumber}
    </div>
  );
};

const IncreaseDecreaseIcon = ({ increaseDecreaseNumber }) => {
  return (
    <>
      {getSignNumber(increaseDecreaseNumber) === 1 ? (
        <FontAwesomeIcon icon={faArrowUp} />
      ) : getSignNumber(increaseDecreaseNumber) === -1 ? (
        <FontAwesomeIcon icon={faArrowDown} />
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(IncreaseDecrease);
