import { useEffect, useState } from "react";
import { getChartDataSetsData, getChartLabels } from "../utils";

const useChart = (chartData, chartSelectOptions) => {
  const { firstOptions, secondOptions } = chartSelectOptions;

  const [options, setOptions] = useState({ firstOption: firstOptions[0]?.value, secondOption: secondOptions[0]?.value });
  const [chartDataSetsData, setChartDataSetsData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    const chartSetsData = getChartDataSetsData(chartData, options);
    setChartDataSetsData(chartSetsData);

    const chartLabels = getChartLabels(chartData, options);
    setChartLabels(chartLabels);
  }, [options]);

  const firstOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = ({ target: { value: optionValue } }) => {
    setOptions({ ...options, firstOption: optionValue });
  };

  const secondOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = ({ target: { value: optionValue } }) => {
    setOptions({ ...options, secondOption: optionValue });
  };

  const selectOptions = [
    {
      id: 1,
      options: chartSelectOptions.firstOptions,
      handler: firstOptionChangeHandler,
    },
    {
      id: 2,
      options: chartSelectOptions.secondOptions,
      handler: secondOptionChangeHandler,
    },
  ];

  return {
    chartLabels,
    chartDataSetsData,
    selectOptions,
  };
};

export default useChart;
