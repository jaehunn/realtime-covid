import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { toComma } from "../utils";
import { useTheme } from "next-themes";

const ChartBar = ({ labels, data, barOptions = {} }) => {
  const { theme } = useTheme();

  const barData = {
    labels,
    datasets: [
      {
        barPercentage: 0.2,
        data,
        backgroundColor: "rgba(99, 102, 241, 1)",
      },
    ],
  };

  return (
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
  );
};

export default React.memo(ChartBar);