"use strict";

exports.__esModule = true;
exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle,
      actions = _ref.actions;
  return _react["default"].createElement(_style.CardWrapper, null, (title || subTitle || actions) && _react["default"].createElement(_style.CardHeader, null, (title || subTitle) && _react["default"].createElement(_style.CardTitles, null, title && _react["default"].createElement(_style.CardTitle, {
    title: title,
    size: "h6"
  }, title), subTitle && _react["default"].createElement(_style.CardSubTitle, {
    title: subTitle,
    overline: true
  }, subTitle)), actions && _react["default"].createElement(_style.CardActions, null, actions)), _react["default"].createElement(_style.CardContent, null, children));
};

exports.Card = Card;
Card.propTypes = {
  /** Apply card title */
  title: _propTypes["default"].string,

  /** Apply card subtitle */
  subTitle: _propTypes["default"].string,

  /** Apply card actions, like a button or a set of buttons */
  actions: _propTypes["default"].element
};
Card.defaultProps = {
  title: null,
  subTitle: null,
  actions: null
};