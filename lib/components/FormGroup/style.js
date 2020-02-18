"use strict";

exports.__esModule = true;
exports.HelpText = exports.InfoIcon = exports.HelpLabel = exports.LabelText = exports.StyledLabel = exports.LabelContainer = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

var _Icon = require("../Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  margin-top: 6px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 4px;\n  font-size: ", ";\n  color: ", ";\n  transform: rotate(180deg);\n  cursor: default;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  &::before {\n    content: ' - ';\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 6px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Wrapper = _styledComponents["default"].div(_templateObject());

exports.Wrapper = Wrapper;

var LabelContainer = _styledComponents["default"].div(_templateObject2());

exports.LabelContainer = LabelContainer;

var StyledLabel = _styledComponents["default"].label(_templateObject3(), (0, _getFromTheme["default"])('typography.fontSize.body'), (0, _getFromTheme["default"])('typography.fontWeight.bold'));

exports.StyledLabel = StyledLabel;

var LabelText = _styledComponents["default"].span(_templateObject4(), (0, _styledTools.ifProp)('isDisabled', (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.75)), (0, _getFromTheme["default"])('palette.black.900')));

exports.LabelText = LabelText;

var HelpLabel = _styledComponents["default"].small(_templateObject5(), (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _styledTools.ifProp)('isDisabled', (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.75)), (0, _getFromTheme["default"])('palette.black.500')), (0, _getFromTheme["default"])('typography.fontWeight.regular'));

exports.HelpLabel = HelpLabel;
var InfoIcon = (0, _styledComponents["default"])(_Icon.Icon)(_templateObject6(), (0, _polished.rem)(20), (0, _getFromTheme["default"])('palette.black.300'));
exports.InfoIcon = InfoIcon;

var HelpText = _styledComponents["default"].div(_templateObject7(), (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _styledTools.ifProp)('error', (0, _getFromTheme["default"])('palette.red.700'), (0, _getFromTheme["default"])('palette.black.500')), (0, _styledTools.ifProp)('error', (0, _getFromTheme["default"])('typography.fontWeight.semiBold'), (0, _getFromTheme["default"])('typography.fontWeight.regular')));

exports.HelpText = HelpText;