import { toComma } from "../utils";
import IncreaseDecrease from "./IncreaseDecrease";

const RegionItem = ({
  region,
  todayConfirmed,
  todayIncreaseDecrease,
  confirmed,
  increaseDecrease,
  deaths,
  recovered,
}) => {
  return (
    <div className="w-full h-full bg-blue-50 flex justify-evenly shadow-lg rounded-md text-xs leading-2 tracking-wide font-semibold">
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">{region}</div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(todayConfirmed)}
        <div className="inline-block bg-blue-100 rounded-full py-1 px-2 ml-3">
          <IncreaseDecrease increaseDecreaseNumber={todayIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(confirmed)}
        <div className="inline-block bg-blue-100 rounded-full py-1 px-2 ml-3">
          <IncreaseDecrease increaseDecreaseNumber={increaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(deaths)}
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(recovered)}
      </div>
    </div>
  );
};

export default RegionItem;
