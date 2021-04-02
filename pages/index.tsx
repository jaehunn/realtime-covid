// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React from "react";
import axios from "axios";
import { DomesticCovidService } from "../env";

import Header from "../components/Header";
//  import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import Confirmed from "../components/Confirmed";
import RegionalTable from "../components/RegionalTable";

type HomeProps = {
  covidData: {
    item: [];
  };
};

const Home = ({ covidData }: HomeProps) => {
  return (
    <div className="w-screen h-screen flex flex-col flex-1 bg-blue-100">
      <Header nation={"Korea"} />
      {/* <Navbar /> */}
      <Cases covidItems={covidData.item} />
      <Confirmed covidItems={covidData.item} />
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
