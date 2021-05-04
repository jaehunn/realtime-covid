import IncreaseDecrease from "./IncreaseDecrease";

const Case = ({ caseType, caseCnt, caseIncreaseDecrease, color }) => {
  return (
    <div
      className="w-36 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-lg dark:bg-gray-600 dark:border-gray-500"
      style={{ color }}
    >
      <div className="text-lg leading-4 tracking-wide">{caseType}</div>
      <div className="text-sm leading-8 tracking-wide">{caseCnt}</div>
      <IncreaseDecrease increaseDecreaseNumber={caseIncreaseDecrease} />
    </div>
  );
};

export default Case;
