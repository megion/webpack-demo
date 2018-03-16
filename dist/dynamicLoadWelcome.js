(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dynamicLoadWelcome"] = factory();
	else
		root["dynamicLoadWelcome"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonp_name_([3],{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getWelcomeMessageDynamical(message) {
    __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(0)]; ((function (welcome) {
        welcome.getWelcomeMessage(message);
    }).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe);
};

console.log("init dynamic load welcome module");

exports.getWelcomeMessageDynamical = getWelcomeMessageDynamical;

/***/ })

},[5]);
});
//# sourceMappingURL=dynamicLoadWelcome.js.map