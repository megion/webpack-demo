(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["demo-components"] = factory();
	else
		root["demo-components"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo-components.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/menu/index.js":
/*!**********************************!*\
  !*** ./components/menu/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./menu.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _minus = __webpack_require__(/*! ./minus.svg */ "./components/menu/minus.svg");

var _minus2 = _interopRequireDefault(_minus);

var _menu = __webpack_require__(/*! ./menu.jade */ "./components/menu/menu.jade");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var img = document.createElement('img');
img.src = _minus2.default;
document.body.appendChild(img);

var Menu = function Menu(options) {
  var _this = this;

  _classCallCheck(this, Menu);

  this.elem = document.createElement('div');
  this.elem.className = 'menu';

  this.elem.innerHTML = (0, _menu2.default)(options);

  this.titleElem = this.elem.querySelector('.title');

  this.titleElem.onclick = function () {
    return _this.elem.classList.toggle('open');
  };

  this.titleElem.onmousedown = function () {
    return false;
  };
};

exports.default = Menu;

/***/ }),

/***/ "./components/menu/menu.jade":
/*!***********************************!*\
  !*** ./components/menu/menu.jade ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (4:9)\nYou may need an appropriate loader to handle this file type.\n| span.title= title\n| ul.list.flag-icon-background.flag-icon-cn\n|   - each item in items\n|     li\n|       a(href=item.href)= item.text");

/***/ }),

/***/ "./components/menu/minus.svg":
/*!***********************************!*\
  !*** ./components/menu/minus.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type.\n| <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n| <svg width=\"36px\" height=\"36px\" viewBox=\"0 0 36 36\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n|     <!-- Generator: Sketch 3.4 (15588) - http://www.bohemiancoding.com/sketch -->");

/***/ }),

/***/ "./demo-components.js":
/*!****************************!*\
  !*** ./demo-components.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(/*! ./components/menu */ "./components/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pandaMenu = new _menu2.default({
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

document.body.appendChild(pandaMenu.elem);

/***/ })

/******/ });
});
//# sourceMappingURL=demo-components.js.map