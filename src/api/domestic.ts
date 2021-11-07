import axios from 'axios';
import { stringify } from 'qs';
import { DomesticCovidService, DomesticRegionCovidService } from '../data/domestic';

// TODO: 쿼리스트링 파라미터 stringify() 처리하기

export const getDomesticCovidItems = async () => {
  const {
    baseUrl,
    serviceKey,
    params: { pageNo, numOfRows, startCreateDt, endCreateDt },
  } = DomesticCovidService;

  try {
    const { data } = await axios.get(
      `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}}`
    );

    return data.response.body.items.item;
  } catch (err) {
    throw new Error(err);
  }
};

export const getDomesticRegionCovidItems = async () => {
  const {
    baseUrl,
    serviceKey,
    params: { pageNo, numOfRows, startCreateDt, endCreateDt },
  } = DomesticRegionCovidService;

  try {
    const { data } = await axios.get(
      `${baseUrl}?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}}`
    );

    return data.response.body.items.item;
  } catch (err) {
    throw new Error(err);
  }
};
