"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_chartjs_2_1 = require("react-chartjs-2");
var utils_1 = require("../utils");
var OverseasChartByDate = function (_a) {
    var overseasCovidItems = _a.overseasCovidItems;
    var defaultOverseasChartData = [];
    var accDecideCnt = 0;
    overseasCovidItems.forEach(function (_a, index) {
        var natDefCnt = _a.natDefCnt, seq = _a.seq, createDt = _a.createDt;
        if ((index + 1) % 190)
            accDecideCnt += natDefCnt;
        else {
            defaultOverseasChartData.push({
                seq: seq,
                createDt: createDt,
                decideCnt: accDecideCnt
            });
            accDecideCnt = 0;
        }
    });
    var defaultOverseasChartSetsData = utils_1.getChartDataSetsData(__spreadArrays(defaultOverseasChartData));
    var labels = __spreadArrays(defaultOverseasChartData).sort(function (itemA, itemB) { return itemA.seq - itemB.seq; })
        .reduce(function (labels, _a, index) {
        var createDt = _a.createDt;
        if (index === 0)
            return labels;
        var formatDate = utils_1.getFormatDate(createDt);
        return labels.concat(formatDate);
    }, []);
    var barData = {
        labels: labels,
        datasets: [
            {
                barPercentage: 0.5,
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
                borderWidth: 1
            },
        ]
    };
    /* TODO) onChange 구현 */
    return (react_1["default"].createElement("div", { className: "w-1/2 h-5/3 bg-blue-50 m-auto mt-16 shadow-lg rounded-md" },
        react_1["default"].createElement("div", { className: "text-center" },
            react_1["default"].createElement("select", { className: "flex flex-start text-sm leading-2 rounded-full py-1 px-2 bg-blue-100 border-2 border-blue-400 border-opacity-75 m-4 cursor-pointer" },
                react_1["default"].createElement("option", { value: "decideCnt" }, "Confirmed"),
                react_1["default"].createElement("option", { value: "deathCnt" }, "Deaths")),
            react_1["default"].createElement(react_chartjs_2_1.Bar, { data: barData, width: 400, height: 200, options: {
                    layout: {
                        padding: 30
                    },
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                display: false,
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
                            formatter: function (_, context) {
                                return utils_1.toComma(context.dataset.data[context.dataIndex]);
                            },
                            display: true,
                            color: "black",
                            anchor: "end",
                            align: "end"
                        }
                    }
                } }))));
};
exports["default"] = OverseasChartByDate;
