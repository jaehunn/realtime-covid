"use strict";
exports.__esModule = true;
exports.getRegionName = exports.getSignNumber = exports.toComma = exports.toIncreaseDecreaseNumber = exports.getFormatDate = exports.getDate = exports.requestFormatDate = exports.getAllDecideDeathCnt = exports.getChartDataSetsData = exports.Region = void 0;
var Region;
(function (Region) {
    Region["Gyeongsangnam-do"] = "Gyeongnam";
    Region["Gyeongsangbuk-do"] = "Gyeongbuk";
    Region["Jeollanam-do"] = "Jeonnam";
    Region["Jeollabuk-do"] = "Jeonbuk";
    Region["Chungcheongnam-do"] = "Chungnam";
    Region["Chungcheongbuk-do"] = "Chungbuk";
    Region["Gangwon-do"] = "Gangwon";
    Region["Gyeonggi-do"] = "Gyeonggi";
})(Region = exports.Region || (exports.Region = {}));
exports.getChartDataSetsData = function (covidItems, selectOption) {
    if (selectOption === void 0) { selectOption = "decideCnt"; }
    var defaultSelectOption = covidItems.sort(function (itemA, itemB) { return itemA.seq - itemB.seq; })[0][selectOption];
    var data = covidItems
        .sort(function (itemA, itemB) { return itemA.seq - itemB.seq; })
        .reduce(function (data, item, index) {
        if (index === 0)
            return data;
        var todaySelectOption = item[selectOption];
        var gap = todaySelectOption - defaultSelectOption;
        defaultSelectOption = todaySelectOption;
        return data.concat(gap);
    }, []);
    return data;
};
exports.getAllDecideDeathCnt = function (overseasCovidItems) {
    var allDecideDeathCnt = overseasCovidItems.reduce(function (allDecideDeathCnt, _a) {
        var natDefCnt = _a.natDefCnt, natDeathCnt = _a.natDeathCnt;
        allDecideDeathCnt[0] += natDefCnt;
        allDecideDeathCnt[1] += natDeathCnt;
        return allDecideDeathCnt;
    }, [0, 0]);
    return allDecideDeathCnt;
};
exports.requestFormatDate = function (_a) {
    var currentYear = _a[0], currentMonth = _a[1], currentDays = _a[2];
    if (currentMonth.length < 2)
        currentMonth = "0" + currentMonth;
    if (currentDays.length < 2)
        currentDays = "0" + currentDays;
    return "" + currentYear + currentMonth + currentDays;
};
exports.getDate = function (minusDay) {
    if (minusDay === void 0) { minusDay = 0; }
    var currentDate = new Date();
    if (minusDay > 0)
        currentDate = new Date(currentDate.setDate(currentDate.getDate() - minusDay));
    var currentYear = currentDate.getFullYear() + "";
    var currentMonth = currentDate.getMonth() + 1 + "";
    var currentDays = currentDate.getDate() + "";
    return [currentYear, currentMonth, currentDays];
};
exports.getFormatDate = function (dateString) {
    var date = dateString.split(" ")[0];
    var formatDate = date.split("-").slice(1);
    var formatMonth = formatDate[0], formatDays = formatDate[1];
    return formatMonth + "/" + formatDays;
};
exports.toIncreaseDecreaseNumber = function (num) {
    if (num < 0)
        num *= -1;
    return exports.toComma(num);
};
exports.toComma = function (num) {
    return num.toLocaleString("en-US");
};
exports.getSignNumber = function (num) {
    if (num === 0)
        return 0;
    return num > 0 ? 1 : -1;
};
exports.getRegionName = function (region) {
    return Region[region];
};
