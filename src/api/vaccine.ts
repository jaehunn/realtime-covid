import axios from 'axios';
import { stringify } from 'qs';
import { VaccineService } from '../data/vaccine';

export const getVaccineItems = async () => {
  const {
    baseUrl,
    serviceKey,
    params: { page, perPage, 'cond[baseDate::GTE]': vaccineBaseDate },
  } = VaccineService;

  try {
    const { data } = await axios.get(
      `${baseUrl}?serviceKey=${serviceKey}&page=${page}&perPage=${perPage}&cond[baseDate::GTE]=${vaccineBaseDate}}`
    );

    return data.data;
  } catch (err) {
    throw new Error(err);
  }
};
