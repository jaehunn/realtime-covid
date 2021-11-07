import React from "react";
import { useChart } from "../../hooks";
import { SelectOptions, ChartBar } from ".";

const ChartByDate = ({ chartData, chartSelectOptions }) => {
  const { chartLabels, chartDataSetsData, selectOptions } = useChart(
    chartData,
    chartSelectOptions
  );
  const classes = `lg:w-3/5 pb-10 mb-10 mx-auto border-b border-gray-800 rounded-md bg-blue-50 dark:bg-gray-600`;

  return (
    <div className={classes}>
      <SelectOptions selectOptions={selectOptions} />
      <ChartBar labels={chartLabels} data={chartDataSetsData} />
    </div>
  );
};

export default React.memo(ChartByDate);
