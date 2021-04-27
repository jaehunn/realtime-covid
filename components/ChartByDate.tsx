import React, { useEffect, useState, useRef } from "react";

import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { useTheme } from "next-themes";

import { toComma, getFormatDate, getChartDataSetsData } from "../utils";

const ChartByDate = ({ domesticCovidItems }) => {
  const defaultChartSetsData = getChartDataSetsData([...domesticCovidItems], "decideCnt");
  const [chartDataSetsData, setChartDataSetsData] = useState(defaultChartSetsData);
  const [options, setOptions] = useState({});

  const labels = [...domesticCovidItems]
    .sort((itemA, itemB) => itemA.seq - itemB.seq)
    .reduce((labels, { createDt }, index) => {
      if (index === 0) return labels;

      const formatDate = getFormatDate(createDt);

      return labels.concat(formatDate);
    }, []);

  const barData = {
    labels,
    datasets: [
      {
        barPercentage: 0.2,
        data: chartDataSetsData,
        backgroundColor: "rgba(99, 102, 241, 1)",
      },
    ],
  };

  const { theme, setTheme } = useTheme();

  const firstOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value: optionValue } = e.target;

    setOptions({ firstOption: optionValue });

    setChartDataSetsData(getChartDataSetsData(domesticCovidItems, optionValue, options));
  };

  // TODO) 두번째 셀렉트박스는 어떻게 처리해야될까.
  const secondOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value: optionValue } = e.target;

    setOptions({ secondOption: optionValue });

    setChartDataSetsData(getChartDataSetsData(domesticCovidItems, optionValue, options));
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
          <option value="accDefRate">Confirmed Rate</option>
        </select>
        <select
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500"
          onChange={secondOptionChangeHandler}
        >
          <option value="realTime">RealTime</option>
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
