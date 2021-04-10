import { toComma } from "../utils";
import IncreaseDecrease from "./IncreaseDecrease";

type CasesProps = { covidItems: any };

const Cases = ({ covidItems }: CasesProps) => {
  console.log("Cases: ", covidItems);

  const [accCovidItems, yesterdayAccCovidItems] = covidItems;

  const {
    decideCnt: accDecideCnt,
    deathCnt: accDeathCnt,
    clearCnt: accClearCnt,
    accExamCnt: accExamCnt,
  } = accCovidItems;

  const {
    decideCnt: yesterdayAccDecideCnt,
    deathCnt: yesterdayAccDeathCnt,
    clearCnt: yesterdayAccClearCnt,
    accExamCnt: yesterdayAccExamCnt,
  } = yesterdayAccCovidItems;

  // TODO) 중복되는 스타일을 어떻게 해결할까
  return (
    <div className="w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16">
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-red-500">
        <div className="text-lg leading-4 tracking-wide">Confirmed</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accDecideCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={accDecideCnt - yesterdayAccDecideCnt} />
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-black">
        <div className="text-lg leading-4 tracking-wide">Deaths</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accDeathCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={accDeathCnt - yesterdayAccDeathCnt} />
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-green-500">
        <div className="text-lg leading-4 tracking-wide">Recovered</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accClearCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={accClearCnt - yesterdayAccClearCnt} />
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-blue-500">
        <div className="text-lg leading-4 tracking-wide">Tested</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(accExamCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={accExamCnt - yesterdayAccExamCnt} />
        </div>
      </div>
    </div>
  );
};

export default Cases;
