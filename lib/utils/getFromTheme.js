"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledTools = require("styled-tools");

var _theme = require("../theme");

var _default = function _default(path) {
  var defaultThemePath = path.split('.').reduce(function (_, x) {
    return _[x];
  }, _theme.theme);
  return (0, _styledTools.theme)(path, defaultThemePath);
};

exports["default"] = _default;