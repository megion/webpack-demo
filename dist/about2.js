(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["about2"] = factory();
	else
		root["about2"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonp_name_([4],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAboutWelcome = undefined;

var _welcome = __webpack_require__(0);

var welcome = _interopRequireWildcard(_welcome);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getAboutWelcome() {
    return welcome.getWelcomeMessage("you are in about2");
}

console.log("init about2 module");

exports.getAboutWelcome = getAboutWelcome;

/***/ })

},[4]);
});
//# sourceMappingURL=about2.js.map