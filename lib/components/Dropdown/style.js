"use strict";

exports.__esModule = true;
exports.StyledTitle = exports.Divider = exports.Trigger = exports.StyledCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

var _Subtitle = require("../Subtitle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  padding: 8px 16px 4px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  height: 0;\n  border-top: 1px solid ", ";\n  margin: 8px 0; \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: ", ";\n  top: ", "px;\n  left: ", "px;\n  min-width: 160px;\n  width: fit-content;\n  opacity: ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  padding: 8px 0;\n  box-shadow: 0 5px 10px ", ";\n  transition-property: opacity;\n  transition-duration: .1s;\n  transition-timing-function: ease;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledCard = _styledComponents["default"].div(_templateObject(), (0, _getFromTheme["default"])('zIndex.z6'), (0, _styledTools.prop)('position.top'), (0, _styledTools.prop)('position.left'), (0, _styledTools.ifProp)('fadeIn', '1', '0'), (0, _getFromTheme["default"])('palette.misc.white'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.8)));

exports.StyledCard = StyledCard;

var Trigger = _styledComponents["default"].div(_templateObject2());

exports.Trigger = Trigger;

var Divider = _styledComponents["default"].div(_templateObject3(), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.9)));

exports.Divider = Divider;
var StyledTitle = (0, _styledComponents["default"])(_Subtitle.Subtitle)(_templateObject4(), (0, _getFromTheme["default"])('palette.black.400'));
exports.StyledTitle = StyledTitle;