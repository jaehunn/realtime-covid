import React from "react";
import { getSignNumber } from "../../utils";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IncreaseDecreaseIcon = ({ increaseDecreaseNumber }) => {
  return (
    <>
      {getSignNumber(increaseDecreaseNumber) === 1 ? (
        <FontAwesomeIcon size="sm" icon={faArrowUp} />
      ) : getSignNumber(increaseDecreaseNumber) === -1 ? (
        <FontAwesomeIcon size="sm" icon={faArrowDown} />
      ) : (
        <></>
      )}
    </>
  );
};

export default React.memo(IncreaseDecreaseIcon);
