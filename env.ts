import { requestFormatDate, getDate } from "./utils";

type DomesticCovidService = {
  baseUrl: string;
  serviceKey: string;
  params: DomesticCovidServiceParams;
};

type DomesticCovidServiceParams = {
  pageNo: number;
  numOfRows: number;
  startCreateDt: string;
  endCreateDt: string;
};

export const DomesticCovidService: DomesticCovidService = {
  baseUrl: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
  serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D",
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: requestFormatDate(getDate(7)), // 8일전, 데이터 갱신주기 1시간
    endCreateDt: requestFormatDate(getDate()), // 금일
  },
};
