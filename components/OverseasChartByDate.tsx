import React from "react";
import { Bar } from "react-chartjs-2";
import { OverseasCovidDataType } from "../pages/overseas";
import { getChartDataSetsData, getFormatDate } from "../utils";

interface OverseasChartByDateProps {
  overseasCovidItems: OverseasCovidDataType[];
}

const OverseasChartByDate = ({ overseasCovidItems }: OverseasChartByDateProps) => {
  const defaultOverseasChartData = [];
  let accDecideCnt = 0;
  overseasCovidItems.forEach(({ natDefCnt, seq, createDt }, index) => {
    if ((index + 1) % 190) accDecideCnt += natDefCnt;
    else {
      defaultOverseasChartData.push({
        seq,
        createDt,
        decideCnt: accDecideCnt,
      });

      accDecideCnt = 0;
    }
  });

  const defaultOverseasChartSetsData = getChartDataSetsData([...defaultOverseasChartData]);

  const labels = [...defaultOverseasChartData]
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
        data: defaultOverseasChartSetsData,
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

  return (
    <div className="w-1/2 h-5/3 bg-blue-50 m-auto mt-16 shadow-lg rounded-md">
      <div className="text-center">
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

export default OverseasChartByDate;
