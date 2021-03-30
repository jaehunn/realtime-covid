// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js

import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cases from "../components/Cases";
import Confirmed from "../components/Confirmed";
import RegionalTable from "../components/RegionalTable";

import HomeStyles from "../styles/Home.module.css";

const Home = ({ data }) => {
  console.log(data.response.body.items);

  return (
    <div className={HomeStyles.container}>
      <Header nation={"Korea"} />
      <Navbar />
      <Cases />
      <Confirmed />
      <RegionalTable />
    </div>
  );
};

Home.getInitialProps = async () => {
  const { data } = await axios.get(
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315"
  );

  return {
    data,
  };
};

export default Home;
