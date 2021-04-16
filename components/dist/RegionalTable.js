"use strict";
exports.__esModule = true;
var RegionItem_1 = require("./RegionItem");
var utils_1 = require("../utils");
var RegionalTable = function (_a) {
    var covidItems = _a.covidItems;
    var todayCovidItems = covidItems.slice(0, 19);
    var yesterdayCovidItems = covidItems.slice(19, 38);
    var dayBeforeYesterdayCovidItems = covidItems.slice(38, 57);
    // TODO) 무한 스크롤 기능
    return (React.createElement("div", { className: "w-1/2 bg-blue-50 flex flex-col m-auto mt-16 shadow-lg rounded-md" },
        React.createElement("div", { className: "w-full bg-blue-200 flex justify-evenly text-sm leading-8 tracking-wide font-semibold" },
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Location"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Today Confirmed"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Confirmed"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Deaths"),
            React.createElement("div", { className: "w-1/5 h-12 flex justify-center items-center" }, "Recovered")),
        todayCovidItems.map(function (_a, index) {
            var gubunEn = _a.gubunEn, incDec = _a.incDec, defCnt = _a.defCnt, deathCnt = _a.deathCnt, isolClearCnt = _a.isolClearCnt;
            var _b = yesterdayCovidItems[index], yesterdayDefCnt = _b.defCnt, yesterdayDeathCnt = _b.deathCnt, yesterdayRecoveredCnt = _b.isolClearCnt;
            var _c = dayBeforeYesterdayCovidItems[index], dayBeforeYesterdayDefCnt = _c.defCnt, dayBeforeYesterdayDeathCnt = _c.deathCnt, dayBeforeYesterdayRecoveredCnt = _c.isolClearCnt;
            var todayConfirmed = defCnt - yesterdayDefCnt;
            var yesterdayConfirmed = yesterdayDefCnt - dayBeforeYesterdayDefCnt;
            var todayDeaths = deathCnt - yesterdayDeathCnt;
            var yesterdayDeaths = yesterdayDeathCnt - dayBeforeYesterdayDeathCnt;
            var todayRecovered = isolClearCnt - yesterdayRecoveredCnt;
            var yesterdayRecovered = yesterdayRecoveredCnt - dayBeforeYesterdayRecoveredCnt;
            if (~gubunEn.indexOf("-do"))
                gubunEn = utils_1.getRegionName(gubunEn);
            return (React.createElement(RegionItem_1["default"], { key: index, region: gubunEn, todayConfirmed: todayConfirmed, todayConfirmedIncreaseDecrease: todayConfirmed - yesterdayConfirmed, confirmed: defCnt, confirmedIncreaseDecrease: incDec, deaths: deathCnt, todayDeathsIncreaseDecrease: todayDeaths - yesterdayDeaths, recovered: isolClearCnt, todayRecoveredIncreaseDecrease: todayRecovered - yesterdayRecovered }));
        })));
};
exports["default"] = RegionalTable;
