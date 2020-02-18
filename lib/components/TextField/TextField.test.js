"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _TextField = require("./TextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
var placeholder = 'Lorem ipsum';
describe('TextField', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_TextField.TextField, {
      placeholder: placeholder
    })),
        getByPlaceholderText = _render.getByPlaceholderText;

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
  test('should have correctly type', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_TextField.TextField, {
      type: "number",
      placeholder: placeholder
    })),
        getByPlaceholderText = _render2.getByPlaceholderText,
        rerender = _render2.rerender;

    expect(getByPlaceholderText(placeholder).type).toBe('number');
    rerender(_react["default"].createElement(_TextField.TextField, {
      type: "email",
      placeholder: placeholder
    }));
    expect(getByPlaceholderText(placeholder).type).toBe('email');
  });
  test('should be disabled', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_TextField.TextField, {
      placeholder: placeholder,
      disabled: true
    })),
        getByPlaceholderText = _render3.getByPlaceholderText;

    expect(getByPlaceholderText(placeholder)).toBeDisabled();
  });
  test('should have size style correctly', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_TextField.TextField, {
      placeholder: placeholder,
      small: true
    })),
        getByPlaceholderText = _render4.getByPlaceholderText,
        rerender = _render4.rerender;

    expect(getByPlaceholderText(placeholder)).toHaveStyle("\n      height: 30px;\n    ");
    rerender(_react["default"].createElement(_TextField.TextField, {
      placeholder: placeholder,
      large: true
    }));
    expect(getByPlaceholderText(placeholder)).toHaveStyle("\n      height: 52px;\n    ");
  });
});