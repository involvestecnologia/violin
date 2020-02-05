"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _RadioButton = require("./RadioButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('RadioButton', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_RadioButton.RadioButton, {
      "data-testid": "radio"
    })),
        getByTestId = _render.getByTestId;

    expect(getByTestId('radio')).toBeInTheDocument();
  });
  test('should be hidden radio element', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_RadioButton.RadioButton, null)),
        container = _render2.container;

    expect(container.firstChild.querySelector('input')).not.toBeVisible();
  });
  test('should have label text', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_RadioButton.RadioButton, {
      label: "Lorem ipsum"
    })),
        getByText = _render3.getByText;

    expect(getByText('Lorem ipsum')).toHaveTextContent('Lorem ipsum');
  });
  test('should have checked style when is checked', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_RadioButton.RadioButton, null)),
        container = _render4.container,
        getByTestId = _render4.getByTestId;

    expect(getByTestId('checked-circle')).not.toBeVisible();

    _react2.fireEvent.click(container.firstChild);

    expect(container.querySelector('input')).toBeChecked();
  });
});