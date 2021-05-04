import Case from "./Case";
import { toComma } from "../utils";

const Cases = ({ accCovidItemInfos, yesterdayAccCovidItemInfos }) => {
  const caseInfosItems = [
    ["Confirmed", "rgba(248, 113, 113, 1)"],
    ["Deaths", "rgba(0, 0, 0, 1)"],
    ["Recovered", "rgba(52, 211, 153, 1)"],
    ["Tested", "rgba(96, 165, 250, 1)"],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: toComma(accCovidItemInfos[index]),
    caseIncreaseDecrease: accCovidItemInfos[index] - yesterdayAccCovidItemInfos[index],
    color,
  }));

  return (
    <div className="lg:w-3/5 mx-auto flex justify-evenly m-auto mt-16 pb-10 mb-10 border-b border-gray-200">
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

export default Cases;
