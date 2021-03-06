import { DAYS_PER_MONTH } from '../constants/common';

export const getVaccineChartDataForm = (vaccineItems) => {
  let startIndex = vaccineItems.length - 18;

  const chartFormVaccineItems = [];

  for (let index = startIndex; index >= 0; index -= 18) {
    const vaccineItem = vaccineItems[index];

    const accVaccinatedCnt = vaccineItem.firstCnt + vaccineItem.secondCnt;

    chartFormVaccineItems.push({
      seq: index,
      createDt: vaccineItem.baseDate,
      accVaccinatedCnt,
    });
  }

  return chartFormVaccineItems;
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

export const getChartDataSetsData = (covidItems, { firstOption, secondOption }) => {
  if (secondOption === 'daily') {
    if (!firstOption) {
      return covidItems
        .slice(0, 7)
        .sort((itemA, itemB) => itemA.seq - itemB.seq)
        .map(({ accVaccinatedCnt }) => accVaccinatedCnt);
    }

    if (firstOption === 'decideRate') {
      const decideCntChartDataSetsData = getChartDataSetsData(covidItems, {
        firstOption: 'decideCnt',
        secondOption,
      });
      const accExamCntChartDataSetsData = getChartDataSetsData(covidItems, {
        firstOption: 'accExamCnt',
        secondOption,
      });

      return decideCntChartDataSetsData.map((todayDecideCnt, index) =>
        ((todayDecideCnt / accExamCntChartDataSetsData[index]) * 100).toFixed(2)
      );
    } else {
      let defaultSelectOption = covidItems
        .slice(0, 8)
        .sort((itemA, itemB) => itemA.seq - itemB.seq)[0][firstOption];
      const data = covidItems.slice(0, 8).sort((itemA, itemB) => itemA.seq - itemB.seq);
      return data.slice(1).reduce((data, item) => {
        const todaySelectOption = item[firstOption];

        const gap = todaySelectOption - defaultSelectOption;

        defaultSelectOption = todaySelectOption;

        return data.concat(gap);
      }, []);
    }
  }

  if (secondOption === 'weekly') {
    if (!firstOption) {
      let accVaccinatedCntPerWeek = 0;

      const data = [];

      covidItems.slice(0, 30).forEach(({ accVaccinatedCnt }, index) => {
        accVaccinatedCntPerWeek += accVaccinatedCnt;

        if ((index + 1) % 7 === 0) {
          data.unshift(accVaccinatedCntPerWeek);

          accVaccinatedCntPerWeek = 0;
        }
      });

      if (data.length > 4) return data.slice(0, 4);

      return data;
    }

    if (firstOption === 'decideRate') {
      const decideCntChartDataSetsData = getChartDataSetsData(covidItems, {
        firstOption: 'decideCnt',
        secondOption,
      });
      const accExamCntChartDataSetsData = getChartDataSetsData(covidItems, {
        firstOption: 'accExamCnt',
        secondOption,
      });

      return decideCntChartDataSetsData.map((todayDecideCnt, index) =>
        ((todayDecideCnt / accExamCntChartDataSetsData[index]) * 100).toFixed(2)
      );
    } else {
      let startDaySelectOption = 0;
      let endDaySelectOption = 0;

      const data = [];

      covidItems.slice(0, 30).forEach((item, index) => {
        if (endDaySelectOption === 0) {
          endDaySelectOption = item[firstOption];
          console.log(item.createDt);
        } else if ((index + 1) % 7 === 0) {
          startDaySelectOption = item[firstOption];

          console.log(item.createDt);
          data.unshift(endDaySelectOption - startDaySelectOption);

          startDaySelectOption = 0;
          endDaySelectOption = 0;
        }
      });

      if (data.length > 4) return data.slice(0, 4);

      return data;
    }
  }

  if (secondOption === 'monthly') {
    if (firstOption === 'decideRate') {
      const decideCntChartDataSetsData = getChartDataSetsData(covidItems, {
        firstOption: 'decideCnt',
        secondOption,
      });
      const accExamCntChartDataSetsData = getChartDataSetsData(covidItems, {
        firstOption: 'accExamCnt',
        secondOption,
      });

      return decideCntChartDataSetsData.map((todayDecideCnt, index) =>
        ((todayDecideCnt / accExamCntChartDataSetsData[index]) * 100).toFixed(2)
      );
    } else {
      const data = [];

      let currentMonth = new Date(covidItems[0].createDt).getMonth() + 1;
      let endDateByBeforeMonthSelectOption = 0; // start
      let endDateByCurrentMonthSelectOption = covidItems[0][firstOption]; // end

      covidItems.forEach((item) => {
        const targetDate = new Date(item.createDt);
        const targetMonth = targetDate.getMonth() + 1;

        if ((targetMonth % 12) + 1 === currentMonth) {
          endDateByBeforeMonthSelectOption = item[firstOption];

          data.unshift(endDateByCurrentMonthSelectOption - endDateByBeforeMonthSelectOption);

          currentMonth = targetDate.getMonth() + 1;
          endDateByCurrentMonthSelectOption = endDateByBeforeMonthSelectOption;
        }
      });

      return data;
    }
  }
};

export const getChartLabels = (covidItems, { firstOption = {}, secondOption }) => {
  if (secondOption === 'daily') {
    return covidItems
      .slice(0, 7)
      .sort((itemA, itemB) => itemA.seq - itemB.seq)
      .reduce((labels, { createDt }) => {
        const formatDate = getFormatDate(createDt);

        return labels.concat(formatDate);
      }, []);
  }

  if (secondOption === 'weekly') {
    let startDate = '';
    let endDate = '';

    const labels = [];

    covidItems.slice(0, 29).forEach((item, index) => {
      if (endDate === '') endDate = item.createDt;
      else if ((index + 1) % 7 === 0) {
        startDate = item.createDt;

        labels.unshift(`${getFormatDate(startDate)} ~ ${getFormatDate(endDate)}`);

        startDate = '';
        endDate = '';
      }
    });

    return labels;
  }

  if (secondOption === 'monthly') {
    let startDate = '';
    let endDate = '';

    const labels = [];

    covidItems.forEach((item) => {
      const targetDate = new Date(item.createDt).getDate();

      if (endDate === '') endDate = item.createDt;

      if (targetDate === 1) {
        startDate = item.createDt;

        labels.unshift(`${getFormatDate(startDate)} ~ ${getFormatDate(endDate)}`);

        startDate = '';
        endDate = '';
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
  if (currentMonth.length < 2) currentMonth = '0' + currentMonth;
  if (currentDays.length < 2) currentDays = '0' + currentDays;

  return `${currentYear}${currentMonth}${currentDays}`;
};

export const requestFormatVaccineDate = ([currentYear, currentMonth, currentDays]: string[]) => {
  if (currentMonth.length < 2) currentMonth = '0' + currentMonth;
  if (currentDays.length < 2) currentDays = '0' + currentDays;

  return `${currentYear}-${currentMonth}-${currentDays}`;
};

export const getDate = (minusDay = 0) => {
  let currentDate = new Date();

  if (currentDate.getHours() === 0)
    currentDate = new Date(currentDate.setTime(currentDate.getTime() - 3600000));
  if (currentDate.getHours() === 1)
    currentDate = new Date(currentDate.setTime(currentDate.getTime() - 7200000));

  if (minusDay !== 0) currentDate = new Date(currentDate.setDate(currentDate.getDate() - minusDay));

  const currentYear: string = currentDate.getFullYear() + '';
  const currentMonth: string = currentDate.getMonth() + 1 + '';
  const currentDays: string = currentDate.getDate() + '';

  return [currentYear, currentMonth, currentDays];
};

export const findGapFirstDaysFromSameMonth = () => {
  let currentDate = new Date();

  return currentDate.getDate() - 1;
};

export const findGapFirstDaysFromNmonthAgo = (n = 0) => {
  const currentDate = new Date();
  let currentYear = new Date().getFullYear();
  let currentMonth = currentDate.getMonth() + 1; // 4
  let nMonthAgoMonth = currentMonth - n; // 2

  // n?????? ??? ?????? 1????????? ???????????? ????????? ????????????.
  let days = currentDate.getDate();
  for (let curMonth = currentMonth - 1; curMonth >= nMonthAgoMonth; curMonth -= 1) {
    if (curMonth === 0) {
      curMonth = 12;
      nMonthAgoMonth += 13;

      currentYear -= 1;
    }

    if (curMonth === 2) {
      if (currentYear % 4) days += +DAYS_PER_MONTH[2][0];
      else days += +DAYS_PER_MONTH[2][1];
    } else days += +DAYS_PER_MONTH[curMonth];
  }

  return days;
};

export const getFormatDate = (dateString: string): string => {
  const date = dateString.split(' ')[0];
  const formatDate = date.split('-').slice(1);

  const [formatMonth, formatDays] = formatDate;

  return `${formatMonth}/${formatDays}`;
};

export const toIncreaseDecreaseNumber = (num: number): string => {
  if (num < 0) num *= -1;

  return toComma(num);
};

export const toComma = (num: number): string => {
  return num.toLocaleString('en-US');
};

export const getSignNumber = (num: number): number => {
  if (num === 0) return 0;

  return num < 0 ? -1 : 1;
};
