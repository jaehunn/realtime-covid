"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var Navbar = function () {
    return (React.createElement("div", { className: "fixed flex flex-col justify-between top-2/4 left-full transform -translate-x-full" },
        React.createElement(link_1["default"], { href: "/" },
            React.createElement("a", null, "Domestic")),
        React.createElement(link_1["default"], { href: "/overseas" },
            React.createElement("a", null, "Overseas"))));
};
exports["default"] = Navbar;
