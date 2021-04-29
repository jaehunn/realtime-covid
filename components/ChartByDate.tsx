import React, { useEffect, useState, useRef } from "react";

import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { useTheme } from "next-themes";

import { toComma, getChartDataSetsData, getChartLabels } from "../utils";

const ChartByDate = ({ domesticCovidItems }) => {
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
    const chartSetsData = getChartDataSetsData(domesticCovidItems, options);
    setChartDataSetsData(chartSetsData);

    const chartLabels = getChartLabels(domesticCovidItems, options);
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
    <div className="w-1/2 h-3/5 bg-blue-50 m-auto mt-16 shadow-lg rounded-md dark:bg-gray-600">
      <div className="flex">
        <select
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500"
          onChange={firstOptionChangeHandler}
        >
          <option value="decideCnt">Confirmed</option>
          <option value="deathCnt">Deaths</option>
          <option value="clearCnt">Recovered</option>
          <option value="accExamCnt">Tested</option>
          <option value="decideRate">Confirmed Rate</option>
        </select>
        <select
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500"
          onChange={secondOptionChangeHandler}
        >
          {/* TODO) 실시간 차트 고민중 */}
          {/* <option value="realTime">RealTime</option> */}
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
          // 가로 세로 높이 유지한채 리사이징
          // TODO) 높이는 고정하고 싶다.
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

export default ChartByDate;
