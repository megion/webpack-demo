(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["demoComponents"] = factory();
	else
		root["demoComponents"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demoComponents": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo-components.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/styles/index.less":
/*!**************************************!*\
  !*** ./components/styles/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: window is not defined\n    at /home/ilya/workspaces/nodejs/webpack-demo/node_modules/style-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/css-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/less-loader/dist/cjs.js!/home/ilya/workspaces/nodejs/webpack-demo/src/components/styles/index.less:5920:2\n    at /home/ilya/workspaces/nodejs/webpack-demo/node_modules/style-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/css-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/less-loader/dist/cjs.js!/home/ilya/workspaces/nodejs/webpack-demo/src/components/styles/index.less:5909:46\n    at module.exports.../node_modules/style-loader/lib/addStyles.js.module.exports (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/style-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/css-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/less-loader/dist/cjs.js!/home/ilya/workspaces/nodejs/webpack-demo/src/components/styles/index.less:5974:88)\n    at Object.../node_modules/style-loader/index.js!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./components/styles/index.less (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/style-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/css-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/less-loader/dist/cjs.js!/home/ilya/workspaces/nodejs/webpack-demo/src/components/styles/index.less:5883:141)\n    at __webpack_require__ (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/style-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/css-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/less-loader/dist/cjs.js!/home/ilya/workspaces/nodejs/webpack-demo/src/components/styles/index.less:21:30)\n    at /home/ilya/workspaces/nodejs/webpack-demo/node_modules/style-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/css-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/less-loader/dist/cjs.js!/home/ilya/workspaces/nodejs/webpack-demo/src/components/styles/index.less:70:18\n    at Object.<anonymous> (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/style-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/css-loader/index.js!/home/ilya/workspaces/nodejs/webpack-demo/node_modules/less-loader/dist/cjs.js!/home/ilya/workspaces/nodejs/webpack-demo/src/components/styles/index.less:73:10)\n    at Module._compile (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\n    at Object.exec (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/NormalModule.js:164:12)\n    at childCompiler.runAsChild (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/extract-text-webpack-plugin/dist/loader.js:140:25)\n    at compile (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compiler.js:242:11)\n    at hooks.afterCompile.callAsync.err (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compiler.js:487:14)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:24:1)\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/Hook.js:35:21)\n    at compilation.seal.err (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compiler.js:484:30)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/Hook.js:35:21)\n    at hooks.optimizeAssets.callAsync.err (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compilation.js:966:35)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/Hook.js:35:21)\n    at hooks.optimizeChunkAssets.callAsync.err (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compilation.js:957:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/Hook.js:35:21)\n    at hooks.additionalAssets.callAsync.err (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compilation.js:952:36)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/Hook.js:35:21)\n    at hooks.optimizeTree.callAsync.err (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compilation.js:948:32)\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)\n    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/tapable/lib/Hook.js:35:21)\n    at Compilation.seal (/home/ilya/workspaces/nodejs/webpack-demo/node_modules/webpack/lib/Compilation.js:890:27)");

/***/ }),

/***/ "./demo-components.js":
/*!****************************!*\
  !*** ./demo-components.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadMenu = undefined;

var _index = __webpack_require__(/*! ./components/styles/index.less */ "./components/styles/index.less");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Menu from './components/menu';

//let pandaMenu = new Menu({
//title: "Меню панды",
//items: [{
//text: 'Яйца',
//href: '#eggs'
//}, {
//text: 'Мясо',
//href: '#meat'
//}, {
//text: '99% еды - бамбук!',
//href: '#bamboo'
//}]
//});

//document.addEventListener("DOMContentLoaded", function() {
//document.body.appendChild(pandaMenu.container);
//});

/**
 * load menu dynamical
 */
function loadMenu() {
    Promise.all(/*! import() */[__webpack_require__.e(7), __webpack_require__.e(3)]).then(function() { var module = __webpack_require__(/*! ./components/menu */ "./components/menu/index.js"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); }).then(function (menuModule) {
        var Menu = menuModule.default;
        var pandaMenu = new Menu({
            title: "Меню панды",
            items: [{
                text: 'Яйца',
                href: '#eggs'
            }, {
                text: 'Мясо',
                href: '#meat'
            }, {
                text: '99% еды - бамбук!',
                href: '#bamboo'
            }]
        });

        document.body.appendChild(pandaMenu.container);
    });
};

exports.loadMenu = loadMenu;

/***/ })

/******/ });
});
//# sourceMappingURL=demoComponents.js.map