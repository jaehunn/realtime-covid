import React, { useState } from "react";
import axios from "axios";
import { OverseasCovidService } from "../env";

import Header, { NATION } from "../components/Header";
import Navbar from "../components/Navbar";
import OverseasCases from "../components/OverseasCases";
import OverseasRegionTable from "../components/OverseasRegionTable";
import OverseasChartByDate from "../components/OverseasChartByDate";

interface OverseasProps {
  overseasCovidData: { item: OverseasCovidDataType[] };
}

export interface OverseasCovidDataType {
  areaNm: string;
  areaNmCn: string;
  areaNmEn: string;
  createDt: string;
  natDeathCnt: number;
  natDeathRate: number;
  natDefCnt: number;
  nationNm: string;
  nationNmCn: string;
  nationNmEn: string;
  seq: number;
  stdDay: string;
  updateDt: string;
}

// TODO) 국기를 어떻게 뽑아올까

const Overseas = ({ overseasCovidData }: OverseasProps) => {
  console.log("OverseasCovidData:", overseasCovidData);

  const [casesCovidItem, setCasesCovidItem] = useState([...overseasCovidData.item]);
  const [chartByDateItem, setChartByDateItem] = useState([...overseasCovidData.item]);
  const [regionCovidItem, setRegionCovidItem] = useState([...overseasCovidData.item]);

  return (
    <div className="w-full h-full flex flex-col flex-1 bg-blue-100 overflow-auto">
      <Header nation={NATION.overseas} />
      <Navbar />
      <OverseasCases overseasCovidItems={casesCovidItem} />
      <OverseasChartByDate overseasCovidItems={chartByDateItem} />
      <OverseasRegionTable overseasCovidItems={regionCovidItem} />
    </div>
  );
};

export async function getStaticProps() {
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

  const overseasCovidData = await _overseasCovidData.response.body.items;

  return {
    props: {
      overseasCovidData,
    },
  };
}

export default Overseas;
