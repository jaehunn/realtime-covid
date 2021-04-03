import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

import { getFormatDate } from "../utils";

type ConfirmedProps = {
  covidItems: any;
};

const Confirmed = ({ covidItems }: ConfirmedProps) => {
  console.log("Confirmed: ", covidItems);

  const labels = covidItems
    .sort((itemA, itemB) => itemA.seq - itemB.seq)
    .reduce((labels, { createDt }, index) => {
      if (index === 0) return labels;

      const formatDate = getFormatDate(createDt);

      return labels.concat(formatDate);
    }, []);

  let baseDecideCnt = covidItems[0].decideCnt;
  const data = covidItems
    .sort((itemA, itemB) => itemA.seq - itemB.seq)
    .reduce((data, { decideCnt: todayDecideCnt }, index) => {
      if (index === 0) return data;

      const decideCntGap = todayDecideCnt - baseDecideCnt;

      baseDecideCnt = todayDecideCnt;

      return data.concat(decideCntGap);
    }, []);

  const barData = {
    labels,
    datasets: [
      {
        label: [], // TODO) 범례 처리
        data,
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

  // TODO) 확진자뿐 아니라 다른 정보를 선택적으로 보여주게하기
  return (
    <div className="w-1/2 h-80 bg-blue-50 m-auto shadow-lg rounded-md">
      <div className="text-center">
        <h2>Confirmed</h2>
        <Bar
          data={barData}
          width={400}
          height={200}
          options={{
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

export default Confirmed;
