"use strict";

exports.__esModule = true;
exports.WrapperIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTools = require("styled-tools");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-family: 'Material Icons Round', sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n  font-size: inherit;\n  cursor: ", ";\n  color: inherit;\n  transition: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var WrapperIcon = _styledComponents["default"].i(_templateObject(), (0, _styledTools.ifProp)('onClick', 'pointer'), (0, _getFromTheme["default"])('common.transition'));

exports.WrapperIcon = WrapperIcon;