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
      caseCnt: toComma(vaccineItems[0].totalFirstCnt),
      caseIncreaseDecrease: vaccineItems[0].firstCnt,
      color: "rgba(52, 211, 153, 1)",
    },
    {
      caseType: "2nd Vaccinated",
      caseCnt: toComma(vaccineItems[0].totalSecondCnt),
      caseIncreaseDecrease: vaccineItems[0].secondCnt,
      color: "rgba(96, 165, 250, 1)",
    },
  ];

  return (
    <div className="w-screen h-screen mx-auto px-5 py-12 overflow-auto bg-gray-200 dark:bg-gray-800">
      <Header title={"Vaccine"} />
      <Navbar />
      <Cases caseInfosItems={caseInfosItems} />
      {/* <ChartByDate /> */}
      {/* <RegionTable /> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { baseUrl: vaccineBaseUrl, serviceKey: vaccineServiceKey, params: vaccineParams } = VaccineService;

  const { page: vaccinePageNo, perPage: vaccinePerPage, "cond[baseDate::GTE]": vaccineBaseDate } = vaccineParams;

  const {
    data: { data: vaccineItems },
  } = await axios.get(
    `${vaccineBaseUrl}?serviceKey=${vaccineServiceKey}&page=${vaccinePageNo}&perPage=${vaccinePerPage}&cond[baseDate::GTE]=${vaccineBaseDate}`
  );

  return {
    props: {
      vaccineItems,
    },
  };
};

export default Vaccine;
