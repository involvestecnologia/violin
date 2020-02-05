"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledTools = require("styled-tools");

var _theme = require("../theme");

var switchPalette = function switchPalette(type) {
  if (type === void 0) {
    type = 'regular';
  }

  return {
    "default": (0, _styledTools.theme)("palette.default." + type, _theme.theme.palette["default"][type]),
    primary: (0, _styledTools.theme)("palette.primary." + type, _theme.theme.palette.primary[type]),
    accent: (0, _styledTools.theme)("palette.accent." + type, _theme.theme.palette.accent[type]),
    done: (0, _styledTools.theme)("palette.done." + type, _theme.theme.palette.done[type]),
    error: (0, _styledTools.theme)("palette.error." + type, _theme.theme.palette.error[type]),
    alert: (0, _styledTools.theme)("palette.alert." + type, _theme.theme.palette.alert[type]),
    progress: (0, _styledTools.theme)("palette.progress." + type, _theme.theme.palette.progress[type]),
    white: (0, _styledTools.theme)('palette.system.white', _theme.theme.palette.system.white)
  };
};

var _default = switchPalette;
exports["default"] = _default;