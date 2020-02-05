"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Checkbox = require("./Checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('Checkbox', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Checkbox.Checkbox, {
      "data-testid": "checkbox"
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('checkbox')).toBeInTheDocument();
  });
  test('should be hidden checkbox element', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Checkbox.Checkbox, null)),
        container = _render2.container;

    expect(container.firstChild.querySelector('input')).not.toBeVisible();
  });
  test('should have label text', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_Checkbox.Checkbox, {
      label: "Lorem ipsum"
    })),
        getByText = _render3.getByText;

    expect(getByText('Lorem ipsum')).toHaveTextContent('Lorem ipsum');
  });
  test('should have checked style when is checked', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_Checkbox.Checkbox, null)),
        container = _render4.container,
        getByTestId = _render4.getByTestId;

    expect(getByTestId('checked-icon')).not.toBeVisible();

    _react2.fireEvent.click(container.firstChild);

    expect(container.firstChild.querySelector('input')).toBeChecked();
    expect(getByTestId('checked-icon')).toBeVisible();
  });
});