"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Coronavirus Covid-19 Virus Data \u2014 Global Data Dashboard"),
            React.createElement("meta", { name: "description", content: "Data visualisation of the Covid-19 Pandemic" }),
            React.createElement("meta", { charSet: "UTF-8" }),
            React.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            React.createElement("link", { rel: "icon", href: "../public/favicon.ico" }),
            React.createElement("meta", { property: "og:url", content: "" }),
            React.createElement("meta", { property: "og:type", content: "article" }),
            React.createElement("meta", { property: "og:title", content: "RealTime Covid-19" }),
            React.createElement("meta", { property: "og:description", content: "Visualisating the Covid-19 Information" }),
            React.createElement("meta", { property: "og:image", content: "" })),
        React.createElement("main", null, children)));
};
exports["default"] = Layout;
