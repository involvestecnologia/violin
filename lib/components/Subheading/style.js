"use strict";

exports.__esModule = true;
exports.StyledHeading = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  color: ", ";\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var overlineStyle = (0, _styledComponents.css)(_templateObject(), (0, _getFromTheme["default"])('palette.black.500'), (0, _getFromTheme["default"])('typography.fontSize.xsmall'));

var StyledHeading = _styledComponents["default"].h2(_templateObject2(), (0, _styledTools.ifProp)('small', (0, _getFromTheme["default"])('typography.fontSize.body'), (0, _getFromTheme["default"])('typography.fontSize.large')), (0, _getFromTheme["default"])('typography.lineHeight'), (0, _getFromTheme["default"])('typography.fontWeight.bold'), (0, _getFromTheme["default"])('palette.black.900'), function (props) {
  return props.overline && overlineStyle;
});

exports.StyledHeading = StyledHeading;