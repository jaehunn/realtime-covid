import { toComma } from "../utils";
import IncreaseDecrease from "./IncreaseDecrease";

type CasesProps = { covidItems: any };

const Cases = ({ covidItems }: CasesProps) => {
  console.log("Cases: ", covidItems);

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

  // TODO) 중복되는 스타일을 어떻게 해결할까
  // TODO) 증감에 따라 유동적으로 색 조정, 화살표 아이콘
  return (
    <div className="w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16">
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-red-500">
        <div className="text-lg leading-4 tracking-wide">Confirmed</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(todayDecideCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={todayDecideCnt - yesterdayDecideCnt} />
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-black">
        <div className="text-lg leading-4 tracking-wide">Deaths</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(todayDeathCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={todayDeathCnt - yesterdayDeathCnt} />
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-green-500">
        <div className="text-lg leading-4 tracking-wide">Recovered</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(todayExamCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={todayExamCnt - yesterdayExamCnt} />
        </div>
      </div>
      <div className="w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-blue-500">
        <div className="text-lg leading-4 tracking-wide">Tested</div>
        <div className="text-sm leading-8 tracking-wide">{toComma(todayClearCnt)}</div>
        <div className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold">
          <IncreaseDecrease increaseDecreaseNumber={todayClearCnt - yesterdayClearCnt} />
        </div>
      </div>
    </div>
  );
};

export default Cases;
