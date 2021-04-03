import { requestFormatDate, getDate } from "./utils";
export var DomesticCovidService = {
    baseUrl: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
    serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D",
    params: {
        pageNo: 1,
        numOfRows: 10,
        startCreateDt: requestFormatDate(getDate(7)),
        endCreateDt: requestFormatDate(getDate()),
    },
};