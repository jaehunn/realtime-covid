"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var RegionItem = function (_a) {
    var region = _a.region, todayConfirmed = _a.todayConfirmed, todayIncreaseDecrease = _a.todayIncreaseDecrease, confirmed = _a.confirmed, increaseDecrease = _a.increaseDecrease, deaths = _a.deaths, recovered = _a.recovered;
    return (React.createElement("div", { className: "w-full h-full bg-blue-50 flex justify-evenly shadow-lg rounded-md text-xs leading-2 tracking-wide font-semibold" },
        React.createElement("div", { className: "w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" }, region),
        React.createElement("div", { className: "w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" },
            utils_1.toComma(todayConfirmed),
            " ",
            React.createElement("span", { className: "inline-block bg-blue-100 rounded-full py-1 px-2 ml-3" }, utils_1.toIncreaseDecrease(todayIncreaseDecrease))),
        React.createElement("div", { className: "w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" },
            utils_1.toComma(confirmed),
            " ",
            React.createElement("span", { className: "inline-block bg-blue-100 rounded-full py-1 px-2 ml-3" }, utils_1.toIncreaseDecrease(increaseDecrease))),
        React.createElement("div", { className: "w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" }, utils_1.toComma(deaths)),
        React.createElement("div", { className: "w-1/5 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" }, utils_1.toComma(recovered))));
};
exports["default"] = RegionItem;