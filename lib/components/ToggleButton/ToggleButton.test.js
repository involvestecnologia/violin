"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _ToggleButton = require("./ToggleButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('ToggleButton', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_ToggleButton.ToggleButton, {
      name: "option"
    }, "Option 1")),
        getByTestId = _render.getByTestId;

    expect(getByTestId('wrapper')).toBeInTheDocument();
    expect(getByTestId('hidden-input')).toBeInTheDocument();
    expect(getByTestId('styled-button')).toBeInTheDocument();
  });
  test('should be hidden input', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_ToggleButton.ToggleButton, {
      name: "option"
    }, "Option 1")),
        getByTestId = _render2.getByTestId;

    expect(getByTestId('hidden-input')).not.toBeVisible();
  });
  test('should check hidden input when clicked', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_ToggleButton.ToggleButton, {
      name: "option"
    }, "Option 1")),
        getByTestId = _render3.getByTestId;

    expect(getByTestId('hidden-input')).not.toBeChecked();

    _react2.fireEvent.click(getByTestId('wrapper'));

    expect(getByTestId('hidden-input')).toBeChecked();

    _react2.fireEvent.click(getByTestId('wrapper'));

    expect(getByTestId('hidden-input')).toBeChecked();
  });
  test('should check and uncheck hidden input when clicked', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_ToggleButton.ToggleButton, {
      name: "option",
      multiple: true
    }, "Option 1")),
        getByTestId = _render4.getByTestId;

    expect(getByTestId('hidden-input')).not.toBeChecked();

    _react2.fireEvent.click(getByTestId('wrapper'));

    expect(getByTestId('hidden-input')).toBeChecked();

    _react2.fireEvent.click(getByTestId('wrapper'));

    expect(getByTestId('hidden-input')).not.toBeChecked();
  });
});