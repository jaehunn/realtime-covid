import { toIncreaseDecrease, toComma } from "../utils";

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
        {toComma(todayConfirmed)}{" "}
        <span className="inline-block bg-blue-100 rounded-full py-1 px-2 ml-3">
          {toIncreaseDecrease(todayIncreaseDecrease)}
        </span>
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(confirmed)}{" "}
        <span className="inline-block bg-blue-100 rounded-full py-1 px-2 ml-3">
          {toIncreaseDecrease(increaseDecrease)}
        </span>
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
