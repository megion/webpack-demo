(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibHome"] = factory();
	else
		root["MyLibHome"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpMyLibHome([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.libFn = undefined;

var _welcome = __webpack_require__(1);

var welcome = _interopRequireWildcard(_welcome);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

welcome.welcomeFunc("home merged");

function libFn(value) {
    welcome.welcomeFunc(value);
}

exports.libFn = libFn;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function welcomeFunc(message) {

    //if (NODE_ENV == 'development') {
    //console.log(message);
    //}

    //alert(`Welcome ${message}`);

    debugger;
    console.log(`Welcome ${message} user merged`);
};

exports.welcomeFunc = welcomeFunc;

/***/ })
],[0]);
});