"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var IncreaseDecrease_1 = require("./IncreaseDecrease");
var OverseasRegionItem = function (_a) {
    var region = _a.region, confirmed = _a.confirmed, confirmedIncreaseDecrease = _a.confirmedIncreaseDecrease, deaths = _a.deaths, deathsIncreaseDecrease = _a.deathsIncreaseDecrease;
    return (React.createElement("div", { className: "w-full h-full bg-blue-50 flex justify-evenly shadow-lg rounded-md text-xs leading-2 tracking-wide font-semibold" },
        React.createElement("div", { className: "w-1/3 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" }, region),
        React.createElement("div", { className: "w-1/3 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" },
            utils_1.toComma(confirmed),
            React.createElement("div", { className: "inline-block bg-blue-100 rounded-full py-1/4 px-1/2 ml-3", style: confirmedIncreaseDecrease === 0 ? { display: "none" } : {} },
                React.createElement(IncreaseDecrease_1["default"], { increaseDecreaseNumber: confirmedIncreaseDecrease, hasTextColor: false }))),
        React.createElement("div", { className: "w-1/3 h-12 bg-blue-50 flex justify-center items-center shadow-lg rounded-md" },
            utils_1.toComma(deaths),
            React.createElement("div", { className: "inline-block bg-blue-100 rounded-full py-1/4 px-1/2 ml-3", style: deathsIncreaseDecrease <= 0 ? { display: "none" } : {} },
                React.createElement(IncreaseDecrease_1["default"], { increaseDecreaseNumber: deathsIncreaseDecrease, hasTextColor: false })))));
};
exports["default"] = OverseasRegionItem;
