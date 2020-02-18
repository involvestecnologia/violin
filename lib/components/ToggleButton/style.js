"use strict";

exports.__esModule = true;
exports.HiddenInput = exports.StyledButton = exports.Wrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  opacity: 0;\n\n  &:focus ~ ", " {\n    ", "\n  }\n  &:checked ~ ", " {\n    ", "\n  }\n\n  &:disabled ~ ", " {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    opacity: 0.18;\n    cursor: not-allowed;\n    &:hover {\n      box-shadow: none;\n    }\n  }\n\n  &:disabled:checked ~ ", " {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    opacity: 0.26;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  height: 40px;\n  border-radius: 4px;\n  padding: 0 16px;\n  font-size: ", ";\n  font-weight: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n  color: ", ";\n  cursor: pointer;\n  transition: ", ";\n\n  &:hover,\n  &:focus {\n    ", "\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 4px 8px ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Wrapper = _styledComponents["default"].label(_templateObject());

exports.Wrapper = Wrapper;
var hoverStyle = (0, _styledComponents.css)(_templateObject2(), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.8)));
var activeStyle = (0, _styledComponents.css)(_templateObject3(), (0, _getFromTheme["default"])('palette.primary.50'), (0, _getFromTheme["default"])('palette.primary.500'), (0, _getFromTheme["default"])('palette.primary.500'));

var StyledButton = _styledComponents["default"].div(_templateObject4(), (0, _getFromTheme["default"])('typography.fontSize.body'), (0, _getFromTheme["default"])('typography.fontWeight.semiBold'), (0, _getFromTheme["default"])('palette.black.300'), (0, _getFromTheme["default"])('palette.black.50'), (0, _getFromTheme["default"])('palette.black.500'), (0, _getFromTheme["default"])('common.transition'), hoverStyle);

exports.StyledButton = StyledButton;

var HiddenInput = _styledComponents["default"].input(_templateObject5(), StyledButton, hoverStyle, StyledButton, activeStyle, StyledButton, (0, _getFromTheme["default"])('palette.black.200'), (0, _getFromTheme["default"])('palette.black.200'), (0, _getFromTheme["default"])('palette.black.900'), StyledButton, (0, _getFromTheme["default"])('palette.black.200'), (0, _getFromTheme["default"])('palette.primary.700'), (0, _getFromTheme["default"])('palette.primary.700'));

exports.HiddenInput = HiddenInput;