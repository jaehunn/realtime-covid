import { toComma } from "../utils";
import IncreaseDecrease from "./IncreaseDecrease";

// TODO) props 타입을 어떻게 설정할까
interface OverseasRegionItemProps {
  CovidItem: any;
}

const OverseasRegionItem = ({ region, confirmed, confirmedIncreaseDecrease, deaths, deathsIncreaseDecrease }) => {
  return (
    <div className="w-full h-full bg-blue-50 flex justify-evenly shadow-lg rounded-md text-xs leading-2 tracking-wide font-semibold">
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">{region}</div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(confirmed)}
        <div className="inline-block bg-blue-100 rounded-full py-1 px-2 ml-3">
          <IncreaseDecrease increaseDecreaseNumber={confirmedIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md">
        {toComma(deaths)}
        <div className="inline-block bg-blue-100 rounded-full py-1 px-2 ml-3">
          <IncreaseDecrease increaseDecreaseNumber={deathsIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
    </div>
  );
};

export default OverseasRegionItem;
