"use strict";
exports.__esModule = true;
var react_chartjs_2_1 = require("react-chartjs-2");
require("chartjs-plugin-datalabels");
var utils_1 = require("../utils");
var Confirmed = function (_a) {
    var covidItems = _a.covidItems;
    console.log("Confirmed: ", covidItems);
    var labels = covidItems
        .sort(function (itemA, itemB) { return itemA.seq - itemB.seq; })
        .reduce(function (labels, _a, index) {
        var createDt = _a.createDt;
        if (index === 0)
            return labels;
        var formatDate = utils_1.getFormatDate(createDt);
        return labels.concat(formatDate);
    }, []);
    var baseDecideCnt = covidItems[0].decideCnt;
    var data = covidItems
        .sort(function (itemA, itemB) { return itemA.seq - itemB.seq; })
        .reduce(function (data, _a, index) {
        var todayDecideCnt = _a.decideCnt;
        if (index === 0)
            return data;
        var decideCntGap = todayDecideCnt - baseDecideCnt;
        baseDecideCnt = todayDecideCnt;
        return data.concat(decideCntGap);
    }, []);
    var barData = {
        labels: labels,
        datasets: [
            {
                label: [],
                data: data,
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
                borderWidth: 1
            },
        ]
    };
    // TODO) 확진자뿐 아니라 다른 정보를 선택적으로 보여주게하기
    return (React.createElement("div", { className: "w-1/2 h-80 bg-blue-50 m-auto shadow-lg rounded-md" },
        React.createElement("div", { className: "text-center" },
            React.createElement("h2", null, "Confirmed"),
            React.createElement(react_chartjs_2_1.Bar, { data: barData, width: 400, height: 200, options: {
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            },
                        ]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    },
                    plugins: {
                        datalabels: {
                            display: true,
                            color: "black",
                            anchor: "end",
                            align: "end"
                        }
                    }
                } }))));
};
exports["default"] = Confirmed;
