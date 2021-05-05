import axios from "axios";
import { GetStaticProps } from "next";
import { VaccineService } from "../env";
import { Header, Navbar, VaccineCases } from "../components";

const Vaccine = ({ vaccineItems }) => {
  //   const yesterdayAccVaccineItemsInfos = vaccineItems.slice(0, 18);

  return (
    <div className="w-screen h-screen mx-auto px-5 py-12 overflow-auto bg-gray-200 dark:bg-gray-800">
      <Header title={"Vaccine"} />
      <Navbar />
      <VaccineCases accVaccineItemsInfos={vaccineItems} />
      {/* <OverseasChartByDate overseasChartData={overseasChartData} />
      <OverseasRegionTable
        todayOverseasCovidItems={todayOverseasCovidItems}
        yesterdayOverseasCovidItems={yesterdayOverseasCovidItems}
        dayBeforeYesterdayCovidItems={dayBeforeYesterdayCovidItems}
        page={page}
        setPage={setPage}
      /> */}
    </div>
  );
};

// https://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=10&serviceKey=fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D
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
