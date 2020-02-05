"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _Card = require("./Card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

afterEach(_react2.cleanup);
var contentCard = 'Lorem ipsum';
describe('Card', function () {
  test('should render correctly', function () {
    var _render = (0, _react2.render)(_react["default"].createElement(_Card.Card, null, contentCard)),
        getByText = _render.getByText;

    expect(getByText(contentCard)).toBeInTheDocument();
  });
  test('should render actions elements', function () {
    var _render2 = (0, _react2.render)(_react["default"].createElement(_Card.Card, {
      actions: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
        key: 1
      }, "action 1"), _react["default"].createElement("span", {
        key: 2
      }, "action 2"))
    }, contentCard)),
        getByText = _render2.getByText;

    expect(getByText('action 1')).toBeInTheDocument();
    expect(getByText('action 2')).toBeInTheDocument();
  });
  test('should render title and subTitle', function () {
    var title = 'Title';
    var subTitle = 'Sub Title';

    var _render3 = (0, _react2.render)(_react["default"].createElement(_Card.Card, {
      title: title,
      subTitle: subTitle
    }, contentCard)),
        getByText = _render3.getByText;

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subTitle)).toBeInTheDocument();
  });
  test('should have block style', function () {
    var _render4 = (0, _react2.render)(_react["default"].createElement(_Card.Card, null, contentCard)),
        getByText = _render4.getByText;

    expect(getByText(contentCard)).toHaveStyle("\n      display: block;\n    ");
  });
});