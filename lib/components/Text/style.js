"use strict";

exports.__esModule = true;
exports.StyledText = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  font-size: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  opacity: 0.25;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var captionStyle = (0, _styledComponents.css)(_templateObject(), (0, _getFromTheme["default"])('palette.black.400'), (0, _getFromTheme["default"])('typography.fontSize.small'));
var disabledStyle = (0, _styledComponents.css)(_templateObject2());
var errorStyle = (0, _styledComponents.css)(_templateObject3(), (0, _getFromTheme["default"])('palette.red.700'), (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _getFromTheme["default"])('typography.fontWeight.bold'));
var smallStyle = (0, _styledComponents.css)(_templateObject4(), (0, _getFromTheme["default"])('typography.fontSize.small'));

var StyledText = _styledComponents["default"].p(_templateObject5(), (0, _getFromTheme["default"])('typography.fontSize.body'), (0, _styledTools.ifProp)('bold', (0, _getFromTheme["default"])('typography.fontWeight.bold')), (0, _styledTools.ifProp)('italic', 'italic'), function (props) {
  return props.caption && captionStyle;
}, function (props) {
  return props.error && errorStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return props.small && smallStyle;
});

exports.StyledText = StyledText;