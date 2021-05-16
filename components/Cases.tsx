import React from "react";
import { Case } from "../components";

const Cases = ({ caseInfosItems }) => {
  return (
    <div className="lg:w-3/5 mx-auto flex justify-evenly m-auto mt-16 pb-10 mb-10 border-b border-gray-800 dark:border-gray-200">
      {caseInfosItems.map(({ caseType, caseCnt, caseIncreaseDecrease, color }, index) => (
        <Case
          key={index}
          caseType={caseType}
          caseCnt={caseCnt}
          caseIncreaseDecrease={caseIncreaseDecrease}
          color={color}
        />
      ))}
    </div>
  );
};

export default React.memo(Cases);
