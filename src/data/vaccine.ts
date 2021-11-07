import { findGapFirstDaysFromNmonthAgo, requestFormatVaccineDate, getDate } from '../utils';
import { CovidServiceTypes, VaccineServiceTypesParams } from '../types';

export const VaccineService: CovidServiceTypes<VaccineServiceTypesParams> = {
  baseUrl: process.env.VACCINE_BASE_URL,
  serviceKey: process.env.VACCINE_SERVICE_KEY,
  params: {
    page: 1,
    perPage: 18 * findGapFirstDaysFromNmonthAgo(3),
    'cond[baseDate::GTE]': requestFormatVaccineDate(getDate(findGapFirstDaysFromNmonthAgo(1))),
  },
};
