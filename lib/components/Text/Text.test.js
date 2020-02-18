"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Text = require("./Text");

var _theme = require("../../theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('Text', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Text.Text, null, "Lorem ipsum")),
        getByText = _render.getByText;

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
  test('shoud have correctly style', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Text.Text, null, "Lorem ipsum")),
        getByText = _render2.getByText,
        rerender = _render2.rerender;

    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.body + ";\n    ");
    rerender(_react["default"].createElement(_Text.Text, {
      small: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.small + ";\n    ");
    rerender(_react["default"].createElement(_Text.Text, {
      caption: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-size: " + _theme.theme.typography.fontSize.small + ";\n    ");
    rerender(_react["default"].createElement(_Text.Text, {
      disabled: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      opacity: 0.25;\n    ");
    rerender(_react["default"].createElement(_Text.Text, {
      error: true
    }, "Lorem ipsum"));
    expect(getByText('Lorem ipsum')).toHaveStyle("\n      color: " + _theme.theme.palette.red[700] + ";\n    ");
  });
  test('shoud have bold style', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_Text.Text, {
      bold: true
    }, "Lorem ipsum")),
        getByText = _render3.getByText;

    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-weight: " + _theme.theme.typography.fontWeight.bold + ";\n    ");
  });
  test('shoud have italic style', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_Text.Text, {
      italic: true
    }, "Lorem ipsum")),
        getByText = _render4.getByText;

    expect(getByText('Lorem ipsum')).toHaveStyle("\n      font-style: italic;\n    ");
  });
});