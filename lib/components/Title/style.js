"use strict";

exports.__esModule = true;
exports.StyledTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: ", ";\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledTitle = _styledComponents["default"].h2(_templateObject(), function (_ref) {
  var size = _ref.size;
  return (0, _getFromTheme["default"])("typography.fontSize." + size);
}, function (_ref2) {
  var size = _ref2.size;
  return size === 'h1' || size === 'h2' || size === 'h3' ? '1.2' : (0, _getFromTheme["default"])('typography.lineHeight');
}, (0, _getFromTheme["default"])('typography.fontWeight.bold'), (0, _getFromTheme["default"])('palette.black.900'));

exports.StyledTitle = StyledTitle;