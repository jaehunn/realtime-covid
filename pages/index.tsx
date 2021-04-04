// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React, { useState } from "react";
import axios from "axios";
import { DomesticCovidService, DomesticRegionCovidService } from "../env";

import Header from "../components/Header";
//  import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import Confirmed from "../components/Confirmed";
import RegionalTable from "../components/RegionalTable";

type HomeProps = {
  domesticCovidData: {
    item: [];
  };

  domesticRegionCovidData: {
    item: [];
  };
};

const Home = ({ domesticCovidData, domesticRegionCovidData }: HomeProps) => {
  const [casesCovidItem, setCasesCovidItem] = useState([...domesticCovidData.item]);
  const [confirmedCovidItem, setConfirmedCovidItem] = useState([...domesticCovidData.item]);
  const [regionCovidItem, setRegionCovidItem] = useState([...domesticRegionCovidData.item]);

  console.log(domesticCovidData, domesticRegionCovidData);

  return (
    <div className="w-screen h-screen flex flex-col flex-1 bg-blue-100">
      <Header nation={"Korea"} />
      {/* <Navbar /> */}
      <Cases covidItems={casesCovidItem} />
      <Confirmed covidItems={confirmedCovidItem} />
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
    endCreateDt: DomesticCovidEndCreateDt,
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
    `${domesticCovidBaseUrl}?serviceKey=${domesticCovidServiceKey}&pageNo=${domesticCovidPageNo}&numOfRows=${domesticCovidNumOfRows}&startCreateDt=${domesticCovidStartCreateDt}&endCreateDt=${DomesticCovidEndCreateDt}`
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
