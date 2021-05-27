import axios from "axios";
import { Header, Navbar, Cases, ChartByDate } from "../components/shared";
import { getVaccineChartDataForm, toComma, toIncreaseDecreaseNumber } from "../utils";
import { vaccineChartSelectOptions, VaccineService } from "../data";

const Vaccine = ({ vaccineItems }) => {
  const accVaccineItem = vaccineItems[vaccineItems.length - 18];

  const caseInfosItems = [
    {
      caseType: "1st Vaccinated",
      caseCnt: toComma(accVaccineItem.totalFirstCnt),
      caseIncreaseDecrease: toIncreaseDecreaseNumber(accVaccineItem.firstCnt),
      color: "text-green-400",
    },
    {
      caseType: "2nd Vaccinated",
      caseCnt: toComma(accVaccineItem.totalSecondCnt),
      caseIncreaseDecrease: toIncreaseDecreaseNumber(accVaccineItem.secondCnt),
      color: "text-blue-400",
    },
  ];

  const vaccineChartData = getVaccineChartDataForm(vaccineItems);

  return (
    <div className="container mx-auto px-5 py-12 bg-gray-50 dark:bg-gray-800 overflow-auto">
      <Header title={"Vaccine"} />
      <Navbar />
      <Cases caseInfosItems={caseInfosItems} />
      <ChartByDate chartData={vaccineChartData} chartSelectOptions={vaccineChartSelectOptions} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const { baseUrl: vaccineBaseUrl, serviceKey: vaccineServiceKey, params: vaccineParams } = VaccineService;

  const { page: vaccinePageNo, perPage: vaccinePerPage, "cond[baseDate::GTE]": vaccineBaseDate } = vaccineParams;

  let vaccineItems = [];

  try {
    const { data } = await axios.get(
      `${vaccineBaseUrl}?serviceKey=${vaccineServiceKey}&page=${vaccinePageNo}&perPage=${vaccinePerPage}&cond[baseDate::GTE]=${vaccineBaseDate}`
    );

    vaccineItems = await data.data;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      vaccineItems,
    },
  };
};

export default Vaccine;
