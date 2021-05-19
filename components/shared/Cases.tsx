import React from "react";
import { Case } from "../shared";

type CasesProps = {
  caseInfosItems: {
    caseType: string;
    caseCnt: string;
    caseIncreaseDecrease: string;
    color: string;
  }[];
};

const Cases = ({ caseInfosItems }: CasesProps) => {
  const classes = "lg:w-3/5 mx-auto flex justify-evenly m-auto mt-16 pb-10 mb-10 border-b border-gray-800 dark:border-gray-200";

  return (
    <div className={classes}>
      {caseInfosItems.map(({ caseType, caseCnt, caseIncreaseDecrease, color }, index) => (
        <Case key={index} caseType={caseType} caseCnt={caseCnt} caseIncreaseDecrease={caseIncreaseDecrease} color={color} />
      ))}
    </div>
  );
};

export default React.memo(Cases);
