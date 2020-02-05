"use strict";

exports.__esModule = true;
exports.StyledLink = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTools = require("styled-tools");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  text-decoration: ", ";\n  cursor: pointer;\n  transition: ", ";\n  color: ", ";\n\n  &:hover {\n    text-decoration: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledLink = _styledComponents["default"].a(_templateObject(), (0, _getFromTheme["default"])('typography.fontWeight.semiBold'), (0, _styledTools.ifProp)('invert', 'underline', 'none'), (0, _getFromTheme["default"])('common.transition'), (0, _styledTools.ifProp)('invert', (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('palette.primary.500')), (0, _styledTools.ifProp)('invert', 'none', 'underline'));

exports.StyledLink = StyledLink;