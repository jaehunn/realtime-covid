// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React, { useState } from "react";
import axios from "axios";
import { DomesticCovidService } from "../env";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import Confirmed from "../components/Confirmed";
import RegionalTable from "../components/RegionalTable";

import HomeStyles from "../styles/Home.module.css";

type HomeProps = {
  covidData: {
    item: [];
  };
};

const Home = ({ covidData }: HomeProps) => {
  return (
    <div className={HomeStyles.container}>
      <Header nation={"Korea"} />
      <Navbar />
      <Cases covidItems={covidData.item} />
      <Confirmed />
      <RegionalTable />
    </div>
  );
};

Home.getInitialProps = async () => {
  const { baseUrl, serviceKey, params } = DomesticCovidService;
  const { pageNo, numOfRows, startCreateDt, endCreateDt } = params;

  const { data } = await axios.get(
    `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`
  );

  const covidData = await data.response.body.items;

  return {
    covidData,
  };
};

export default Home;
