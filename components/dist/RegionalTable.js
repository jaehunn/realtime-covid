"use strict";
exports.__esModule = true;
var RegionItem_1 = require("./RegionItem");
var RegionalTable = function (_a) {
    var covidItems = _a.covidItems;
    var todayCovidItems = covidItems.slice(0, 19);
    var yesterdayCovidItems = covidItems.slice(19, 38);
    var dayBeforeYesterdayCovidItems = covidItems.slice(38, 57);
    // TODO) 무한 스크롤 기능
    return (React.createElement("div", { className: "w-3/5 bg-blue-50 flex flex-col m-auto mt-16 shadow-lg rounded-md" },
        React.createElement("div", { className: "w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold" },
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Location"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Today Confirmed"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Confirmed"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Deaths"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Recovered")),
        todayCovidItems.map(function (_a, index) {
            var gubunEn = _a.gubunEn, incDec = _a.incDec, defCnt = _a.defCnt, deathCnt = _a.deathCnt, isolClearCnt = _a.isolClearCnt;
            var yesterdayDefCnt = yesterdayCovidItems[index].defCnt;
            var dayBeforeYesterdayDefCnt = dayBeforeYesterdayCovidItems[index].defCnt;
            var todayConfirmed = defCnt - yesterdayDefCnt;
            var yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;
            return (React.createElement(RegionItem_1["default"], { key: index, region: gubunEn, todayConfirmed: todayConfirmed, todayIncreaseDecrease: todayConfirmed - yesterdayConfirmed, confirmed: defCnt, increaseDecrease: incDec, deaths: deathCnt, recovered: isolClearCnt }));
        })));
};
exports["default"] = RegionalTable;
