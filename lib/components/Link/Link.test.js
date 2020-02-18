"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Link = require("./Link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
var contentButton = 'Click';
describe('Link', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Link.Link, {
      href: "http://involves.com"
    }, contentButton)),
        getByText = _render.getByText;

    expect(getByText(contentButton)).toBeInTheDocument();
  });
  test('should have style correctly', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Link.Link, {
      href: "http://involves.com"
    }, contentButton)),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText(contentButton)).toHaveStyle("\n      text-decoration: none;\n    ");
    rerender(_react["default"].createElement(_Link.Link, {
      href: "http://involves.com",
      invert: true
    }, contentButton));
    expect(getByText(contentButton)).toHaveStyle("\n      text-decoration: underline;\n    ");
  });
});