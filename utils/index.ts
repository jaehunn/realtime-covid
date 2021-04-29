import { Region } from "../types";

const DAYS_PER_MONTH = {
  1: "31",
  2: ["28", "29"],
  3: "31",
  4: "30",
  5: "31",
  6: "30",
  7: "31",
  8: "31",
  9: "30",
  10: "31",
  11: "30",
  12: "31",
};

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

// const threeMonthsCovidItems = domesticCovidItems.slice(0, findGapFirstDaysFromThreeMonthAgo());

// const chartData = {
//   daily: oneWeekCovidItems,
//   weekly: fourWeeksCovidItems,
//   monthly: threeMonthsCovidItems,
// };

export const getChartDataSetsData = (covidItems, { firstOption, secondOption }) => {
  if (secondOption === "daily") {
    if (firstOption === "decideRate") {
      const decideCntChartDataSetsData = getChartDataSetsData(covidItems, { firstOption: "decideCnt", secondOption });
      const accExamCntChartDataSetsData = getChartDataSetsData(covidItems, { firstOption: "accExamCnt", secondOption });

      return decideCntChartDataSetsData.map((todayDecideCnt, index) =>
        ((todayDecideCnt / accExamCntChartDataSetsData[index]) * 100).toFixed(2)
      );
    } else {
      let defaultSelectOption = covidItems.slice(0, 8).sort((itemA, itemB) => itemA.seq - itemB.seq)[0][firstOption];
      const data = covidItems.slice(0, 8).sort((itemA, itemB) => itemA.seq - itemB.seq);
      return data.slice(1).reduce((data, item) => {
        const todaySelectOption = item[firstOption];

        const gap = todaySelectOption - defaultSelectOption;

        defaultSelectOption = todaySelectOption;

        return data.concat(gap);
      }, []);
    }
  }

  if (secondOption === "weekly") {
    if (firstOption === "decideRate") {
      const decideCntChartDataSetsData = getChartDataSetsData(covidItems, { firstOption: "decideCnt", secondOption });
      const accExamCntChartDataSetsData = getChartDataSetsData(covidItems, { firstOption: "accExamCnt", secondOption });

      return decideCntChartDataSetsData.map((todayDecideCnt, index) =>
        ((todayDecideCnt / accExamCntChartDataSetsData[index]) * 100).toFixed(2)
      );
    } else {
      let startDaySelectOption = 0;
      let endDaySelectOption = 0;

      const data = [];

      const currentMonth = new Date(covidItems[0].createDt).getMonth();

      covidItems
        .filter(({ createDt }) => new Date(createDt).getMonth() === currentMonth)
        .forEach((item) => {
          const modDay = new Date(item.createDt).getDay();

          if (endDaySelectOption === 0) endDaySelectOption = item[firstOption];

          if (modDay === 6) {
            startDaySelectOption = item[firstOption];

            data.unshift(endDaySelectOption - startDaySelectOption);

            startDaySelectOption = 0;
            endDaySelectOption = 0;
          }
        });

      console.log(data);

      if (data.length > 4) return data.slice(0, 4);

      return data;
    }
  }

  if (secondOption === "monthly") {
    if (firstOption === "decideRate") {
      const decideCntChartDataSetsData = getChartDataSetsData(covidItems, { firstOption: "decideCnt", secondOption });
      const accExamCntChartDataSetsData = getChartDataSetsData(covidItems, { firstOption: "accExamCnt", secondOption });

      return decideCntChartDataSetsData.map((todayDecideCnt, index) =>
        ((todayDecideCnt / accExamCntChartDataSetsData[index]) * 100).toFixed(2)
      );
    } else {
      // ...
    }
  }
};

export const getChartLabels = (covidItems, { firstOption, secondOption }) => {
  if (secondOption === "daily") {
    return covidItems
      .slice(0, 8)
      .sort((itemA, itemB) => itemA.seq - itemB.seq)
      .slice(1)
      .reduce((labels, { createDt }) => {
        const formatDate = getFormatDate(createDt);

        return labels.concat(formatDate);
      }, []);
  }

  if (secondOption === "weekly") {
    let startDate = "";
    let endDate = "";

    const labels = [];

    const currentMonth = new Date(covidItems[0].createDt).getMonth();

    covidItems
      .filter(({ createDt }) => new Date(createDt).getMonth() === currentMonth)
      .forEach((item) => {
        const modDay = new Date(item.createDt).getDay();

        if (endDate === "") endDate = item.createDt;

        if (modDay === 0) {
          startDate = item.createDt;

          labels.unshift(`${getFormatDate(startDate)} - ${getFormatDate(endDate)}`);

          startDate = "";
          endDate = "";
        }
      });

    return labels;
  }
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

  if (currentDate.getHours() === 0) currentDate = new Date(currentDate.setTime(currentDate.getTime() - 3600000));
  if (currentDate.getHours() === 1) currentDate = new Date(currentDate.setTime(currentDate.getTime() - 7200000));

  if (minusDay !== 0) currentDate = new Date(currentDate.setDate(currentDate.getDate() - minusDay));

  const currentYear: string = currentDate.getFullYear() + "";
  const currentMonth: string = currentDate.getMonth() + 1 + "";
  const currentDays: string = currentDate.getDate() + "";

  return [currentYear, currentMonth, currentDays];
};

export const findGapFirstDaysFromSameMonth = () => {
  let currentDate = new Date();

  return currentDate.getDate() - 1;
};

export const findGapFirstDaysFromThreeMonthAgo = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // 4
  let threeMonthAgoMonth = currentMonth - 2; // 2

  // 3개월 전 월의 1일까지 차이나는 일수를 반환한다.

  if (threeMonthAgoMonth < 1) threeMonthAgoMonth = 1;

  let days = currentDate.getDate();
  for (let curMonth = currentMonth - 1; curMonth >= threeMonthAgoMonth; curMonth -= 1) {
    if (curMonth === 2) {
      if (currentDate.getFullYear() % 4) days += +DAYS_PER_MONTH[2][0];
      else days += +DAYS_PER_MONTH[2][1];
    } else days += +DAYS_PER_MONTH[curMonth];
  }

  return days - 1;
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
