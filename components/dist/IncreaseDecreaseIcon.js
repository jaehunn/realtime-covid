"use strict";
exports.__esModule = true;
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var react_1 = require("react");
var utils_1 = require("../utils");
var IncreaseDecreaseIcon = function (_a) {
    var increaseDecreaseNumber = _a.increaseDecreaseNumber;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, utils_1.getSignNumber(increaseDecreaseNumber) === 1 ? (react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowUp })) : utils_1.getSignNumber(increaseDecreaseNumber) === -1 ? (react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowDown })) : (react_1["default"].createElement(react_1["default"].Fragment, null))));
};
exports["default"] = IncreaseDecreaseIcon;
