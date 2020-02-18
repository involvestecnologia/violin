"use strict";

exports.__esModule = true;
exports["default"] = _default;

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ownerDocument = function ownerDocument(node) {
  return node && node.ownerDocument || document;
};

function _default(componentOrElement) {
  // eslint-disable-next-line react/no-find-dom-node
  return ownerDocument(_reactDom["default"].findDOMNode(componentOrElement));
}