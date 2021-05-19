import React from "react";
import { IncreaseDecrease } from "../shared";
type CaseProps = {
  caseType: string;
  caseCnt: string;
  caseIncreaseDecrease: string;
  color: string;
};

const Case = ({ caseType, caseCnt, caseIncreaseDecrease, color }: CaseProps) => {
  const classes = `w-36 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-lg dark:bg-gray-600 dark:border-gray-500 ${color}`;

  return (
    <div className={classes}>
      <div className="text-lg leading-4 tracking-wide">{caseType}</div>
      <div className="text-sm leading-8 tracking-wide">{caseCnt}</div>
      <IncreaseDecrease increaseDecreaseNumber={caseIncreaseDecrease} />
    </div>
  );
};

export default React.memo(Case);
