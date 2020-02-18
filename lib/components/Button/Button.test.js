"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
var contentButton = 'Lorem ipsum';
describe('Button', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Button.Button, null, contentButton)),
        getByText = _render.getByText;

    expect(getByText(contentButton)).toBeInTheDocument();
  });
  test('should render icon element', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Button.Button, {
      icon: "games"
    })),
        getByText = _render2.getByText;

    var iconContent = getByText('games');
    expect(iconContent).toBeVisible();
  });
  test('should have block style', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_Button.Button, null, contentButton)),
        getByText = _render3.getByText,
        rerender = _render3.rerender;

    expect(getByText(contentButton)).toHaveStyle("\n      width: auto;\n    ");
    rerender(_react["default"].createElement(_Button.Button, {
      block: true
    }, contentButton));
    expect(getByText(contentButton)).toHaveStyle("\n      width: 100%;\n    ");
  });
});