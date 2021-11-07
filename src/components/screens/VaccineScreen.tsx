import React from 'react';

import { Header, Cases, ChartByDate, NavBar } from '../shared';
import { getVaccineChartDataForm } from '../../utils';
import { vaccineChartSelectOptions } from '../../constants/vaccine';

const VaccineScreen = ({ vaccineItems }) => {
  const accVaccineItem = vaccineItems[vaccineItems.length - 18];

  const caseInfosItems = [
    {
      caseType: '1st Vaccinated',
      caseCnt: accVaccineItem.totalFirstCnt,
      caseIncreaseDecrease: accVaccineItem.firstCnt,
      color: 'text-green-400',
    },
    {
      caseType: '2nd Vaccinated',
      caseCnt: accVaccineItem.totalSecondCnt,
      caseIncreaseDecrease: accVaccineItem.secondCnt,
      color: 'text-blue-400',
    },
  ];

  const vaccineChartData = getVaccineChartDataForm(vaccineItems);

  return (
    <>
      <Header title="Vaccine" />
      <NavBar />
      <Cases caseInfosItems={caseInfosItems} />
      <ChartByDate chartData={vaccineChartData} chartSelectOptions={vaccineChartSelectOptions} />
    </>
  );
};

export default VaccineScreen;
