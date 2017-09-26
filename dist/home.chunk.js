webpackJsonp([0],{

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.Component = undefined;

var _Home = __webpack_require__(271);

var _Home2 = _interopRequireDefault(_Home);

var _home = __webpack_require__(274);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = exports.Component = _Home2.default;
var reducer = exports.reducer = _home2.default;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION_SAMPLE = exports.ACTION_SAMPLE = 'ACTION_SAMPLE';

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(114);

var _Home = __webpack_require__(272);

var _Home2 = _interopRequireDefault(_Home);

var _sample = __webpack_require__(273);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var home = _ref.home;
  return { home: home };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    sampleAction: function sampleAction(someData) {
      return dispatch((0, _sample.sample)(someData));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Home2.default);

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var sampleAction = _ref.sampleAction,
      sampleData = _ref.home.sampleData;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Before click in any link or button, open the react devtools in your browser"
    ),
    _react2.default.createElement(
      "h2",
      null,
      "And check state"
    ),
    _react2.default.createElement(
      "button",
      { onClick: function onClick() {
          return sampleAction("I'm a lazy action...");
        } },
      "Click here to see the action being trigerred!"
    ),
    sampleData ? _react2.default.createElement(
      "div",
      { className: "m-t-sm" },
      "And the action set this on the store: ",
      _react2.default.createElement(
        "b",
        null,
        "\"",
        sampleData,
        "\""
      )
    ) : null
  );
};

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = undefined;

var _index = __webpack_require__(270);

var sample = exports.sample = function sample(someData) {
  return { type: _index.ACTION_SAMPLE, payload: someData };
};

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = homeReducer;

var _index = __webpack_require__(270);

function homeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _index.ACTION_SAMPLE:
      return _extends({}, state, { sampleData: action.payload });
  }
  return state;
}

/***/ })

});
//# sourceMappingURL=home.chunk.js.map