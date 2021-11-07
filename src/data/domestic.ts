import { findGapFirstDaysFromNmonthAgo, requestFormatDate, getDate } from '../utils';
import { CovidServiceTypes, CovidServiceTypesParams } from '../types';

export const DomesticCovidService: CovidServiceTypes<CovidServiceTypesParams> = {
  baseUrl: process.env.DOMESTIC_COVID_BASE_URL,
  serviceKey: process.env.DOMESTIC_COVID_SERVICE_KEY,
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: requestFormatDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
    endCreateDt: requestFormatDate(getDate()),
  },
};

export const DomesticRegionCovidService: CovidServiceTypes<CovidServiceTypesParams> = {
  baseUrl: process.env.DOMESTIC_REGION_COVID_BASE_URL,
  serviceKey: process.env.DOMESTIC_REGION_COVID_SERVICE_KEY,
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: requestFormatDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
    endCreateDt: requestFormatDate(getDate()),
  },
};
