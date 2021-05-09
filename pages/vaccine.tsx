import axios from "axios";
import { GetStaticProps } from "next";
import { VaccineService } from "../env";
import { Cases, Header, Navbar } from "../components";
import { toComma } from "../utils";

const Vaccine = ({ vaccineItems }) => {
  console.log(vaccineItems);

  const caseInfosItems = [
    {
      caseType: "1st Vaccinated",
      caseCnt: toComma(vaccineItems[vaccineItems.length - 1].totalFirstCnt),
      caseIncreaseDecrease: vaccineItems[vaccineItems.length - 1].firstCnt,
      color: "rgba(52, 211, 153, 1)",
    },
    {
      caseType: "2nd Vaccinated",
      caseCnt: toComma(vaccineItems[vaccineItems.length - 1].totalSecondCnt),
      caseIncreaseDecrease: vaccineItems[vaccineItems.length - 1].secondCnt,
      color: "rgba(96, 165, 250, 1)",
    },
  ];

  const chartSelectOptions = {
    firstOptions: [
      { value: "decideCnt", name: "Confirmed" },
      { value: "deathCnt", name: "Deaths" },
      { value: "clearCnt", name: "Recovered" },
      { value: "accExamCnt", name: "Tested" },
      { value: "decideRate", name: "Confirmed Rate" },
    ],
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
    <div className="w-screen h-screen mx-auto px-5 py-12 overflow-auto bg-gray-200 dark:bg-gray-800">
      <Header title={"Vaccine"} />
      <Navbar />
      <Cases caseInfosItems={caseInfosItems} />
      {/* <ChartByDate /> */}
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
