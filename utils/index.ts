import { Region } from "../types";
export const getOverseasChartDataForm = (overseasCovidItems) => {
  let accDecideCnt = 0;
  let accDeathCnt = 0;

  const chartFormOverseasCovidItems = [];
  overseasCovidItems.forEach(({ natDefCnt, natDeathCnt, seq, createDt }, index) => {
    if ((index + 1) % 190) {
      accDecideCnt += natDefCnt;
      accDeathCnt += natDeathCnt;
    } else {
      chartFormOverseasCovidItems.push({
        seq,
        createDt,
        decideCnt: accDecideCnt,
        deathCnt: accDeathCnt,
      });

      accDecideCnt = 0;
      accDeathCnt = 0;
    }
  });

  return chartFormOverseasCovidItems;
};

export const getChartDataSetsData = (covidItems, selectOption = "decideCnt") => {
  let defaultSelectOption = covidItems.sort((itemA, itemB) => itemA.seq - itemB.seq)[0][selectOption];
  const data = covidItems
    .sort((itemA, itemB) => itemA.seq - itemB.seq)
    .reduce((data, item, index) => {
      if (index === 0) return data;

      const todaySelectOption = item[selectOption];

      const gap = todaySelectOption - defaultSelectOption;

      defaultSelectOption = todaySelectOption;

      return data.concat(gap);
    }, []);

  return data;
};

export const getAllDecideDeathCnt = (overseasCovidItems) => {
  const allDecideDeathCnt = overseasCovidItems.reduce(
    (allDecideDeathCnt, { natDefCnt, natDeathCnt }) => {
      allDecideDeathCnt[0] += natDefCnt;
      allDecideDeathCnt[1] += natDeathCnt;

      return allDecideDeathCnt;
    },
    [0, 0]
  );

  return allDecideDeathCnt;
};

export const requestFormatDate = ([currentYear, currentMonth, currentDays]: string[]) => {
  if (currentMonth.length < 2) currentMonth = "0" + currentMonth;
  if (currentDays.length < 2) currentDays = "0" + currentDays;

  return `${currentYear}${currentMonth}${currentDays}`;
};

export const getDate = (minusDay = 0) => {
  let currentDate = new Date();

  // 자정이면 1시간전 데이터로 한다. (전날)
  // 새벽1시면 2시간전 데이터로 한다.
  if (currentDate.getHours() === 0) currentDate = new Date(currentDate.setTime(currentDate.getTime() - 3600000));
  if (currentDate.getHours() === 1) currentDate = new Date(currentDate.setTime(currentDate.getTime() - 7200000));

  if (minusDay !== 0) currentDate = new Date(currentDate.setDate(currentDate.getDate() - minusDay));

  const currentYear: string = currentDate.getFullYear() + "";
  const currentMonth: string = currentDate.getMonth() + 1 + "";
  const currentDays: string = currentDate.getDate() + "";

  return [currentYear, currentMonth, currentDays];
};

export const getFormatDate = (dateString: string): string => {
  const date = dateString.split(" ")[0];
  const formatDate = date.split("-").slice(1);

  const [formatMonth, formatDays] = formatDate;

  return `${formatMonth}/${formatDays}`;
};

export const toIncreaseDecreaseNumber = (num: number): string => {
  if (num < 0) num *= -1;

  return toComma(num);
};

export const toComma = (num: number): string => {
  return num.toLocaleString("en-US");
};

export const getSignNumber = (num: number): number => {
  if (num === 0) return 0;

  return num > 0 ? 1 : -1;
};

export const getRegionName = (region: string) => {
  return Region[region];
};
