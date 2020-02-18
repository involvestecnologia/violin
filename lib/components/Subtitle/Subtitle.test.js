"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Subtitle = require("./Subtitle");

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('Subtitle', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Subtitle.Subtitle, null, "Subtitle")),
        getByText = _render.getByText;

    expect(getByText('Subtitle')).toBeInTheDocument();
  });
  test('should have style size correctly', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Subtitle.Subtitle, null, "Subtitle")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Subtitle')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.large + ";\n    ");
    rerender(_react["default"].createElement(_Subtitle.Subtitle, {
      small: true
    }, "Subtitle"));
    expect(getByText('Subtitle')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.body + ";\n    ");
    rerender(_react["default"].createElement(_Subtitle.Subtitle, {
      overline: true
    }, "Subtitle"));
    expect(getByText('Subtitle')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.xsmall + ";\n    ");
  });
});