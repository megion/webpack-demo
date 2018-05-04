(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[3],{

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

var _minus = __webpack_require__(/*! ../styles/img/minus.svg */ "./components/styles/img/minus.svg");

var _minus2 = _interopRequireDefault(_minus);

var _menu = __webpack_require__(/*! ./menu.handlebars */ "./components/menu/menu.handlebars");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function Menu(options) {
    var _this = this;

    _classCallCheck(this, Menu);

    this.container = document.createElement('div');

    var img = document.createElement('img');
    img.src = _minus2.default;
    this.container.appendChild(img);

    this.elem = document.createElement('div');
    this.elem.className = 'menu';
    this.container.appendChild(this.elem);

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

/***/ "./components/menu/menu.handlebars":
/*!*****************************************!*\
  !*** ./components/menu/menu.handlebars ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li>\n            <a href=\""
    + alias2(alias1((depth0 != null ? depth0.href : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.text : depth0), depth0))
    + "</a>\n        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<span class=\"title\">\n    "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n</span>\n\n<ul class=\"list flag-icon-background flag-icon-cn\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});

/***/ }),

/***/ "./components/styles/img/minus.svg":
/*!*****************************************!*\
  !*** ./components/styles/img/minus.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/styles/img/minus.svg";

/***/ })

}]);
//# sourceMappingURL=3.js.map