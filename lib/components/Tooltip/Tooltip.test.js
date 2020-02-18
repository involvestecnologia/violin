"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _testUtils = require("react-dom/test-utils");

var _Tooltip = require("./Tooltip");

var _TextField = require("../TextField");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
jest.useFakeTimers();
describe('Tooltip', function () {
  test('children should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Lorem ipsum"
    }, _react["default"].createElement("span", null, "Trigger"))),
        getByTestId = _render.getByTestId;

    expect(getByTestId('trigger')).toBeInTheDocument();
  });
  test('should render when mouse enter', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Lorem ipsum"
    }, _react["default"].createElement("span", null, "Trigger"))),
        getByTestId = _render2.getByTestId;

    (0, _testUtils.act)(function () {
      _react2.fireEvent.mouseOver(getByTestId('trigger'));

      jest.advanceTimersByTime(100);
    });
    expect(getByTestId('balloon')).toBeInTheDocument();
    expect(getByTestId('balloon')).toContainElement(getByTestId('balloon'));
  });
  test('should render when trigger has focus', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_Tooltip.Tooltip, {
      content: "Lorem ipsum"
    }, _react["default"].createElement(_TextField.TextField, null))),
        getByTestId = _render3.getByTestId;

    (0, _testUtils.act)(function () {
      _react2.fireEvent.focus(getByTestId('trigger'));

      jest.advanceTimersByTime(100);
    });
    expect(getByTestId('balloon')).toBeInTheDocument();
    expect(getByTestId('balloon')).toContainElement(getByTestId('balloon'));
  });
});