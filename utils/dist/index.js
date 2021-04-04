"use strict";
exports.__esModule = true;
exports.toComma = exports.toIncreaseDecrease = exports.getFormatDate = exports.getDate = exports.requestFormatDate = void 0;
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
exports.toIncreaseDecrease = function (num) {
    var sign = "";
    if (num > 0)
        sign = "+";
    return sign + exports.toComma(num);
};
exports.toComma = function (num) {
    return num.toLocaleString("en-US");
};
