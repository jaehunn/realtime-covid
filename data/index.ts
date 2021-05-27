import { findGapFirstDaysFromNmonthAgo, requestFormatDate, requestFormatVaccineDate, getDate } from "../utils";
import { CovidServiceTypes, VaccineServiceTypes } from "../types";

export const DAYS_PER_MONTH = {
  1: "31",
  2: ["28", "29"],
  3: "31",
  4: "30",
  5: "31",
  6: "30",
  7: "31",
  8: "31",
  9: "30",
  10: "31",
  11: "30",
  12: "31",
};

export const titleInfos = [
  {
    title: "Domestic",
    href: "/",
  },
  { title: "Overseas", href: "/overseas" },
  { title: "Vaccine", href: "/vaccine" },
];

export const navInfos = [
  { name: "Domestic", href: "/" },
  {
    name: "Overseas",
    href: "/overseas",
  },
  { name: "Vaccine", href: "/vaccine" },
];

export const domesticChartSelectOptions = {
  firstOptions: [
    { value: "decideCnt", name: "Confirmed" },
    { value: "deathCnt", name: "Deaths" },
    { value: "clearCnt", name: "Recovered" },
    { value: "accExamCnt", name: "Tested" },
    { value: "decideRate", name: "Confirmed Rate" },
  ],
  secondOptions: [
    {
      value: "daily",
      name: "Daily",
    },
    { value: "weekly", name: "Weekly" },
    { value: "monthly", name: "Monthly" },
  ],
};

export const overseasChartSelectOptions = {
  firstOptions: [
    { value: "decideCnt", name: "Confirmed" },
    { value: "deathCnt", name: "Deaths" },
  ],
  secondOptions: [
    {
      value: "daily",
      name: "Daily",
    },
    { value: "weekly", name: "Weekly" },
    { value: "monthly", name: "Monthly" },
  ],
};

export const vaccineChartSelectOptions = {
  firstOptions: [],
  secondOptions: [
    {
      value: "daily",
      name: "Daily",
    },
    { value: "weekly", name: "Weekly" },
  ],
};

export const DomesticCovidService: CovidServiceTypes = {
  baseUrl: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
  serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D",
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: requestFormatDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
    endCreateDt: requestFormatDate(getDate()),
  },
};

export const DomesticRegionCovidService: CovidServiceTypes = {
  baseUrl: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
  serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2/z2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA==",
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: requestFormatDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
    endCreateDt: requestFormatDate(getDate()),
  },
};

export const OverseasCovidService: CovidServiceTypes = {
  baseUrl: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19NatInfStateJson",
  serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D",
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: requestFormatDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
    endCreateDt: requestFormatDate(getDate()),
  },
};

// 3
export const VaccineService: VaccineServiceTypes = {
  baseUrl: "https://api.odcloud.kr/api/15077756/v1/vaccine-stat",
  serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D",
  params: {
    page: 1,
    perPage: 18 * findGapFirstDaysFromNmonthAgo(3),
    "cond[baseDate::GTE]": requestFormatVaccineDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
  },
};
