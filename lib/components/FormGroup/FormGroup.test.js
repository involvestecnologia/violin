"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _FormGroup = require("./FormGroup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
describe('FormGroup', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_FormGroup.FormGroup, null)),
        getByTestId = _render.getByTestId;

    expect(getByTestId('wrapper')).toBeInTheDocument();
  });
  test('should display label if has prop', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_FormGroup.FormGroup, null)),
        queryByTestId = _render2.queryByTestId,
        getByTestId = _render2.getByTestId,
        rerender = _render2.rerender;

    expect(queryByTestId('label-text')).toBeNull();
    rerender(_react["default"].createElement(_FormGroup.FormGroup, {
      label: "Lorem ipsum"
    }));
    expect(getByTestId('label-text')).toBeInTheDocument();
    expect(getByTestId('label-text')).toHaveTextContent('Lorem ipsum');
  });
  test('should display help label text if has prop', function () {
    var _render3 = (0, _react2.render)(_react["default"].createElement(_FormGroup.FormGroup, null)),
        queryByTestId = _render3.queryByTestId,
        getByTestId = _render3.getByTestId,
        rerender = _render3.rerender;

    expect(queryByTestId('help-label')).toBeNull();
    rerender(_react["default"].createElement(_FormGroup.FormGroup, {
      helpLabel: "Lorem ipsum"
    }));
    expect(getByTestId('help-label')).toBeInTheDocument();
    expect(getByTestId('help-label')).toHaveTextContent('Lorem ipsum');
  });
  test('should display info icon with tooltip', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_FormGroup.FormGroup, null)),
        queryByTestId = _render4.queryByTestId,
        getByTestId = _render4.getByTestId,
        rerender = _render4.rerender;

    expect(queryByTestId('trigger')).toBeNull();
    rerender(_react["default"].createElement(_FormGroup.FormGroup, {
      tooltip: "Lorem ipsum"
    }));
    expect(getByTestId('trigger')).toBeInTheDocument();
  });
  test('should display content children', function () {
    var _render5 = (0, _react2.render)(_react["default"].createElement(_FormGroup.FormGroup, null, "This is a content")),
        getByText = _render5.getByText;

    expect(getByText('This is a content')).toBeInTheDocument();
  });
  test('should display help text if has prop', function () {
    var _render6 = (0, _react2.render)(_react["default"].createElement(_FormGroup.FormGroup, null)),
        queryByTestId = _render6.queryByTestId,
        getByTestId = _render6.getByTestId,
        rerender = _render6.rerender;

    expect(queryByTestId('help-text')).toBeNull();
    rerender(_react["default"].createElement(_FormGroup.FormGroup, {
      helpText: "Lorem ipsum"
    }));
    expect(getByTestId('help-text')).toBeInTheDocument();
    expect(getByTestId('help-text')).toHaveTextContent('Lorem ipsum');
  });
});