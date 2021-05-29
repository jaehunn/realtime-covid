import React from "react";
import { Case } from ".";

type CasesProps = {
  caseInfosItems: {
    caseType: string;
    caseCnt: number;
    caseIncreaseDecrease: number;
    color: string;
  }[];
};

const Cases = ({ caseInfosItems }: CasesProps) => {
  const classes = "container mx-auto flex justify-center mt-16 pb-10 mb-10 border-b border-gray-800 dark:border-gray-200";

  return (
    <div className={classes}>
      {caseInfosItems.map(({ caseType, caseCnt, caseIncreaseDecrease, color }, index) => (
        <Case key={index} caseType={caseType} caseCnt={caseCnt} caseIncreaseDecrease={caseIncreaseDecrease} color={color} />
      ))}
    </div>
  );
};

export default React.memo(Cases);
