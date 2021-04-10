import React, { useState } from "react";

import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import { getFormatDate, getChartDataSetsData } from "../utils";

type ChartByDateProps = {
  covidItems: any;
};

const ChartByDate = ({ covidItems }: ChartByDateProps) => {
  console.log("ChartByDate: ", covidItems);

  const defaultChartSetsData = getChartDataSetsData([...covidItems]);
  const [chartDataSetsData, setChartDataSetsData] = useState(defaultChartSetsData);

  const labels = [...covidItems]
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
        label: [],
        data: chartDataSetsData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(83, 97, 98, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(83, 97, 98, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value: optionValue } = e.target;

    setChartDataSetsData(getChartDataSetsData(covidItems, optionValue));

    console.log(chartDataSetsData);
  };

  // TODO) window size 줄였을 때, 그래프가 아래로 길어진다.
  return (
    <div className="w-1/2 h-5/3 bg-blue-50 m-auto mt-16 shadow-lg rounded-md">
      <div className="text-center">
        <select
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer"
          onChange={onChangeHandler}
        >
          <option value="decideCnt">Confirmed</option>
          <option value="deathCnt">Deaths</option>
          <option value="clearCnt">Recovered</option>

          {/* 금일 확진자 / 금일 검사자 * 100 */}
          {/* <option value="dps4">Confirmed Rate</option> */}
        </select>
        <Bar
          data={barData}
          width={400}
          height={200}
          options={{
            layout: {
              padding: 30,
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
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
                display: true,
                color: "black",
                anchor: "end",
                align: "end",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ChartByDate;
