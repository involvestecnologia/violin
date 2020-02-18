"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var offsetElementPosition = function offsetElementPosition(element) {
  var rect = element.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    width: rect.width,
    height: rect.height,
    right: rect.right + scrollLeft,
    bottom: rect.bottom + scrollTop
  };
};

var _default = offsetElementPosition;
exports["default"] = _default;