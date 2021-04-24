import IncreaseDecrease from "./IncreaseDecrease";
import { toComma } from "../utils";

const OverseasCases = ({ todayAllDecideCnt, todayAllDeathCnt, yesterdayAllDecideCnt, yesterdayAllDeathCnt }) => {
  return (
    <div className="w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16">
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-red-500 dark:bg-gray-600 dark:border-gray-500">
        <div className="text-lg leading-4 tracking-wide">Confirmed</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(todayAllDecideCnt)}</div>
        <IncreaseDecrease increaseDecreaseNumber={todayAllDecideCnt - yesterdayAllDecideCnt} />
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-black dark:bg-gray-600 dark:border-gray-500">
        <div className="text-lg leading-4 tracking-wide">Deaths</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(yesterdayAllDecideCnt)}</div>
        <IncreaseDecrease increaseDecreaseNumber={todayAllDeathCnt - yesterdayAllDeathCnt} />
      </div>
    </div>
  );
};

export default OverseasCases;
