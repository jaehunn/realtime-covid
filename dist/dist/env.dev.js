"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.DomesticRegionCovidService = exports.DomesticCovidService = void 0;

var _utils = require("./utils");

var DomesticCovidService = {
  baseUrl: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
  serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2%2Fz2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA%3D%3D",
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: (0, _utils.requestFormatDate)((0, _utils.getDate)(7)),
    endCreateDt: (0, _utils.requestFormatDate)((0, _utils.getDate)()),
  },
};
exports.DomesticCovidService = DomesticCovidService;
var DomesticRegionCovidService = {
  baseUrl: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
  serviceKey: "fUio6BUTWluJVfLQpEDGp5Goep1YvqAVJt2/z2WOoFbsyaJYNQ0shUPRlgryta5ytgbONMa2B8lmozCwOGAJwA==",
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: (0, _utils.requestFormatDate)((0, _utils.getDate)(2)),
    endCreateDt: (0, _utils.requestFormatDate)((0, _utils.getDate)()),
  },
};
exports.DomesticRegionCovidService = DomesticRegionCovidService;
