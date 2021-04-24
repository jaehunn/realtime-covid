import React, { useEffect } from "react";
import axios from "axios";
import { OverseasCovidService } from "../env";
import { getAllDecideDeathCnt, getOverseasChartDataForm } from "../utils";
import { NATION } from "../types";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import OverseasCases from "../components/OverseasCases";
import OverseasRegionTable from "../components/OverseasRegionTable";
import OverseasChartByDate from "../components/OverseasChartByDate";

// TODO) 국기를 어떻게 뽑아올까

const Overseas = ({ overseasCovidItems }) => {
  const todayOverseasCovidItems = overseasCovidItems.slice(0, 190);
  const yesterdayOverseasCovidItems = overseasCovidItems.slice(190, 380);
  const dayBeforeYesterdayCovidItems = overseasCovidItems.slice(380, 570);

  const [todayAllDecideCnt, todayAllDeathCnt] = getAllDecideDeathCnt(todayOverseasCovidItems);
  const [yesterdayAllDecideCnt, yesterdayAllDeathCnt] = getAllDecideDeathCnt(yesterdayOverseasCovidItems);

  const overseasChartData = getOverseasChartDataForm(overseasCovidItems);

  useEffect(() => {
    let theme = localStorage.getItem("theme");

    if (!theme) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)"); // OS 테마 감지

      theme = matches ? "dark" : "light";
      localStorage.setItem("theme", theme);
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <div className="w-full h-full flex flex-col flex-1 bg-blue-100 overflow-auto dark:bg-gray-800">
      <Header nation={NATION.OVERSEAS} />
      <Navbar setTheme={setTheme} />
      <OverseasCases
        todayAllDecideCnt={todayAllDecideCnt}
        todayAllDeathCnt={todayAllDeathCnt}
        yesterdayAllDecideCnt={yesterdayAllDecideCnt}
        yesterdayAllDeathCnt={yesterdayAllDeathCnt}
      />
      <OverseasChartByDate overseasChartData={overseasChartData} />
      <OverseasRegionTable
        todayOverseasCovidItems={todayOverseasCovidItems}
        yesterdayOverseasCovidItems={yesterdayOverseasCovidItems}
        dayBeforeYesterdayCovidItems={dayBeforeYesterdayCovidItems}
      />
    </div>
  );
};

export async function getServerSideProps() {
  const {
    baseUrl: overseasCovidBaseUrl,
    serviceKey: overseasCovidServiceKey,
    params: overseasCovidParams,
  } = OverseasCovidService;

  const {
    pageNo: overseasCovidPageNo,
    numOfRows: overseasCovidNumOfRows,
    startCreateDt: overseasCovidStartCreateDt,
    endCreateDt: overseasCovidEndCreateDt,
  } = overseasCovidParams;

  const { data: _overseasCovidData } = await axios.get(
    `${overseasCovidBaseUrl}?serviceKey=${overseasCovidServiceKey}&pageNo=${overseasCovidPageNo}&numOfRows=${overseasCovidNumOfRows}&startCreateDt=${overseasCovidStartCreateDt}&endCreateDt=${overseasCovidEndCreateDt}`
  );

  const overseasCovidItems = await _overseasCovidData.response.body.items.item;

  return {
    props: {
      overseasCovidItems,
    },
  };
}

export default Overseas;