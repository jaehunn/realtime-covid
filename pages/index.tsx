// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { DomesticCovidService, DomesticRegionCovidService } from "../env";
import { NATION } from "../types";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import ChartByDate from "../components/ChartByDate";
import RegionalTable from "../components/RegionalTable";

const Home = ({ domesticCovidItems, domesticRegionCovidItems }) => {
  const [accCovidItem, yesterdayAccCovidItem] = domesticCovidItems;

  const todayCovidItems = domesticRegionCovidItems.slice(0, 19);
  const yesterdayCovidItems = domesticRegionCovidItems.slice(19, 38);
  const dayBeforeYesterdayCovidItems = domesticRegionCovidItems.slice(38, 57);

  const [theme, setTheme] = useState(null);

  // TODO) dark mode
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));

    if (!theme) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)"); // OS 테마 감지

      setTheme(matches ? "dark" : "light");
      localStorage.setItem("theme", theme);
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="w-full h-full flex flex-col flex-1 bg-blue-100 overflow-auto dark:bg-gray-800">
      <Header nation={NATION.DOMESTIC} />
      <Navbar setTheme={setTheme} />
      <Cases accCovidItem={accCovidItem} yesterdayAccCovidItem={yesterdayAccCovidItem} />
      <ChartByDate domesticCovidItems={domesticCovidItems} theme={theme} />
      <RegionalTable
        todayCovidItems={todayCovidItems}
        yesterdayCovidItems={yesterdayCovidItems}
        dayBeforeYesterdayCovidItems={dayBeforeYesterdayCovidItems}
      />
    </div>
  );
};

export async function getServerSideProps() {
  const {
    baseUrl: domesticCovidBaseUrl,
    serviceKey: domesticCovidServiceKey,
    params: domesticCovidParams,
  } = DomesticCovidService;

  const {
    pageNo: domesticCovidPageNo,
    numOfRows: domesticCovidNumOfRows,
    startCreateDt: domesticCovidStartCreateDt,
    endCreateDt: domesticCovidEndCreateDt,
  } = domesticCovidParams;

  const {
    baseUrl: domesticRegionCovidBaseUrl,
    serviceKey: domesticRegionCovidServiceKey,
    params: domesticRegionCovidParams,
  } = DomesticRegionCovidService;

  const {
    pageNo: domesticRegionCovidPageNo,
    numOfRows: domesticRegionCovidNumOfRows,
    startCreateDt: domesticRegionCovidStartCreateDt,
    endCreateDt: domesticRegionCovidEndCreateDt,
  } = domesticRegionCovidParams;

  const { data: domesticCovidData } = await axios.get(
    `${domesticCovidBaseUrl}?serviceKey=${domesticCovidServiceKey}&pageNo=${domesticCovidPageNo}&numOfRows=${domesticCovidNumOfRows}&startCreateDt=${domesticCovidStartCreateDt}&endCreateDt=${domesticCovidEndCreateDt}`
  );

  const domesticCovidItems = await domesticCovidData.response.body.items.item;

  const { data: domesticRegionCovidData } = await axios.get(
    `${domesticRegionCovidBaseUrl}?serviceKey=${domesticRegionCovidServiceKey}&pageNo=${domesticRegionCovidPageNo}&numOfRows=${domesticRegionCovidNumOfRows}&startCreateDt=${domesticRegionCovidStartCreateDt}&endCreateDt=${domesticRegionCovidEndCreateDt}`
  );

  const domesticRegionCovidItems = await domesticRegionCovidData.response.body.items.item;

  return {
    props: {
      domesticCovidItems,
      domesticRegionCovidItems,
    },
  };
}

export default Home;
