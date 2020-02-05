"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Subheading = require("./Subheading");

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('Subheading', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Subheading.Subheading, null, "Subheading")),
        getByText = _render.getByText;

    expect(getByText('Subheading')).toBeInTheDocument();
  });
  test('should have style size correctly', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Subheading.Subheading, null, "Subheading")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Subheading')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.large + ";\n    ");
    rerender(_react["default"].createElement(_Subheading.Subheading, {
      small: true
    }, "Subheading"));
    expect(getByText('Subheading')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.body + ";\n    ");
    rerender(_react["default"].createElement(_Subheading.Subheading, {
      overline: true
    }, "Subheading"));
    expect(getByText('Subheading')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.xsmall + ";\n    ");
  });
});