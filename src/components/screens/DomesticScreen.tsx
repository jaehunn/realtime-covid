import React from 'react';
import { Header, Cases, ChartByDate, RegionTable, NavBar } from '../shared';
import { Region } from '../../types';
import { domesticChartSelectOptions } from '../../constants/domestic';

const DomesticScreen = ({ domesticCovidItems, domesticRegionCovidItems }) => {
  const [accCovidItem, yesterdayAccCovidItem] = domesticCovidItems;

  const {
    decideCnt: accDecideCnt,
    deathCnt: accDeathCnt,
    clearCnt: accClearCnt,
    accExamCnt: accExamCnt,
  } = accCovidItem;

  const {
    decideCnt: yesterdayAccDecideCnt,
    deathCnt: yesterdayAccDeathCnt,
    clearCnt: yesterdayAccClearCnt,
    accExamCnt: yesterdayAccExamCnt,
  } = yesterdayAccCovidItem;

  const accCovidItemInfos = [accDecideCnt, accDeathCnt, accClearCnt, accExamCnt];

  const yesterdayAccCovidItemInfos = [
    yesterdayAccDecideCnt,
    yesterdayAccDeathCnt,
    yesterdayAccClearCnt,
    yesterdayAccExamCnt,
  ];

  const domesticCaseInfosItems = [
    ['Confirmed', 'text-red-400'],
    ['Deaths', 'text-black'],
    ['Recovered', 'text-green-400'],
    ['Tested', 'text-blue-400'],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: accCovidItemInfos[index],
    caseIncreaseDecrease: accCovidItemInfos[index] - yesterdayAccCovidItemInfos[index],
    color,
  }));

  const todayCovidItems = domesticRegionCovidItems.slice(0, 19);
  const yesterdayCovidItems = domesticRegionCovidItems.slice(19, 38);
  const dayBeforeYesterdayCovidItems = domesticRegionCovidItems.slice(38, 57);

  const records = [];
  todayCovidItems.forEach(({ gubunEn, incDec, defCnt, deathCnt, isolClearCnt }, index) => {
    const {
      defCnt: yesterdayDefCnt,
      deathCnt: yesterdayDeathCnt,
      isolClearCnt: yesterdayRecoveredCnt,
    } = yesterdayCovidItems[index];

    const {
      defCnt: dayBeforeYesterdayDefCnt,
      deathCnt: dayBeforeYesterdayDeathCnt,
      isolClearCnt: dayBeforeYesterdayRecoveredCnt,
    } = dayBeforeYesterdayCovidItems[index];

    const todayConfirmed = defCnt - yesterdayDefCnt;
    const yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;

    const todayDeaths = deathCnt - yesterdayDeathCnt;
    const yesterdayDeaths = yesterdayDeathCnt - dayBeforeYesterdayDeathCnt;

    const todayRecovered = isolClearCnt - yesterdayRecoveredCnt;
    const yesterdayRecovered = yesterdayRecoveredCnt - dayBeforeYesterdayRecoveredCnt;

    if (~gubunEn.indexOf('-do')) gubunEn = Region[gubunEn];

    const currentRecords = [
      { region: gubunEn },
      {
        number: todayConfirmed,
        increaseDecreaseNumber: todayConfirmed - yesterdayConfirmed,
      },
      {
        number: defCnt,
        increaseDecreaseNumber: incDec,
      },
      {
        number: deathCnt,
        increaseDecreaseNumber: todayDeaths - yesterdayDeaths,
      },
      {
        number: isolClearCnt,
        increaseDecreaseNumber: todayRecovered - yesterdayRecovered,
      },
    ];

    records.push(currentRecords);
  });

  const domesticRegionTableInfosItems = {
    fields: ['Location', 'Today Confirmed', 'Confirmed', 'Deaths', 'Recovered'],
    sortTypes: ['', '', '', '', ''],
    records,
  };

  return (
    <>
      <Header title="Domestic" />
      <NavBar />
      <Cases caseInfosItems={domesticCaseInfosItems} />
      <ChartByDate chartData={domesticCovidItems} chartSelectOptions={domesticChartSelectOptions} />
      <RegionTable regionTableInfosItems={domesticRegionTableInfosItems} />
    </>
  );
};

export default DomesticScreen;
