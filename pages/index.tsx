// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React, { useState } from "react";
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
  const [CasesCovidItem, setCasesCovidItem] = useState([...covidData.item]);
  const [ConfirmedCovidItem, setConfirmedCovidItem] = useState([...covidData.item]);

  return (
    <div className="w-screen h-screen flex flex-col flex-1 bg-blue-100">
      <Header nation={"Korea"} />
      {/* <Navbar /> */}
      <Cases covidItems={CasesCovidItem} />
      <Confirmed covidItems={ConfirmedCovidItem} />
      <RegionalTable />
    </div>
  );
};

export async function getStaticProps() {
  const { baseUrl, serviceKey, params } = DomesticCovidService;
  const { pageNo, numOfRows, startCreateDt, endCreateDt } = params;

  const { data } = await axios.get(
    `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`
  );

  const covidData = await data.response.body.items;

  return {
    props: {
      covidData,
    },
  };
}

export default Home;
