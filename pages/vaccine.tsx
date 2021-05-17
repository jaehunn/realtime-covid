import axios from "axios";
import { GetStaticProps } from "next";
import { VaccineService } from "../env";
import { Cases, Header, Navbar } from "../components";
import { getVaccineChartDataForm, toComma } from "../utils";

import VaccineChartByDate from "../components/VaccineChartByDate"; // 추상화 필요

const Vaccine = ({ vaccineItems }) => {
  console.log(vaccineItems);

  const accVaccineItem = vaccineItems[vaccineItems.length - 18];

  const caseInfosItems = [
    {
      caseType: "1st Vaccinated",
      caseCnt: toComma(accVaccineItem.totalFirstCnt),
      caseIncreaseDecrease: accVaccineItem.firstCnt,
      color: "rgba(52, 211, 153, 1)",
    },
    {
      caseType: "2nd Vaccinated",
      caseCnt: toComma(accVaccineItem.totalSecondCnt),
      caseIncreaseDecrease: accVaccineItem.secondCnt,
      color: "rgba(96, 165, 250, 1)",
    },
  ];

  const vaccineChartData = getVaccineChartDataForm(vaccineItems);

  const chartSelectOptions = {
    secondOptions: [
      {
        value: "daily",
        name: "Daily",
      },
      { value: "weekly", name: "Weekly" },
      { value: "monthly", name: "Monthly" },
    ],
  };

  return (
    <div className="container mx-auto px-5 py-12 bg-gray-200 dark:bg-gray-800 overflow-auto">
      <Header title={"Vaccine"} />
      <Navbar />
      <Cases caseInfosItems={caseInfosItems} />
      <VaccineChartByDate chartData={vaccineChartData} chartSelectOptions={chartSelectOptions} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
