import { toComma } from "../utils";
import IncreaseDecrease from "./IncreaseDecrease";

// TODO) props 타입을 어떻게 설정할까
interface RegionItemProps {
  CovidItem: any;
}

const RegionItem = ({
  region,
  todayConfirmed,
  todayConfirmedIncreaseDecrease,
  confirmed,
  confirmedIncreaseDecrease,
  deaths,
  todayDeathsIncreaseDecrease,
  recovered,
  todayRecoveredIncreaseDecrease,
}) => {
  return (
    <div className="w-full h-full bg-blue-50 flex justify-evenly shadow-lg rounded-md text-xs leading-2 tracking-wide font-semibold">
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">{region}</div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(todayConfirmed)}
        <div
          className="inline-block bg-blue-100 rounded-full py-1/4 px-1/2 ml-3"
          style={todayConfirmedIncreaseDecrease === 0 ? { display: "none" } : {}}
        >
          <IncreaseDecrease increaseDecreaseNumber={todayConfirmedIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(confirmed)}
        <div
          className="inline-block bg-blue-100 rounded-full py-1/4 px-1/2 ml-3"
          style={confirmedIncreaseDecrease <= 0 ? { display: "none" } : {}}
        >
          <IncreaseDecrease increaseDecreaseNumber={confirmedIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(deaths)}
        <div
          className="inline-block bg-blue-100 rounded-full py-1/4 px-1/2 ml-3"
          style={todayDeathsIncreaseDecrease <= 0 ? { display: "none" } : {}}
        >
          <IncreaseDecrease increaseDecreaseNumber={todayDeathsIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(recovered)}
        <div
          className="inline-block bg-blue-100 rounded-full py-1/4 px-1/2 ml-3"
          style={todayRecoveredIncreaseDecrease <= 0 ? { display: "none" } : {}}
        >
          <IncreaseDecrease increaseDecreaseNumber={todayRecoveredIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
    </div>
  );
};

export default RegionItem;
