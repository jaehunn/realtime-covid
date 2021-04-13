import { OverseasCovidDataType } from "../pages/overseas";
import IncreaseDecrease from "./IncreaseDecrease";

import { getAllDecideDeathCnt, toComma } from "../utils";

interface OverseasCasesProps {
  overseasCovidItems: OverseasCovidDataType[];
}

const OverseasCases = ({ overseasCovidItems }: OverseasCasesProps) => {
  const todayOverseasCovidItem = overseasCovidItems.slice(0, 190);
  const yesterdayOverseasCovidItem = overseasCovidItems.slice(190, 380);

  const [todayAllDecideCnt, todayAllDeathCnt] = getAllDecideDeathCnt(todayOverseasCovidItem);
  const [yesterdayAllDecideCnt, yesterdayAllDeathCnt] = getAllDecideDeathCnt(yesterdayOverseasCovidItem);

  return (
    <div className="w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16">
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-red-500">
        <div className="text-lg leading-4 tracking-wide">Confirmed</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(todayAllDecideCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={todayAllDecideCnt - yesterdayAllDecideCnt} />
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-black">
        <div className="text-lg leading-4 tracking-wide">Deaths</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(yesterdayAllDecideCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={todayAllDeathCnt - yesterdayAllDeathCnt} />
        </div>
      </div>
    </div>
  );
};

export default OverseasCases;
