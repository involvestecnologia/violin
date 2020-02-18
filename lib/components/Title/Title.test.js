"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Title = require("./Title");

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('Title', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Title.Title, null, "Lorem ipsum")),
        getByText = _render.getByText;

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
  test('should have style size correctly', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Title.Title, {
      size: "h1"
    }, "Title")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Title')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.h1 + ";\n    ");
    rerender(_react["default"].createElement(_Title.Title, {
      size: "h2"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.h2 + ";\n    ");
    rerender(_react["default"].createElement(_Title.Title, {
      size: "h3"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.h3 + ";\n    ");
    rerender(_react["default"].createElement(_Title.Title, {
      size: "h4"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.h4 + ";\n    ");
    rerender(_react["default"].createElement(_Title.Title, {
      size: "h5"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.h5 + ";\n    ");
    rerender(_react["default"].createElement(_Title.Title, {
      size: "h6"
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.h6 + ";\n    ");
  });
});