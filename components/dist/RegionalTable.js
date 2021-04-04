"use strict";
exports.__esModule = true;
var RegionItem_1 = require("./RegionItem");
var RegionalTable = function (_a) {
    var covidItems = _a.covidItems;
    console.log("RegionalTable", covidItems); // 일별 지역 데이터 19개
    var todayCovidItems = covidItems.slice(0, 19);
    var yesterdayCovidItems = covidItems.slice(19, 38);
    var dayBeforeYesterdayCovidItems = covidItems.slice(38, 57);
    // TODO) 무한 스크롤 기능
    // TODO) 금일 확진자 수, 어제기준 증감 수 구하기
    return (React.createElement("div", { className: "w-1/2 h-80 bg-blue-50 flex flex-col m-auto mt-16 shadow-lg rounded-md" },
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
            return (React.createElement(RegionItem_1["default"], { region: gubunEn, todayConfirmed: todayConfirmed, todayIncreaseDecrease: todayConfirmed - yesterdayConfirmed, confirmed: defCnt, increaseDecrease: incDec, deaths: deathCnt, recovered: isolClearCnt }));
        })));
};
exports["default"] = RegionalTable;
