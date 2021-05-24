import React from "react";
import { IncreaseDecrease } from ".";
type CaseProps = {
  caseType: string;
  caseCnt: string;
  caseIncreaseDecrease: string;
  color: string;
};

const Case = ({ caseType, caseCnt, caseIncreaseDecrease, color }: CaseProps) => {
  const classes = `sm:w-36 sm:h-24 w-28 h-20 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-lg dark:bg-gray-600 dark:border-gray-500 ${color}`;

  return (
    <div className={classes}>
      <div className="sm:text-lg sm:leading-4 text-sm leading-2 tracking-wide">{caseType}</div>
      <div className="sm:text-sm sm:leading-8 text-xs leading-4 tracking-wide">{caseCnt}</div>
      <IncreaseDecrease increaseDecreaseNumber={caseIncreaseDecrease} />
    </div>
  );
};

export default React.memo(Case);
