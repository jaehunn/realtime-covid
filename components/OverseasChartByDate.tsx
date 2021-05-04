import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { getChartDataSetsData, getChartLabels, toComma } from "../utils";
import { useTheme } from "next-themes";

const OverseasChartByDate = ({ overseasChartData }) => {
  const { theme } = useTheme();

  const [options, setOptions] = useState({ firstOption: "decideCnt", secondOption: "daily" });

  const [chartDataSetsData, setChartDataSetsData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  const barData = {
    labels: chartLabels,
    datasets: [
      {
        barPercentage: 0.2,
        data: chartDataSetsData,
        backgroundColor: "rgba(99, 102, 241, 1)",
      },
    ],
  };

  useEffect(() => {
    const chartSetsData = getChartDataSetsData(overseasChartData, options);
    setChartDataSetsData(chartSetsData);

    const chartLabels = getChartLabels(overseasChartData, options);
    setChartLabels(chartLabels);
  }, [options]);

  const firstOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value: optionValue },
  }) => {
    setOptions({ ...options, firstOption: optionValue });
  };

  const secondOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = ({
    target: { value: optionValue },
  }) => {
    setOptions({ ...options, secondOption: optionValue });
  };

  return (
    <div className="lg:w-3/5 pb-10 mb-10 mx-auto border-b border-gray-800 rounded-md bg-blue-50 dark:bg-gray-600">
      <div className="flex">
        <select
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500"
          onChange={firstOptionChangeHandler}
        >
          <option value="decideCnt">Confirmed</option>
          <option value="deathCnt">Deaths</option>
        </select>
        <select
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500"
          onChange={secondOptionChangeHandler}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <Bar
        data={barData}
        options={{
          layout: {
            padding: 40,
          },
          maintainAspectRatio: true,
          responsive: true,
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: `${theme === "dark" ? "rgba(229, 231, 235, 1)" : "rgba(0, 0, 0, 1)"}`,
                },
              },
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
          plugins: {
            datalabels: {
              formatter: function (_, context) {
                return toComma(context.dataset.data[context.dataIndex]);
              },
              display: true,
              color: `${theme === "dark" ? "rgba(229, 231, 235, 1)" : "rgba(0, 0, 0, 1)"}`,
              anchor: "end",
              align: "end",
            },
          },
        }}
      />
    </div>
  );
};

export default OverseasChartByDate;
