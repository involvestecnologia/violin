"use strict";

exports.__esModule = true;
exports.InputStyled = exports.Label = exports.IndeterminateIcon = exports.CheckedIcon = exports.Svg = exports.Rect = exports.Wrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  opacity: 0;\n\n  &:checked ~ ", ",\n  &:indeterminate ~ ", " {\n    ", " {\n      stroke: ", ";\n      fill: ", ";\n    }\n\n    &:hover {\n      ", " {\n        stroke: ", ";\n        fill: ", ";\n      }\n    }\n  }\n\n  &:focus ~ ", " {\n    ", " {\n      stroke: ", ";\n    }\n  }\n\n  &:focus:checked ~ ", ",\n  &:focus:indeterminate ~ ", " {\n    ", " {\n      stroke: ", ";\n      fill: ", ";\n    }\n  }\n\n  &:checked ~ ", " {\n    > ", " {\n      opacity: 1;\n    }\n    > ", " {\n      opacity: 0;\n    }\n  }\n\n  &:indeterminate ~ ", " {\n    > ", " {\n      opacity: 0;\n    }\n    > ", " {\n      opacity: 1;\n    }\n  }\n\n  &:disabled ~ ", " > ", ",\n  &:indeterminate ~ ", " > ", " {\n    stroke: ", ";\n  }\n\n  &:disabled:checked ~ ", " > ", ",\n  &:disabled:indeterminate ~ ", " > ", " {\n    stroke: ", ";\n    fill: ", ";\n  }\n  \n  &:disabled ~ ", " {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n\n  &:disabled ~ ", " {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: 6px;\n  font-size: ", ";\n  cursor: pointer;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  stroke-width: 2px;\n  stroke: white;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n  opacity: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 18px;\n  height: 18px;\n\n  &:hover {\n    ", " {\n      stroke: ", ";\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 16px;\n  height: 16px;\n  fill: none;\n  stroke-width: 2px;\n  stroke: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Wrapper = _styledComponents["default"].label(_templateObject(), (0, _styledTools.ifProp)('disabled', 'not-allowed', 'pointer'));

exports.Wrapper = Wrapper;

var Rect = _styledComponents["default"].rect(_templateObject2(), (0, _getFromTheme["default"])('palette.black.400'));

exports.Rect = Rect;

var Svg = _styledComponents["default"].svg(_templateObject3(), Rect, (0, _getFromTheme["default"])('palette.primary.500'));

exports.Svg = Svg;
var iconCheck = (0, _styledComponents.css)(_templateObject4());

var CheckedIcon = _styledComponents["default"].path(_templateObject5(), iconCheck);

exports.CheckedIcon = CheckedIcon;

var IndeterminateIcon = _styledComponents["default"].path(_templateObject6(), iconCheck);

exports.IndeterminateIcon = IndeterminateIcon;

var Label = _styledComponents["default"].span(_templateObject7(), (0, _getFromTheme["default"])('typography.fontSize.body'));

exports.Label = Label;

var InputStyled = _styledComponents["default"].input(_templateObject8(), Svg, Svg, Rect, (0, _getFromTheme["default"])('palette.primary.500'), (0, _getFromTheme["default"])('palette.primary.500'), Rect, (0, _getFromTheme["default"])('palette.primary.700'), (0, _getFromTheme["default"])('palette.primary.700'), Svg, Rect, (0, _getFromTheme["default"])('palette.primary.500'), Svg, Svg, Rect, (0, _getFromTheme["default"])('palette.primary.700'), (0, _getFromTheme["default"])('palette.primary.700'), Svg, CheckedIcon, IndeterminateIcon, Svg, CheckedIcon, IndeterminateIcon, Svg, Rect, Svg, Rect, (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.85)), Svg, Rect, Svg, Rect, (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.85)), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.85)), Label, Svg);

exports.InputStyled = InputStyled;