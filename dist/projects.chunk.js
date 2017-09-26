webpackJsonp([2],{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.Component = undefined;

var _Projects = __webpack_require__(275);

var _Projects2 = _interopRequireDefault(_Projects);

var _projects = __webpack_require__(277);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = exports.Component = _Projects2.default;
var reducer = exports.reducer = _projects2.default;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(114);

var _Projects = __webpack_require__(276);

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var home = _ref.home;
  return { home: home };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(_Projects2.default);

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_PureComponent) {
  _inherits(Projects, _PureComponent);

  function Projects() {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      // This will ensure that even if this state is not yet on the store, we'll not get
      // an undefined value, causing exceptions when trying to access any property
      var _props$home = this.props.home,
          home = _props$home === undefined ? {} : _props$home;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          null,
          "You can see the state being filled"
        ),
        _react2.default.createElement(
          "h2",
          null,
          "This is because new reducers are being added, and their ",
          _react2.default.createElement(
            "b",
            null,
            "initial state"
          ),
          ", being set "
        ),
        _react2.default.createElement(
          "div",
          { className: "m-t-sm" },
          _react2.default.createElement(
            "p",
            null,
            "You can even get data from other already loaded states"
          ),
          home.sampleData ? _react2.default.createElement(
            "span",
            null,
            "Like the data from \"home\" state: ",
            _react2.default.createElement(
              "b",
              null,
              home.sampleData
            )
          ) : _react2.default.createElement(
            "span",
            null,
            "Go back to the \"Home\" page and click on the button and then, come back here :)"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "small",
              null,
              "Just make sure the informations of other states be always optionals to you feature"
            )
          )
        )
      );
    }
  }]);

  return Projects;
}(_react.PureComponent);

exports.default = Projects;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = projectReducer;
function projectReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {}
  return state;
}

/***/ })

});
//# sourceMappingURL=projects.chunk.js.map