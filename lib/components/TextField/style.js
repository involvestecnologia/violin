"use strict";

exports.__esModule = true;
exports.InfoIcon = exports.HelpText = exports.Input = exports.HelpLabel = exports.LabelText = exports.Label = exports.LabelContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 4px;\n  font-size: ", ";\n  color: ", ";\n  transform: rotate(180deg);\n  cursor: default;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  margin-top: 6px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  height: ", ";\n  box-sizing: border-box;\n  border: none;\n  background-color: ", ";\n  border-radius: 4px;\n  padding: 0 ", ";\n  outline: none;\n  transition: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  color: ", ";\n  box-shadow: 0 0 0 transparent;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  box-shadow: 0 0 0 2px ", ";\n  background-color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  &::before {\n    content: ' - ';\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var LabelContainer = _styledComponents["default"].div(_templateObject());

exports.LabelContainer = LabelContainer;

var Label = _styledComponents["default"].label(_templateObject2(), (0, _getFromTheme["default"])('typography.fontSize.body'), (0, _getFromTheme["default"])('typography.fontWeight.bold'));

exports.Label = Label;

var LabelText = _styledComponents["default"].span(_templateObject3(), (0, _styledTools.ifProp)('isDisabled', (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.75)), (0, _getFromTheme["default"])('palette.black.900')));

exports.LabelText = LabelText;

var HelpLabel = _styledComponents["default"].small(_templateObject4(), (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _getFromTheme["default"])('palette.black.500'), (0, _getFromTheme["default"])('typography.fontWeight.regular'));

exports.HelpLabel = HelpLabel;
var errorStyle = (0, _styledComponents.css)(_templateObject5(), (0, _getFromTheme["default"])('palette.red.600'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.red.100'), (0, _polished.transparentize)(0.2)), (0, _getFromTheme["default"])('palette.red.600'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.red.100'), (0, _polished.transparentize)(0.2)));

var Input = _styledComponents["default"].input(_templateObject6(), (0, _styledTools.ifProp)('small', '30px', (0, _styledTools.ifProp)('large', '52px', '40px')), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.primary.900'), (0, _polished.transparentize)(0.9)), (0, _styledTools.ifProp)('large', '16px', '10px'), (0, _getFromTheme["default"])('common.transition'), (0, _getFromTheme["default"])('typography.fontFamily'), (0, _styledTools.ifProp)('large', (0, _getFromTheme["default"])('typography.fontSize.subtitle'), (0, _styledTools.ifProp)('small', (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _getFromTheme["default"])('typography.fontSize.body'))), (0, _getFromTheme["default"])('palette.black.900'), (0, _getFromTheme["default"])('palette.black.500'), (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.96)), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.75)), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.500'), (0, _polished.transparentize)(0.75)), function (props) {
  return props.error && errorStyle;
});

exports.Input = Input;

var HelpText = _styledComponents["default"].div(_templateObject7(), (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _styledTools.ifProp)('error', (0, _getFromTheme["default"])('palette.red.700'), (0, _getFromTheme["default"])('palette.black.500')), (0, _styledTools.ifProp)('error', (0, _getFromTheme["default"])('typography.fontWeight.semiBold'), (0, _getFromTheme["default"])('typography.fontWeight.regular')));

exports.HelpText = HelpText;
var InfoIcon = (0, _styledComponents["default"])(_Icon.Icon)(_templateObject8(), (0, _polished.rem)(20), (0, _getFromTheme["default"])('palette.black.300'));
exports.InfoIcon = InfoIcon;