import { toIncreaseDecrease } from "../utils";

import styles from "../styles/Cases.module.css";

type CasesProps = { covidItems: any };

const Cases = ({ covidItems }: CasesProps) => {
  const [todayCovidItems, yesterdayCovidItems] = covidItems;

  const {
    decideCnt: todayDecideCnt,
    deathCnt: todayDeathCnt,
    examCnt: todayExamCnt,
    clearCnt: todayClearCnt,
  } = todayCovidItems;

  const {
    decideCnt: yesterdayDecideCnt,
    deathCnt: yesterdayDeathCnt,
    examCnt: yesterdayExamCnt,
    clearCnt: yesterdayClearCnt,
  } = yesterdayCovidItems;

  // TOOD) 증감에 따라 색 조정
  return (
    <div className="w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16">
      <div className="w-40 h-24 bg-blue-100 flex flex-col justify-center items-center shadow-lg rounded-md">
        <div className="text-lg leading-4 tracking-wide text-red-500">Confirmed</div>
        <div className="text-sm leading-8 tracking-wide">{toIncreaseDecrease(todayDecideCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold">
          {toIncreaseDecrease(todayDecideCnt - yesterdayDecideCnt)}
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-100 flex flex-col justify-center items-center shadow-lg rounded-md">
        <div className="text-lg leading-4 tracking-wide text-black">Deaths</div>
        <div className="text-sm leading-8 tracking-wide">{toIncreaseDecrease(todayDeathCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold">
          {toIncreaseDecrease(todayDeathCnt - yesterdayDeathCnt)}
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-100 flex flex-col justify-center items-center shadow-lg rounded-md">
        <div className="text-lg leading-4 tracking-wide text-green-500">Recovered</div>
        <div className="text-sm leading-8 tracking-wide">{toIncreaseDecrease(todayExamCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold">
          {toIncreaseDecrease(todayExamCnt - yesterdayExamCnt)}
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-100 flex flex-col justify-center items-center shadow-lg rounded-md">
        <div className="text-lg leading-4 tracking-wide text-blue-500">Tested</div>
        <div className="text-sm leading-8 tracking-wide">{toIncreaseDecrease(todayClearCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold">
          {toIncreaseDecrease(todayClearCnt - yesterdayClearCnt)}
        </div>
      </div>
    </div>
  );
};

export default Cases;
