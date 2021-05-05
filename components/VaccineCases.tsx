import Case from "./Case";
import { toComma } from "../utils";

const VaccineCases = ({ accVaccineItemsInfos }) => {
  const caseInfosItems = [
    {
      caseType: "1st Vaccinated",
      caseCnt: toComma(accVaccineItemsInfos[0].totalFirstCnt),
      caseIncreaseDecrease: accVaccineItemsInfos[0].firstCnt,
      color: "rgba(52, 211, 153, 1)",
    },
    {
      caseType: "2nd Vaccinated",
      caseCnt: toComma(accVaccineItemsInfos[0].totalSecondCnt),
      caseIncreaseDecrease: accVaccineItemsInfos[0].secondCnt,
      color: "rgba(96, 165, 250, 1)",
    },
  ];

  return (
    <div className="lg:w-3/5 mx-auto flex justify-evenly m-auto mt-16 pb-10 mb-10 border-b border-gray-200">
      {caseInfosItems.map(({ caseType, caseCnt, caseIncreaseDecrease, color }, index) => (
        <Case
          key={index}
          caseType={caseType}
          caseCnt={caseCnt}
          caseIncreaseDecrease={caseIncreaseDecrease}
          color={color}
        />
      ))}
    </div>
  );
};

export default VaccineCases;
