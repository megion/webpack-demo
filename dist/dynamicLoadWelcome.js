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
return webpackJsonp_name_([2],{

/***/ 5:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: 'import' and 'export' may only appear at the top level (7:4)\n\n\u001b[0m \u001b[90m  5 | \u001b[39m        \u001b[90m//welcome.getWelcomeMessage(message);\u001b[39m\n \u001b[90m  6 | \u001b[39m    \u001b[90m//});\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m    \u001b[36mimport\u001b[39m(\u001b[32m'./welcome'\u001b[39m)\u001b[33m.\u001b[39mthen(\u001b[36mfunction\u001b[39m(welcome) {\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  8 | \u001b[39m        \u001b[36mreturn\u001b[39m welcome\u001b[33m.\u001b[39mgetWelcomeMessage(message)\u001b[33m;\u001b[39m\n \u001b[90m  9 | \u001b[39m    })\u001b[33m;\u001b[39m\n \u001b[90m 10 | \u001b[39m}\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ })

},[5]);
});
//# sourceMappingURL=dynamicLoadWelcome.js.map