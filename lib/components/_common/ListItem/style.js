"use strict";

exports.__esModule = true;
exports.StyledIcon = exports.StyledItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _styledTools = require("styled-tools");

var _Icon = require("../../Icon");

var _getFromTheme = _interopRequireDefault(require("../../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-right: 10px;\n  font-size: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: 300px;\n  padding: 12px 16px;\n  font-size: ", ";\n  color: ", ";\n  text-decoration: none;\n  cursor: ", ";\n  opacity: ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledItem = _styledComponents["default"].div(_templateObject(), (0, _getFromTheme["default"])('typography.fontSize.body'), (0, _getFromTheme["default"])('palette.black.900'), (0, _styledTools.ifProp)('disabled', 'not-allowed', 'pointer'), (0, _styledTools.ifProp)('disabled', '0.2', '1'), (0, _styledTools.ifProp)('disabled', 'none', (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.92))));

exports.StyledItem = StyledItem;
var StyledIcon = (0, _styledComponents["default"])(_Icon.Icon)(_templateObject2(), (0, _polished.rem)(24), (0, _getFromTheme["default"])('palette.black.600'));
exports.StyledIcon = StyledIcon;