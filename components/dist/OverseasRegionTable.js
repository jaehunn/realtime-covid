"use strict";
exports.__esModule = true;
var react_1 = require("react");
var OverseasRegionItem_1 = require("./OverseasRegionItem");
var OverseasRegionlTable = function (_a) {
    var overseasCovidItems = _a.overseasCovidItems;
    var accOverseasCovidItems = overseasCovidItems.slice(0, 190);
    var yesterdayCovidItems = overseasCovidItems.slice(190, 380);
    var dayBeforeYesterdayCovidItems = overseasCovidItems.slice(380, 570);
    console.log(accOverseasCovidItems);
    // TODO) 무한 스크롤 기능
    return (react_1["default"].createElement("div", { className: "w-1/3 bg-blue-50 flex flex-col m-auto mt-16 shadow-lg rounded-md" },
        react_1["default"].createElement("div", { className: "w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold" },
            react_1["default"].createElement("div", { className: "w-1/3 h-12 flex justify-center items-center" }, "Location"),
            react_1["default"].createElement("div", { className: "w-1/3 h-12 flex justify-center items-center" }, "Confirmed"),
            react_1["default"].createElement("div", { className: "w-1/3 h-12 flex justify-center items-center" }, "Deaths")),
        accOverseasCovidItems.map(function (_a, index) {
            var nationNmEn = _a.nationNmEn, natDefCnt = _a.natDefCnt, natDeathCnt = _a.natDeathCnt;
            var _b = yesterdayCovidItems[index], yesterdayDefCnt = _b.natDefCnt, yesterdayDeathCnt = _b.natDeathCnt;
            var _c = dayBeforeYesterdayCovidItems[index], dayBeforeYesterdayDefCnt = _c.natDefCnt, dayBeforeDeathCnt = _c.natDeathCnt;
            var todayConfirmed = natDefCnt - yesterdayDefCnt;
            var yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;
            var todayDeaths = natDeathCnt - yesterdayDeathCnt;
            var yesterdayDeaths = yesterdayDeathCnt - dayBeforeDeathCnt;
            return (react_1["default"].createElement(OverseasRegionItem_1["default"], { key: index, region: nationNmEn, confirmed: natDefCnt, confirmedIncreaseDecrease: todayConfirmed - yesterdayConfirmed, deaths: natDeathCnt, deathsIncreaseDecrease: todayDeaths - yesterdayDeaths }));
        })));
};
exports["default"] = OverseasRegionlTable;
