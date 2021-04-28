import { toComma } from "../utils";
import IncreaseDecrease from "./IncreaseDecrease";

const Cases = ({
  accCovidItem: { decideCnt: accDecideCnt, deathCnt: accDeathCnt, clearCnt: accClearCnt, accExamCnt: accExamCnt },
  yesterdayAccCovidItem: {
    decideCnt: yesterdayAccDecideCnt,
    deathCnt: yesterdayAccDeathCnt,
    clearCnt: yesterdayAccClearCnt,
    accExamCnt: yesterdayAccExamCnt,
  },
}) => {
  // TODO) 중복되는 스타일을 어떻게 해결할까
  return (
    <div className="w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16">
      <div className="w-36 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-red-400 dark:bg-gray-600 dark:border-gray-500">
        <div className="text-lg leading-4 tracking-wide">Confirmed</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accDecideCnt)}</div>
        <IncreaseDecrease increaseDecreaseNumber={accDecideCnt - yesterdayAccDecideCnt} />
      </div>
      <div className="w-36 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-black dark:bg-gray-600 dark:border-gray-500">
        <div className="text-lg leading-4 tracking-wide">Deaths</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accDeathCnt)}</div>
        <IncreaseDecrease increaseDecreaseNumber={accDeathCnt - yesterdayAccDeathCnt} />
      </div>
      <div className="w-36 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-green-400 dark:bg-gray-600 dark:border-gray-500">
        <div className="text-lg leading-4 tracking-wide">Recovered</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accClearCnt)}</div>
        <IncreaseDecrease increaseDecreaseNumber={accClearCnt - yesterdayAccClearCnt} />
      </div>
      <div className="w-36 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-blue-400 dark:bg-gray-600 dark:border-gray-500">
        <div className="text-lg leading-4 tracking-wide">Tested</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accExamCnt)}</div>
        <IncreaseDecrease increaseDecreaseNumber={accExamCnt - yesterdayAccExamCnt} />
      </div>
    </div>
  );
};

export default Cases;
