import React, { useState } from "react";

import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import { getFormatDate, getChartDataSetsData } from "../utils";

type ChartByDateProps = {
  covidItems: any;
};

// TODO) 마운트되고 왜 6일전 값이 -가 나올까? deaths 로 돌리고 confirmed 로 돌리면 잘 나온다?
// TODO) 왜 confirmed 에서 날짜가 sort 되서 나오지 ->
const ChartByDate = ({ covidItems }: ChartByDateProps) => {
  console.log("Confirmed: ", covidItems);

  const defaultChartSetsData = getChartDataSetsData(covidItems);
  const [chartDataSetsData, setChartDataSetsData] = useState(defaultChartSetsData);

  const labels = covidItems
    .sort((itemA, itemB) => itemA.seq - itemB.seq)
    .reduce((labels, { createDt }, index) => {
      if (index === 0) return labels;

      const formatDate = getFormatDate(createDt);

      return labels.concat(formatDate);
    }, []);

  console.log(chartDataSetsData, labels);

  const barData = {
    labels,
    datasets: [
      {
        label: [], // TODO) 범례 처리
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

  // TODO) bar chart 숫자가 가려진다. layout.padding 으로 임시해결
  // TODO) 확진자뿐 아니라 다른 정보를 선택적으로 보여주게하기
  // TODO) window size 줄였을 때, 그래프가 아래로 길어진다.
  return (
    <div className="w-1/2 h-auto bg-blue-50 m-auto mt-16 shadow-lg rounded-md">
      <div className="text-center">
        <select className="" onChange={onChangeHandler}>
          <option value="decideCnt">Confirmed</option>
          <option value="deathCnt">Deaths</option>
          <option value="clearCnt">Recovered</option>
          {/* 금일 확진자 / 금일 검사자 * 100 */}
          <option value="dps4">Confirmed Rate</option>
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