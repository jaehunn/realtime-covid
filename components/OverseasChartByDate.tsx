import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { getChartDataSetsData, toComma, getFormatDate } from "../utils";
import { useTheme } from "next-themes";

const OverseasChartByDate = ({ overseasChartData }) => {
  const defaultOverseasChartSetsData = getChartDataSetsData([...overseasChartData]);
  const [overseasChartDataSetsData, setOverseasChartDataSetsData] = useState(defaultOverseasChartSetsData);

  const labels = [...overseasChartData]
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
        data: overseasChartDataSetsData,
        backgroundColor: "rgba(99, 102, 241, 1)",
      },
    ],
  };

  const { theme, setTheme } = useTheme();

  const onChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value: optionValue } = e.target;

    setOverseasChartDataSetsData(getChartDataSetsData(overseasChartData, optionValue));
  };

  return (
    <div className="w-1/2 h-5/3 bg-blue-50 m-auto mt-16 shadow-lg rounded-md dark:bg-gray-600">
      <div className="text-center">
        <select
          className="flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer outline-none dark:bg-gray-500"
          onChange={onChangeHandler}
        >
          <option value="decideCnt">Confirmed</option>
          <option value="deathCnt">Deaths</option>
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
    </div>
  );
};

export default OverseasChartByDate;
