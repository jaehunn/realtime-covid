"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_chartjs_2_1 = require("react-chartjs-2");
require("chartjs-plugin-datalabels");
var utils_1 = require("../utils");
// TODO) 마운트되고 왜 6일전 값이 -가 나올까? deaths 로 돌리고 confirmed 로 돌리면 잘 나온다?
// TODO) 왜 confirmed 에서 날짜가 sort 되서 나오지 ->
var ChartByDate = function (_a) {
    var covidItems = _a.covidItems;
    console.log("Confirmed: ", covidItems);
    var defaultChartSetsData = utils_1.getChartDataSetsData(covidItems);
    var _b = react_1.useState(defaultChartSetsData), chartDataSetsData = _b[0], setChartDataSetsData = _b[1];
    var labels = covidItems
        .sort(function (itemA, itemB) { return itemA.seq - itemB.seq; })
        .reduce(function (labels, _a, index) {
        var createDt = _a.createDt;
        if (index === 0)
            return labels;
        var formatDate = utils_1.getFormatDate(createDt);
        return labels.concat(formatDate);
    }, []);
    console.log(chartDataSetsData, labels);
    var barData = {
        labels: labels,
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
                borderWidth: 1
            },
        ]
    };
    var onChangeHandler = function (e) {
        var optionValue = e.target.value;
        setChartDataSetsData(utils_1.getChartDataSetsData(covidItems, optionValue));
        console.log(chartDataSetsData);
    };
    // TODO) bar chart 숫자가 가려진다. layout.padding 으로 임시해결
    // TODO) 확진자뿐 아니라 다른 정보를 선택적으로 보여주게하기
    // TODO) window size 줄였을 때, 그래프가 아래로 길어진다.
    return (react_1["default"].createElement("div", { className: "w-1/2 h-auto bg-blue-50 m-auto mt-16 shadow-lg rounded-md" },
        react_1["default"].createElement("div", { className: "text-center" },
            react_1["default"].createElement("select", { className: "", onChange: onChangeHandler },
                react_1["default"].createElement("option", { value: "decideCnt" }, "Confirmed"),
                react_1["default"].createElement("option", { value: "deathCnt" }, "Deaths"),
                react_1["default"].createElement("option", { value: "clearCnt" }, "Recovered"),
                react_1["default"].createElement("option", { value: "dps4" }, "Confirmed Rate")),
            react_1["default"].createElement(react_chartjs_2_1.Bar, { data: barData, width: 400, height: 200, options: {
                    layout: {
                        padding: 30
                    },
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
exports["default"] = ChartByDate;
