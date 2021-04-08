import { toIncreaseDecreaseNumber, getSignNumber } from "../utils";
import IncreaseDecreaseIcon from "./IncreaseDecreaseIcon";

type IncreaseDecreaseProps = {
  increaseDecreaseNumber: number;
  hasTextColor?: boolean;
};

// TODO) Cases 의 text 색까지 바뀌게된다.
const IncreaseDecrease = ({ increaseDecreaseNumber, hasTextColor = true }: IncreaseDecreaseProps) => {
  const signNumber = getSignNumber(increaseDecreaseNumber);

  return (
    <div
      className="text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold text-color"
      style={hasTextColor ? {} : { color: `${signNumber === 1 ? "red" : signNumber === -1 ? "blue" : "black"}` }}
    >
      <IncreaseDecreaseIcon increaseDecreaseNumber={increaseDecreaseNumber} />{" "}
      {toIncreaseDecreaseNumber(increaseDecreaseNumber)}
    </div>
  );
};

export default IncreaseDecrease;
