"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Dropdown = require("./Dropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);

var component = _react["default"].createElement("button", {
  "data-testid": "trigger",
  type: "button"
}, "Lirem Ipsum");

var content = _react["default"].createElement("p", {
  "data-testid": "content"
}, "Lorem ipsaum dolor sit amet");

describe('Dropdown', function () {
  test('should render trigger correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Dropdown.Dropdown, {
      trigger: component
    }, content)),
        getByTestId = _render.getByTestId;

    expect(getByTestId('trigger')).toBeInTheDocument();
  });
  test('shoud render content when trigger was clicked', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Dropdown.Dropdown, {
      trigger: component
    }, content)),
        queryByTestId = _render2.queryByTestId,
        container = _render2.container;

    expect(queryByTestId('content')).not.toBeInTheDocument();

    _react2.fireEvent.click(container.firstChild);

    expect(queryByTestId('content')).toBeInTheDocument();
  });
});