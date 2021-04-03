"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var Cases = function (_a) {
    var covidItems = _a.covidItems;
    console.log("Cases: ", covidItems);
    var todayCovidItems = covidItems[0], yesterdayCovidItems = covidItems[1];
    var todayDecideCnt = todayCovidItems.decideCnt, todayDeathCnt = todayCovidItems.deathCnt, todayExamCnt = todayCovidItems.examCnt, todayClearCnt = todayCovidItems.clearCnt;
    var yesterdayDecideCnt = yesterdayCovidItems.decideCnt, yesterdayDeathCnt = yesterdayCovidItems.deathCnt, yesterdayExamCnt = yesterdayCovidItems.examCnt, yesterdayClearCnt = yesterdayCovidItems.clearCnt;
    // TODO) 중복되는 스타일을 어떻게 해결할까
    // TODO) 증감에 따라 유동적으로 색 조정, 화살표 아이콘
    return (React.createElement("div", { className: "w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16" },
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide text-red-500" }, "Confirmed"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(todayDecideCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold" }, utils_1.toIncreaseDecrease(todayDecideCnt - yesterdayDecideCnt))),
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide text-black" }, "Deaths"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(todayDeathCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold" }, utils_1.toIncreaseDecrease(todayDeathCnt - yesterdayDeathCnt))),
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide text-green-500" }, "Recovered"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(todayExamCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold" }, utils_1.toIncreaseDecrease(todayExamCnt - yesterdayExamCnt))),
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide text-blue-500" }, "Tested"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(todayClearCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-3 bg-blue-50 font-semibold" }, utils_1.toIncreaseDecrease(todayClearCnt - yesterdayClearCnt)))));
};
exports["default"] = Cases;
