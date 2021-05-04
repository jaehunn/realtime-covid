import { toComma } from "../utils";
import Case from "./Case";

const OverseasCases = ({ accOverseasCovidItemInfos, yesterdayAccOverseasCovidItemInfos }) => {
  const caseInfosItems = [
    ["Confirmed", "rgba(248, 113, 113, 1)"],
    ["Deaths", "rgba(0, 0, 0, 1)"],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: toComma(accOverseasCovidItemInfos[index]),
    caseIncreaseDecrease: accOverseasCovidItemInfos[index] - yesterdayAccOverseasCovidItemInfos[index],
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

export default OverseasCases;
