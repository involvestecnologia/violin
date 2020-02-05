"use strict";

exports.__esModule = true;
exports.StyledIcon = exports.StyledButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _Icon = require("../Icon");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-right: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  padding: 0 ", ";\n  outline: none;\n  font-family: ", ";\n  font-weight: ", ";\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 4px;\n  transition: ", ";\n  height: ", ";\n  font-size: ", ";\n  display: ", ";\n  width: ", ";\n  box-shadow: 0 0 0 transparent;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  > i {\n    font-size: ", ";\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: transparent;\n  border: none;\n  ", "\n  width: ", ";\n\n  &:hover,\n  &:focus {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: transparent;\n    border: none;\n    box-shadow: 0 0 0 transparent;\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: transparent;\n  border: 1px solid ", ";\n\n  &:hover,\n  &:focus {\n    background-color: transparent;\n    box-shadow: 0 0 0 2px ", ",\n                inset 0 0 0 1px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: 0 0 0 transparent;\n  }\n\n  &:disabled {\n    background-color: transparent;\n    border-color: ", ";\n    box-shadow: 0 0 0 transparent;\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:hover,\n  &:focus {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 transparent;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: none;\n    box-shadow: 0 0 0 transparent;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:hover,\n  &:focus {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    border-color: ", ";\n    box-shadow: 0 0 0 transparent;\n  }\n\n  &:disabled {\n    background-color: ", ";\n    border: none;\n    box-shadow: 0 0 0 transparent;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var primaryStyle = (0, _styledComponents.css)(_templateObject(), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.black.900'), (0, _getFromTheme["default"])('palette.misc.white')), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500')), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500')), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.400')), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.black.900'), (0, _getFromTheme["default"])('palette.misc.white')), (0, _styledTools.ifProp)('invert', (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.white'), (0, _polished.transparentize)(0.5)), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.primary.400'), (0, _polished.transparentize)(0.5))), (0, _styledTools.ifProp)('invert', (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.white'), (0, _polished.transparentize)(0.3)), (0, _getFromTheme["default"])('palette.primary.600')), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.black.900'), (0, _getFromTheme["default"])('palette.primary.600')), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.400')), (0, _polished.transparentize)(0.7)));
var dangerStyle = (0, _styledComponents.css)(_templateObject2(), (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.red.600'), (0, _getFromTheme["default"])('palette.red.600'), (0, _getFromTheme["default"])('palette.red.500'), (0, _getFromTheme["default"])('palette.misc.white'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.red.500'), (0, _polished.transparentize)(0.5)), (0, _getFromTheme["default"])('palette.red.700'), (0, _getFromTheme["default"])('palette.red.700'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.red.500'), (0, _polished.transparentize)(0.7)));
var defaultStyle = (0, _styledComponents.css)(_templateObject3(), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500')), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500')), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500')), (0, _polished.transparentize)(0.5)), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500')), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.900')), (0, _polished.transparentize)(0.92)), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.900')), (0, _polished.transparentize)(0.9)), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.900')), (0, _polished.transparentize)(0.75)));
var secondaryStyle = (0, _styledComponents.css)(_templateObject4(), (0, _styledTools.ifProp)('iconOnly', (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.3))), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500'))), function (props) {
  return props.iconOnly && 'border-radius: 50%;';
}, (0, _styledTools.ifProp)('iconOnly', (0, _styledTools.ifProp)('small', '30px', (0, _styledTools.ifProp)('large', '52px', '40px')), 'auto'), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.900')), (0, _polished.transparentize)(0.92)), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.900')), (0, _styledTools.ifProp)('invert', (0, _polished.transparentize)(0.80), (0, _polished.transparentize)(0.85))), (0, _styledTools.withProp)((0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.900')), (0, _polished.transparentize)(0.75)));

var StyledButton = _styledComponents["default"].button(_templateObject5(), (0, _styledTools.ifProp)('small', '10px', (0, _styledTools.ifProp)('large', '16px', '12px')), (0, _getFromTheme["default"])('typography.fontFamily'), (0, _getFromTheme["default"])('typography.fontWeight.semiBold'), (0, _getFromTheme["default"])('common.transition'), (0, _styledTools.ifProp)('small', '30px', (0, _styledTools.ifProp)('large', '52px', '40px')), (0, _styledTools.ifProp)('small', (0, _polished.rem)(13), (0, _styledTools.ifProp)('large', (0, _polished.rem)(18), (0, _polished.rem)(14))), (0, _styledTools.ifProp)('block', 'flex', 'inline-flex'), (0, _styledTools.ifProp)('block', '100%', (0, _styledTools.ifProp)('iconOnly', (0, _styledTools.ifProp)('small', '30px', (0, _styledTools.ifProp)('large', '52px', '40px')), 'auto')), function (props) {
  return !props.primary && !props.secondary && !props.danger && defaultStyle;
}, function (props) {
  return props.primary && primaryStyle;
}, function (props) {
  return props.danger && dangerStyle;
}, function (props) {
  return props.secondary && secondaryStyle;
}, function (props) {
  return props.iconOnly && 'padding: 0;';
}, (0, _styledTools.ifProp)('small', (0, _polished.rem)(20), (0, _styledTools.ifProp)('large', (0, _polished.rem)(32), (0, _polished.rem)(26))));

exports.StyledButton = StyledButton;
var StyledIcon = (0, _styledComponents["default"])(_Icon.Icon)(_templateObject6(), (0, _styledTools.ifProp)('hasChildren', '5px', '0'));
exports.StyledIcon = StyledIcon;