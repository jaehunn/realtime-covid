import React, { useEffect, useState } from "react";

import { getChartLabels, getVaccineChartDataSetsData } from "../utils";
import { SelectOption, ChartBar } from "../components";

const VaccineChartByDate = ({ chartData, chartSelectOptions }) => {
  console.log(chartData, chartSelectOptions);

  const { secondOptions } = chartSelectOptions;

  const [options, setOptions] = useState({ secondOption: secondOptions[0].value });
  const [chartDataSetsData, setChartDataSetsData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    const chartSetsData = getVaccineChartDataSetsData(chartData, options);
    setChartDataSetsData(chartSetsData);

    const chartLabels = getChartLabels(chartData, options);
    setChartLabels(chartLabels);
  }, [options]);

  const secondOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value: optionValue },
  }) => {
    setOptions({ ...options, secondOption: optionValue });
  };

  const selectOptions = [
    {
      id: 1,
      options: chartSelectOptions.secondOptions,
      handler: secondOptionChangeHandler,
    },
  ];

  return (
    <div className="lg:w-3/5 pb-10 mb-10 mx-auto border-b border-gray-800 rounded-md bg-blue-50 dark:bg-gray-600">
      <SelectOption selectOptions={selectOptions} />
      <ChartBar labels={chartLabels} data={chartDataSetsData} />
    </div>
  );
};

export default React.memo(VaccineChartByDate);
