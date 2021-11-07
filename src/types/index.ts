export interface CovidServiceTypes<T> {
  baseUrl: string;
  serviceKey: string;
  params: T;
}

export interface CovidServiceTypesParams {
  pageNo: number;
  numOfRows: number;
  startCreateDt: string;
  endCreateDt: string;
}

export interface VaccineServiceTypesParams {
  page: number;
  perPage: number;
  "cond[baseDate::GTE]": string;
}

export enum Region {
  "Gyeongsangnam-do" = "Gyeongnam",
  "Gyeongsangbuk-do" = "Gyeongbuk",
  "Jeollanam-do" = "Jeonnam",
  "Jeollabuk-do" = "Jeonbuk",
  "Chungcheongnam-do" = "Chungnam",
  "Chungcheongbuk-do" = "Chungbuk",
  "Gangwon-do" = "Gangwon",
  "Gyeonggi-do" = "Gyeonggi",
}
