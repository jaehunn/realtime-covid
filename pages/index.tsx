// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React, { useState } from "react";
import axios from "axios";
import { DomesticCovidService, DomesticRegionCovidService } from "../env";

import Header, { NATION } from "../components/Header";
import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import ChartByDate from "../components/ChartByDate";
import RegionalTable from "../components/RegionalTable";

interface HomeProps {
  domesticCovidData: {
    item: CovidDataType[];
  };

  domesticRegionCovidData: {
    item: RegionCovidDataType[];
  };
}

export interface CovidDataType {
  accDefRate: number;
  accExamCnt: number;
  accExamCompCnt: number;
  careCnt: number;
  clearCnt: number;
  createDt: string;
  deathCnt: number;
  decideCnt: number;
  examCnt: number;
  resutlNegCnt: number;
  seq: number;
  stateDt: number;
  stateTime: string;
  updateDt: string;
}

export interface RegionCovidDataType {
  createDt: string;
  deathCnt: number;
  defCnt: number;
  gubun: "검역";
  gubunCn: string;
  gubunEn: string;
  incDec: number;
  isolClearCnt: number;
  isolIngCnt: number;
  localOccCnt: number;
  overFlowCnt: number;
  qurRate: string;
  seq: number;
  stdDay: string;
  updateDt: string;
}

const Home = ({ domesticCovidData, domesticRegionCovidData }: HomeProps) => {
  const [casesCovidItem, setCasesCovidItem] = useState([...domesticCovidData.item]);
  const [chartByDateItem, setChartByDateItem] = useState([...domesticCovidData.item]);
  const [regionCovidItem, setRegionCovidItem] = useState([...domesticRegionCovidData.item]);

  return (
    <div className="w-full h-full flex flex-col flex-1 bg-blue-100 overflow-auto">
      <Header nation={NATION.domestic} />
      <Navbar />
      <Cases covidItems={casesCovidItem} />
      <ChartByDate covidItems={chartByDateItem} />
      <RegionalTable covidItems={regionCovidItem} />
    </div>
  );
};

export async function getStaticProps() {
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
