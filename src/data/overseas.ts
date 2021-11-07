import { findGapFirstDaysFromNmonthAgo, requestFormatDate, getDate } from '../utils';
import { CovidServiceTypes, CovidServiceTypesParams } from '../types';

export const OverseasCovidService: CovidServiceTypes<CovidServiceTypesParams> = {
  baseUrl: process.env.OVERSEAS_COVID_BASE_URL,
  serviceKey: process.env.OVERSEAS_COVID_SERVICE_KEY,
  params: {
    pageNo: 1,
    numOfRows: 10,
    startCreateDt: requestFormatDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
    endCreateDt: requestFormatDate(getDate()),
  },
};
