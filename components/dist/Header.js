"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var Header = function (_a) {
    var nation = _a.nation;
    return (React.createElement("div", { className: "text-center" },
        React.createElement("h1", { className: "text-5xl" },
            React.createElement(link_1["default"], { href: "#", as: "/" },
                React.createElement("a", null, "RealTime Covid-19")),
            React.createElement("br", null),
            React.createElement(link_1["default"], { href: "#", as: "/" },
                React.createElement("a", { className: "text-3xl" }, nation)))));
};
exports["default"] = Header;