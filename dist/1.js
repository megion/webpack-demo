webpackJsonp_name_([1,7,8],[
/* 0 */
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
]);
//# sourceMappingURL=1.js.map