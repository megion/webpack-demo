(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[1],{

/***/ "./about2.js":
/*!*******************!*\
  !*** ./about2.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAboutWelcome = undefined;

var _welcome = __webpack_require__(/*! ./welcome */ "./welcome.js");

var welcome = _interopRequireWildcard(_welcome);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getAboutWelcome() {
    return welcome.getWelcomeMessage("you are in about2");
}

console.log("init about2 module");

exports.getAboutWelcome = getAboutWelcome;

/***/ }),

/***/ "./welcome.js":
/*!********************!*\
  !*** ./welcome.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getWelcomeMessage(message) {

    //if (NODE_ENV == 'development') {
    //console.log(message);
    //}

    //alert(`Welcome ${message}`);

    //debugger;
    var msg = "Welcome " + message;
    console.log("welcom module: " + msg);
    return msg;
};

console.log("init welcome module");

exports.getWelcomeMessage = getWelcomeMessage;

/***/ })

}]);
//# sourceMappingURL=1.js.map