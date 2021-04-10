"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var IncreaseDecrease_1 = require("./IncreaseDecrease");
var Cases = function (_a) {
    var covidItems = _a.covidItems;
    console.log("Cases: ", covidItems);
    var accCovidItems = covidItems[0], yesterdayAccCovidItems = covidItems[1];
    var accDecideCnt = accCovidItems.decideCnt, accDeathCnt = accCovidItems.deathCnt, accClearCnt = accCovidItems.clearCnt, accExamCnt = accCovidItems.accExamCnt;
    var yesterdayAccDecideCnt = yesterdayAccCovidItems.decideCnt, yesterdayAccDeathCnt = yesterdayAccCovidItems.deathCnt, yesterdayAccClearCnt = yesterdayAccCovidItems.clearCnt, yesterdayAccExamCnt = yesterdayAccCovidItems.accExamCnt;
    // TODO) 중복되는 스타일을 어떻게 해결할까
    return (React.createElement("div", { className: "w-1/2 h-32 flex flex-row flex-1 justify-evenly m-auto mt-16" },
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-red-500" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide" }, "Confirmed"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(accDecideCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold" },
                React.createElement(IncreaseDecrease_1["default"], { increaseDecreaseNumber: accDecideCnt - yesterdayAccDecideCnt }))),
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-black" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide" }, "Deaths"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(accDeathCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold" },
                React.createElement(IncreaseDecrease_1["default"], { increaseDecreaseNumber: accDeathCnt - yesterdayAccDeathCnt }))),
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-green-500" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide" }, "Recovered"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(accClearCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold" },
                React.createElement(IncreaseDecrease_1["default"], { increaseDecreaseNumber: accClearCnt - yesterdayAccClearCnt }))),
        React.createElement("div", { className: "w-40 h-24 bg-blue-50 flex flex-col justify-center items-center shadow-lg rounded-md text-blue-500" },
            React.createElement("div", { className: "text-lg leading-4 tracking-wide" }, "Tested"),
            React.createElement("div", { className: "text-sm leading-8 tracking-wide" }, utils_1.toComma(accExamCnt)),
            React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold" },
                React.createElement(IncreaseDecrease_1["default"], { increaseDecreaseNumber: accExamCnt - yesterdayAccExamCnt })))));
};
exports["default"] = Cases;
