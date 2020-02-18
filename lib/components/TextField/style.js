"use strict";

exports.__esModule = true;
exports.Input = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  height: ", ";\n  box-sizing: border-box;\n  border: none;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 0 ", ";\n  outline: none;\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  box-shadow: 0 0 0 transparent;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 0 0 2px ", ";\n  background-color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var errorStyle = (0, _styledComponents.css)(_templateObject(), (0, _getFromTheme["default"])('palette.red.600'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.red.100'), (0, _polished.transparentize)(0.2)), (0, _getFromTheme["default"])('palette.red.600'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.red.100'), (0, _polished.transparentize)(0.2)));

var Input = _styledComponents["default"].input(_templateObject2(), (0, _styledTools.ifProp)('small', '30px', (0, _styledTools.ifProp)('large', '52px', '40px')), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.primary.900'), (0, _polished.transparentize)(0.9)), (0, _styledTools.ifProp)('large', '16px', '10px'), (0, _getFromTheme["default"])('common.transition'), (0, _getFromTheme["default"])('typography.fontFamily'), (0, _styledTools.ifProp)('large', (0, _getFromTheme["default"])('typography.fontSize.subtitle'), (0, _styledTools.ifProp)('small', (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _getFromTheme["default"])('typography.fontSize.body'))), (0, _getFromTheme["default"])('palette.black.900'), (0, _getFromTheme["default"])('palette.black.500'), (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.96)), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.75)), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.500'), (0, _polished.transparentize)(0.75)), function (props) {
  return props.error && errorStyle;
});

exports.Input = Input;