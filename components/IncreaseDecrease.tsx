import { toIncreaseDecreaseNumber, getSignNumber } from "../utils";
import IncreaseDecreaseIcon from "./IncreaseDecreaseIcon";

interface IncreaseDecreaseProps {
  increaseDecreaseNumber: number;
  hasTextColor?: boolean;
}

const IncreaseDecrease = ({ increaseDecreaseNumber, hasTextColor = true }: IncreaseDecreaseProps) => {
  let signNumber = getSignNumber(increaseDecreaseNumber);

  return (
    <div
      className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold dark:bg-gray-500"
      style={hasTextColor ? {} : { color: `${signNumber === 1 ? "red" : signNumber === -1 ? "blue" : "black"}` }}
    >
      <IncreaseDecreaseIcon increaseDecreaseNumber={increaseDecreaseNumber} />{" "}
      {toIncreaseDecreaseNumber(increaseDecreaseNumber)}
    </div>
  );
};

export default IncreaseDecrease;
