import { toComma } from "../utils";
import IncreaseDecrease from "./IncreaseDecrease";

// TODO) props 타입을 어떻게 설정할까
interface OverseasRegionItemProps {
  CovidItem: any;
}

const OverseasRegionItem = ({ region, confirmed, confirmedIncreaseDecrease, deaths, deathsIncreaseDecrease }) => {
  return (
    <div className="w-full h-full flex justify-evenly text-xs leading-2 tracking-wide font-semibold dark:bg-gray-600 dark:text-gray-200">
      <div className="w-1/3 h-12 flex justify-center items-center">{region}</div>
      <div className="w-1/3 h-12 flex justify-center items-center">
        {toComma(confirmed)}
        <div className="inline-block ml-3" style={confirmedIncreaseDecrease === 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={confirmedIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
      <div className="w-1/3 h-12 flex justify-center items-center">
        {toComma(deaths)}
        <div className="inline-block ml-3" style={deathsIncreaseDecrease <= 0 ? { display: "none" } : {}}>
          <IncreaseDecrease increaseDecreaseNumber={deathsIncreaseDecrease} hasTextColor={false} />
        </div>
      </div>
    </div>
  );
};

export default OverseasRegionItem;
