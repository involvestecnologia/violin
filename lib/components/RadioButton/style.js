"use strict";

exports.__esModule = true;
exports.InputStyled = exports.Label = exports.Svg = exports.CircleCheck = exports.Circle = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  opacity: 0;\n\n  &:checked ~ ", " {\n    ", " {\n      stroke: ", ";\n    }\n    ", " {\n      opacity: 1;\n    }\n\n    &:hover {\n      ", " {\n        stroke: ", ";\n      }\n      ", " {\n        fill: ", ";\n      }\n    }\n  }\n\n  &:focus {\n    ~ ", " {\n      ", " {\n        stroke: ", ";\n      }\n    }\n\n    &:checked {\n      ~ ", " {\n        ", " {\n          stroke: ", ";\n        }\n        ", " {\n          fill: ", ";\n        }\n      }\n    } \n  }\n\n  &:disabled {\n    ~ ", " {\n      cursor: not-allowed;\n\n      ", " {\n        stroke: ", ";\n        cursor: not-allowed;\n      }\n    }\n\n    ~ ", " {\n      opacity: 0.3;\n      cursor: not-allowed;\n    }\n\n    &:checked {\n      ~ ", " {\n        ", " {\n          stroke: ", ";\n        }\n        ", " {\n          fill: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: 6px;\n  font-size: ", ";\n  cursor: pointer;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  cursor: pointer;\n\n  &:hover {\n    ", " {\n      stroke: ", ";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  fill: ", ";\n  opacity: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  fill: none;\n  stroke-width: 2px;\n  stroke: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Wrapper = _styledComponents["default"].label(_templateObject());

exports.Wrapper = Wrapper;

var Circle = _styledComponents["default"].circle(_templateObject2(), (0, _getFromTheme["default"])('palette.black.400'));

exports.Circle = Circle;

var CircleCheck = _styledComponents["default"].circle(_templateObject3(), (0, _getFromTheme["default"])('palette.primary.500'));

exports.CircleCheck = CircleCheck;

var Svg = _styledComponents["default"].svg(_templateObject4(), Circle, (0, _getFromTheme["default"])('palette.primary.500'));

exports.Svg = Svg;

var Label = _styledComponents["default"].span(_templateObject5(), (0, _getFromTheme["default"])('typography.fontSize.body'));

exports.Label = Label;

var InputStyled = _styledComponents["default"].input(_templateObject6(), Svg, Circle, (0, _getFromTheme["default"])('palette.primary.500'), CircleCheck, Circle, (0, _getFromTheme["default"])('palette.primary.700'), CircleCheck, (0, _getFromTheme["default"])('palette.primary.700'), Svg, Circle, (0, _getFromTheme["default"])('palette.primary.500'), Svg, Circle, (0, _getFromTheme["default"])('palette.primary.700'), CircleCheck, (0, _getFromTheme["default"])('palette.primary.700'), Svg, Circle, (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.85)), Label, Svg, Circle, (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.85)), CircleCheck, (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.misc.black'), (0, _polished.transparentize)(0.85)));

exports.InputStyled = InputStyled;