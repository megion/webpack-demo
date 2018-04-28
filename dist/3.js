(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([[3],{

/***/ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./components/menu/menu.less":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/less-loader/dist/cjs.js!./components/menu/menu.less ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!flag-icon-css/css/flag-icon.css */ "../node_modules/css-loader/index.js!../node_modules/flag-icon-css/css/flag-icon.css"), "");

// module
exports.push([module.i, "/* import presessed by less */\n/* import presessed by webpack */\n.plus,\n.menu .title {\n  background: url(" + escape(__webpack_require__(/*! ../img/plus.svg */ "./components/img/plus.svg")) + ");\n}\n.minus,\n.menu.open .title {\n  background-image: url(" + escape(__webpack_require__(/*! ../img/minus.svg */ "./components/img/minus.svg")) + ");\n}\n.menu .title {\n  background-position: left 1px;\n  background-repeat: no-repeat;\n  padding: 0 6px 0 16px;\n  background-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.menu .list {\n  display: none;\n  margin: 0;\n}\n.menu .list a {\n  color: blue;\n}\n.menu.open .list {\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./components/img/minus.svg":
/*!**********************************!*\
  !*** ./components/img/minus.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/img/minus.svg";

/***/ }),

/***/ "./components/img/plus.svg":
/*!*********************************!*\
  !*** ./components/img/plus.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/img/plus.svg";

/***/ }),

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

var _menu = __webpack_require__(/*! ./menu.less */ "./components/menu/menu.less");

var _menu2 = _interopRequireDefault(_menu);

var _minus = __webpack_require__(/*! ../img/minus.svg */ "./components/img/minus.svg");

var _minus2 = _interopRequireDefault(_minus);

var _menu3 = __webpack_require__(/*! ./menu.handlebars */ "./components/menu/menu.handlebars");

var _menu4 = _interopRequireDefault(_menu3);

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

    this.elem.innerHTML = (0, _menu4.default)(options);

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

/***/ "./components/menu/menu.less":
/*!***********************************!*\
  !*** ./components/menu/menu.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./menu.less */ "../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./components/menu/menu.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=3.js.map