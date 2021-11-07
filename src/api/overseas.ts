import axios from 'axios';
import { stringify } from 'qs';
import { OverseasCovidService } from '../data/overseas';

export const getOverseasCovidItems = async () => {
  const {
    baseUrl,
    serviceKey,
    params: { pageNo, numOfRows, startCreateDt, endCreateDt },
  } = OverseasCovidService;

  try {
    const { data } = await axios.get(
      `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}}`
    );

    return data.response.body.items.item;
  } catch (err) {
    throw new Error(err);
  }
};
