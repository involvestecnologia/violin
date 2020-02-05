"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Icon = require("./Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('Icon', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Icon.Icon, {
      "data-testid": "icon",
      icon: "favorite"
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('icon')).toBeInTheDocument();
  });
  test('should render icon correctly', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Icon.Icon, {
      "data-testid": "icon",
      icon: "favorite"
    })),
        getByTestId = _render2.getByTestId;

    expect(getByTestId('icon')).toHaveTextContent('favorite');
  });
});