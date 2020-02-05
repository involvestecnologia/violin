"use strict";

exports.__esModule = true;
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');\n  @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');\n  ", "\n\n  html {\n    font-size: ", ";\n  }\n\n  body {\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n  }\n\n  [data-testid=\"live-preview\"] {\n    padding: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), (0, _polished.normalize)(), (0, _getFromTheme["default"])('typography.htmlFontSize'), (0, _getFromTheme["default"])('typography.fontFamily'), (0, _getFromTheme["default"])('typography.fontSize.body'), (0, _getFromTheme["default"])('typography.lineHeight'), (0, _getFromTheme["default"])('palette.black.900'));
exports.GlobalStyle = GlobalStyle;