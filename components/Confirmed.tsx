import { Bar } from "react-chartjs-2";

import { getFormatDate } from "../utils";

type ConfirmedProps = {
  covidItems: any;
};

const Confirmed = ({ covidItems }: ConfirmedProps) => {
  console.log(covidItems);

  const labels = covidItems.reduce((labels, { createDt }) => {
    const formatDate = getFormatDate(createDt);

    return labels.concat(formatDate);
  }, []);

  const data = covidItems.reverse().reduce((data, { decideCnt: todayDecideCnt }, index) => {
    if (index === 0) return data.concat(todayDecideCnt);

    const decideCntGap = data[index - 1] - todayDecideCnt;

    return data.concat(decideCntGap);
  }, []);

  const barData = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
          }}
        />
      </div>
    </div>
  );
};

export default Confirmed;
