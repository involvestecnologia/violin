"use strict";

exports.__esModule = true;
exports.CardContent = exports.CardActions = exports.CardSubTitle = exports.CardTitle = exports.CardTitles = exports.CardHeader = exports.CardWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

var _Title = require("../Title");

var _Subtitle = require("../Subtitle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 16px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-column-gap: 2px;\n  grid-template-rows: 100%;\n  grid-auto-flow: column;\n  padding: 8px;\n"]);

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
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  color: ", ";\n  font-weight: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 16px 16px 0 16px;\n  min-width: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-auto-columns: auto;\n  grid-template-columns: auto max-content;\n  align-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-radius: 4px;\n  box-sizing: border-box;\n  box-shadow: 0px 2px 8px rgba(31, 14, 61, 0.05);\n  display: flex;\n  flex-direction: column;\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var CardWrapper = _styledComponents["default"].div(_templateObject(), (0, _getFromTheme["default"])('palette.misc.white'));

exports.CardWrapper = CardWrapper;

var CardHeader = _styledComponents["default"].header(_templateObject2());

exports.CardHeader = CardHeader;

var CardTitles = _styledComponents["default"].div(_templateObject3());

exports.CardTitles = CardTitles;
var ellipsisStyle = (0, _styledComponents.css)(_templateObject4());
var CardTitle = (0, _styledComponents["default"])(_Title.Title)(_templateObject5(), ellipsisStyle, (0, _getFromTheme["default"])('palette.black.500'), (0, _getFromTheme["default"])('typography.fontWeight.semiBold'));
exports.CardTitle = CardTitle;
var CardSubTitle = (0, _styledComponents["default"])(_Subtitle.Subtitle)(_templateObject6(), ellipsisStyle);
exports.CardSubTitle = CardSubTitle;

var CardActions = _styledComponents["default"].div(_templateObject7());

exports.CardActions = CardActions;

var CardContent = _styledComponents["default"].div(_templateObject8());

exports.CardContent = CardContent;