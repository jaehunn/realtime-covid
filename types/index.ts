export type LayoutProps = {
  children: JSX.Element;
};

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

export type CovidServiceTypes = {
  baseUrl: string;
  serviceKey: string;
  params: CovidServiceTypesParams;
};

type CovidServiceTypesParams = {
  pageNo: number;
  numOfRows: number;
  startCreateDt: string;
  endCreateDt: string;
};

export type VaccineServiceTypes = {
  baseUrl: string;
  serviceKey: string;

  params: VaccineServiceTypesParams;
};

type VaccineServiceTypesParams = {
  page: number;
  perPage: number;
  "cond[baseDate::GTE]": string;
};
