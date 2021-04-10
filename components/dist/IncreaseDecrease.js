"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var IncreaseDecreaseIcon_1 = require("./IncreaseDecreaseIcon");
var IncreaseDecrease = function (_a) {
    var increaseDecreaseNumber = _a.increaseDecreaseNumber, _b = _a.hasTextColor, hasTextColor = _b === void 0 ? true : _b;
    var signNumber = utils_1.getSignNumber(increaseDecreaseNumber);
    return (React.createElement("div", { className: "text-xs leading-2 tracking-wide rounded-full py-1 px-2 bg-blue-100 font-semibold text-color", style: hasTextColor ? {} : { color: "" + (signNumber === 1 ? "red" : signNumber === -1 ? "blue" : "black") } },
        React.createElement(IncreaseDecreaseIcon_1["default"], { increaseDecreaseNumber: increaseDecreaseNumber }),
        " ",
        utils_1.toIncreaseDecreaseNumber(increaseDecreaseNumber)));
};
exports["default"] = IncreaseDecrease;
