"use strict";
// @see https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
// @see https://www.npmjs.com/package/xml-js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getStaticProps = void 0;
var react_1 = require("react");
var axios_1 = require("axios");
var env_1 = require("../env");
var Header_1 = require("../components/Header");
//  import Navbar from "../components/Navbar";
var Cases_1 = require("../components/Cases");
var Confirmed_1 = require("../components/Confirmed");
var RegionalTable_1 = require("../components/RegionalTable");
var Home = function (_a) {
    var domesticCovidData = _a.domesticCovidData, domesticRegionCovidData = _a.domesticRegionCovidData;
    var _b = react_1.useState(__spreadArrays(domesticCovidData.item)), casesCovidItem = _b[0], setCasesCovidItem = _b[1];
    var _c = react_1.useState(__spreadArrays(domesticCovidData.item)), confirmedCovidItem = _c[0], setConfirmedCovidItem = _c[1];
    var _d = react_1.useState(__spreadArrays(domesticRegionCovidData.item)), regionCovidItem = _d[0], setRegionCovidItem = _d[1];
    console.log(domesticCovidData, domesticRegionCovidData);
    return (react_1["default"].createElement("div", { className: "w-screen h-screen flex flex-col flex-1 bg-blue-100" },
        react_1["default"].createElement(Header_1["default"], { nation: "Korea" }),
        react_1["default"].createElement(Cases_1["default"], { covidItems: casesCovidItem }),
        react_1["default"].createElement(Confirmed_1["default"], { covidItems: confirmedCovidItem }),
        react_1["default"].createElement(RegionalTable_1["default"], { covidItems: regionCovidItem })));
};
function getStaticProps() {
    return __awaiter(this, void 0, void 0, function () {
        var domesticCovidBaseUrl, domesticCovidServiceKey, domesticCovidParams, domesticCovidPageNo, domesticCovidNumOfRows, domesticCovidStartCreateDt, DomesticCovidEndCreateDt, domesticRegionCovidBaseUrl, domesticRegionCovidServiceKey, domesticRegionCovidParams, domesticRegionCovidPageNo, domesticRegionCovidNumOfRows, domesticRegionCovidStartCreateDt, domesticRegionCovidEndCreateDt, _domesticCovidData, domesticCovidData, _domesticRegionCovidData, domesticRegionCovidData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    domesticCovidBaseUrl = env_1.DomesticCovidService.baseUrl, domesticCovidServiceKey = env_1.DomesticCovidService.serviceKey, domesticCovidParams = env_1.DomesticCovidService.params;
                    domesticCovidPageNo = domesticCovidParams.pageNo, domesticCovidNumOfRows = domesticCovidParams.numOfRows, domesticCovidStartCreateDt = domesticCovidParams.startCreateDt, DomesticCovidEndCreateDt = domesticCovidParams.endCreateDt;
                    domesticRegionCovidBaseUrl = env_1.DomesticRegionCovidService.baseUrl, domesticRegionCovidServiceKey = env_1.DomesticRegionCovidService.serviceKey, domesticRegionCovidParams = env_1.DomesticRegionCovidService.params;
                    domesticRegionCovidPageNo = domesticRegionCovidParams.pageNo, domesticRegionCovidNumOfRows = domesticRegionCovidParams.numOfRows, domesticRegionCovidStartCreateDt = domesticRegionCovidParams.startCreateDt, domesticRegionCovidEndCreateDt = domesticRegionCovidParams.endCreateDt;
                    return [4 /*yield*/, axios_1["default"].get(domesticCovidBaseUrl + "?serviceKey=" + domesticCovidServiceKey + "&pageNo=" + domesticCovidPageNo + "&numOfRows=" + domesticCovidNumOfRows + "&startCreateDt=" + domesticCovidStartCreateDt + "&endCreateDt=" + DomesticCovidEndCreateDt)];
                case 1:
                    _domesticCovidData = (_a.sent()).data;
                    return [4 /*yield*/, _domesticCovidData.response.body.items];
                case 2:
                    domesticCovidData = _a.sent();
                    return [4 /*yield*/, axios_1["default"].get(domesticRegionCovidBaseUrl + "?serviceKey=" + domesticRegionCovidServiceKey + "&pageNo=" + domesticRegionCovidPageNo + "&numOfRows=" + domesticRegionCovidNumOfRows + "&startCreateDt=" + domesticRegionCovidStartCreateDt + "&endCreateDt=" + domesticRegionCovidEndCreateDt)];
                case 3:
                    _domesticRegionCovidData = (_a.sent()).data;
                    return [4 /*yield*/, _domesticRegionCovidData.response.body.items];
                case 4:
                    domesticRegionCovidData = _a.sent();
                    return [2 /*return*/, {
                            props: {
                                domesticCovidData: domesticCovidData,
                                domesticRegionCovidData: domesticRegionCovidData
                            }
                        }];
            }
        });
    });
}
exports.getStaticProps = getStaticProps;
exports["default"] = Home;
