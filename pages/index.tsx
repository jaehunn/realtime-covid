// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { DomesticCovidService, DomesticRegionCovidService } from "../env";

import Header, { NATION } from "../components/Header";
import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import ChartByDate from "../components/ChartByDate";
import RegionalTable from "../components/RegionalTable";

interface HomeProps {}

const Home = ({ domesticCovidData, domesticRegionCovidData }) => {
  const covidItems = domesticCovidData.item;
  const regionCovidItems = domesticRegionCovidData.item;

  const [accCovidItems, yesterdayAccCovidItems] = covidItems;

  const todayCovidItems = regionCovidItems.slice(0, 19);
  const yesterdayCovidItems = regionCovidItems.slice(19, 38);
  const dayBeforeYesterdayCovidItems = regionCovidItems.slice(38, 57);

  useEffect(() => {
    // ...
  });

  return (
    <div className="w-full h-full flex flex-col flex-1 bg-blue-100 overflow-auto">
      <Header nation={NATION.domestic} />
      <Navbar />
      <Cases accCovidItems={accCovidItems} yesterdayAccCovidItems={yesterdayAccCovidItems} />
      <ChartByDate covidItems={covidItems} />
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

  const { data: _domesticCovidData } = await axios.get(
    `${domesticCovidBaseUrl}?serviceKey=${domesticCovidServiceKey}&pageNo=${domesticCovidPageNo}&numOfRows=${domesticCovidNumOfRows}&startCreateDt=${domesticCovidStartCreateDt}&endCreateDt=${domesticCovidEndCreateDt}`
  );

  const domesticCovidData = await _domesticCovidData.response.body.items;

  const { data: _domesticRegionCovidData } = await axios.get(
    `${domesticRegionCovidBaseUrl}?serviceKey=${domesticRegionCovidServiceKey}&pageNo=${domesticRegionCovidPageNo}&numOfRows=${domesticRegionCovidNumOfRows}&startCreateDt=${domesticRegionCovidStartCreateDt}&endCreateDt=${domesticRegionCovidEndCreateDt}`
  );

  const domesticRegionCovidData = await _domesticRegionCovidData.response.body.items;

  return {
    props: {
      domesticCovidData,
      domesticRegionCovidData,
    },
  };
}

export default Home;
