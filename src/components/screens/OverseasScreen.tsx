import React from 'react';

import { Header, Cases, ChartByDate, RegionTable, NavBar } from '../shared';
import { getAllDecideDeathCnt, getOverseasChartDataForm } from '../../utils';
import { overseasChartSelectOptions } from '../../constants/overseas';

const OverseasScreen = ({ overseasCovidItems }) => {
  const todayOverseasCovidItems = overseasCovidItems.slice(0, 190);
  const yesterdayOverseasCovidItems = overseasCovidItems.slice(190, 380);
  const dayBeforeYesterdayOverseasCovidItems = overseasCovidItems.slice(380, 570);

  const [accDecideCnt, accDeathCnt] = getAllDecideDeathCnt(overseasCovidItems.slice(0, 190));
  const [yesterdayaccDecideCnt, yesterdayAccDeathCnt] = getAllDecideDeathCnt(
    overseasCovidItems.slice(190, 380)
  );

  const accOverseasCovidItemInfos = [accDecideCnt, accDeathCnt];
  const yesterdayAccOverseasCovidItemInfos = [yesterdayaccDecideCnt, yesterdayAccDeathCnt];

  const overseasCaseInfosItems = [
    ['Confirmed', 'text-red-400'],
    ['Deaths', 'text-black'],
  ].map(([caseType, color], index) => ({
    caseType,
    caseCnt: accOverseasCovidItemInfos[index],
    caseIncreaseDecrease:
      accOverseasCovidItemInfos[index] - yesterdayAccOverseasCovidItemInfos[index],
    color,
  }));

  const overseasChartData = getOverseasChartDataForm(overseasCovidItems);

  const records = [];
  todayOverseasCovidItems.forEach(({ nationNmEn, natDefCnt, natDeathCnt }, index) => {
    const { natDefCnt: yesterdayDefCnt, natDeathCnt: yesterdayDeathCnt } =
      yesterdayOverseasCovidItems[index];
    const { natDefCnt: dayBeforeYesterdayDefCnt, natDeathCnt: dayBeforeDeathCnt } =
      dayBeforeYesterdayOverseasCovidItems[index];

    const todayConfirmed = natDefCnt - yesterdayDefCnt;
    const yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;

    const todayDeaths = natDeathCnt - yesterdayDeathCnt;
    const yesterdayDeaths = yesterdayDeathCnt - dayBeforeDeathCnt;

    const currentRecords = [
      { region: nationNmEn },
      {
        number: natDefCnt,
        increaseDecreaseNumber: todayConfirmed - yesterdayConfirmed,
      },
      {
        number: natDeathCnt,
        increaseDecreaseNumber: todayDeaths - yesterdayDeaths,
      },
    ];

    records.push(currentRecords);
  });

  const overseasRegionTableInfosItems = {
    fields: ['Location', 'Confirmed', 'Deaths'],
    sortTypes: ['', '', ''],
    records,
  };

  return (
    <>
      <Header title="Overseas" />
      <NavBar />
      <Cases caseInfosItems={overseasCaseInfosItems} />
      <ChartByDate chartData={overseasChartData} chartSelectOptions={overseasChartSelectOptions} />
      <RegionTable regionTableInfosItems={overseasRegionTableInfosItems} />
    </>
  );
};

export default OverseasScreen;
