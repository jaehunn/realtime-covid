import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getSignNumber } from "../utils";

type IncreaseDecreaseIconProps = {
  increaseDecreaseNumber: number;
};

const IncreaseDecreaseIcon = ({ increaseDecreaseNumber }: IncreaseDecreaseIconProps) => {
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

export default IncreaseDecreaseIcon;
