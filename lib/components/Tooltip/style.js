"use strict";

exports.__esModule = true;
exports.Trigger = exports.Balloon = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject15() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  max-width: 250px;\n  width: max-content;\n  padding: 6px 10px;\n  background: ", ";\n  color: ", ";\n  font-size: ", ";\n  border-radius: 6px;\n  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);\n  box-sizing: border-box;\n  opacity: ", ";\n  transition-duration: .2s;\n  transition-timing-function: ease;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(0, -100%);\n  margin-left: ", ";\n  transition-property: opacity, margin-left;\n\n  &::after {\n    ", "\n    bottom: 0;\n    margin-bottom: 10px;\n    left: -4px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(0, 0);\n  margin-left: ", ";\n  transition-property: opacity, margin-left;\n\n  &::after {\n    ", "\n    top: 0;\n    margin-top: 10px;\n    left: -4px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(0, -50%);\n  margin-left: ", ";\n  transition-property: opacity, margin-left;\n\n  &::after {\n    ", "\n    top: 50%;\n    margin-top: -4px;\n    left: -4px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(-100%, -100%);\n  margin-left: ", ";\n  transition-property: opacity, margin-left;\n\n  &::after {\n    ", "\n    bottom: 0;\n    margin-bottom: 10px;\n    right: -4px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(-100%, 0);\n  margin-left: ", ";\n  transition-property: opacity, margin-left;\n\n  &::after {\n    ", "\n    top: 0;\n    margin-top: 10px;\n    right: -4px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(-100%, -50%);\n  margin-left: ", ";\n  transition-property: opacity, margin-left;\n\n  &::after {\n    ", "\n    top: 50%;\n    margin-top: -4px;\n    right: -4px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(-100%, 0);\n  margin-top: ", ";\n  transition-property: opacity, margin-top;\n\n  &::after {\n    ", "\n    right: 0;\n    margin-right: 10px;\n    top: -4px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(0, 0);\n  margin-top: ", ";\n  transition-property: opacity, margin-top;\n\n  &::after {\n    ", "\n    left: 0;\n    margin-left: 10px;\n    top: -4px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(-50%, 0);\n  margin-top: ", ";\n  transition-property: opacity, margin-top;\n\n  &::after {\n    ", "\n    left: 50%;\n    margin-left: -4px;\n    top: -4px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(-100%, -100%);\n  margin-top: ", ";\n  transition-property: opacity, margin-top;\n\n  &::after {\n    ", "\n    right: 0;\n    margin-right: 10px;\n    bottom: -4px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(0, -100%);\n  margin-top: ", ";\n  transition-property: opacity, margin-top;\n\n  &::after {\n    ", "\n    left: 0;\n    margin-left: 10px;\n    bottom: -4px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  left: ", "px;\n  top: ", "px;\n  transform: translate(-50%, -100%);\n  margin-top: ", ";\n  transition-property: opacity, margin-top;\n\n  &::after {\n    ", "\n    left: 50%;\n    margin-left: -4px;\n    bottom: -4px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  content: '';\n  position: absolute;\n  display: block;\n  width: 8px;\n  height: 8px;\n  background-color: ", ";\n  transform: rotate(45deg);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var arrow = (0, _styledComponents.css)(_templateObject(), (0, _getFromTheme["default"])('palette.black.900'));
var top = (0, _styledComponents.css)(_templateObject2(), function (_ref) {
  var position = _ref.position;
  return position.left + position.width / 2;
}, function (_ref2) {
  var position = _ref2.position;
  return position.top - 10;
}, (0, _styledTools.ifProp)('fade', '0', '5px'), arrow);
var topLeft = (0, _styledComponents.css)(_templateObject3(), function (_ref3) {
  var position = _ref3.position;
  return position.left;
}, function (_ref4) {
  var position = _ref4.position;
  return position.top - 10;
}, (0, _styledTools.ifProp)('fade', '0', '5px'), arrow);
var topRight = (0, _styledComponents.css)(_templateObject4(), function (_ref5) {
  var position = _ref5.position;
  return position.left + position.width;
}, function (_ref6) {
  var position = _ref6.position;
  return position.top - 10;
}, (0, _styledTools.ifProp)('fade', '0', '5px'), arrow);
var bottom = (0, _styledComponents.css)(_templateObject5(), function (_ref7) {
  var position = _ref7.position;
  return position.left + position.width / 2;
}, function (_ref8) {
  var position = _ref8.position;
  return position.top + position.height + 10;
}, (0, _styledTools.ifProp)('fade', '0', '-5px'), arrow);
var bottomLeft = (0, _styledComponents.css)(_templateObject6(), function (_ref9) {
  var position = _ref9.position;
  return position.left;
}, function (_ref10) {
  var position = _ref10.position;
  return position.top + position.height + 10;
}, (0, _styledTools.ifProp)('fade', '0', '-5px'), arrow);
var bottomRight = (0, _styledComponents.css)(_templateObject7(), function (_ref11) {
  var position = _ref11.position;
  return position.left + position.width;
}, function (_ref12) {
  var position = _ref12.position;
  return position.top + position.height + 10;
}, (0, _styledTools.ifProp)('fade', '0', '-5px'), arrow);
var left = (0, _styledComponents.css)(_templateObject8(), function (_ref13) {
  var position = _ref13.position;
  return position.left - 10;
}, function (_ref14) {
  var position = _ref14.position;
  return position.top + position.height / 2;
}, (0, _styledTools.ifProp)('fade', '0', '5px'), arrow);
var leftTop = (0, _styledComponents.css)(_templateObject9(), function (_ref15) {
  var position = _ref15.position;
  return position.left - 10;
}, function (_ref16) {
  var position = _ref16.position;
  return position.top;
}, (0, _styledTools.ifProp)('fade', '0', '5px'), arrow);
var leftBottom = (0, _styledComponents.css)(_templateObject10(), function (_ref17) {
  var position = _ref17.position;
  return position.left - 10;
}, function (_ref18) {
  var position = _ref18.position;
  return position.top + position.height;
}, (0, _styledTools.ifProp)('fade', '0', '5px'), arrow);
var right = (0, _styledComponents.css)(_templateObject11(), function (_ref19) {
  var position = _ref19.position;
  return position.left + position.width + 10;
}, function (_ref20) {
  var position = _ref20.position;
  return position.top + position.height / 2;
}, (0, _styledTools.ifProp)('fade', '0', '-5px'), arrow);
var rightTop = (0, _styledComponents.css)(_templateObject12(), function (_ref21) {
  var position = _ref21.position;
  return position.left + position.width + 10;
}, function (_ref22) {
  var position = _ref22.position;
  return position.top;
}, (0, _styledTools.ifProp)('fade', '0', '-5px'), arrow);
var rightBottom = (0, _styledComponents.css)(_templateObject13(), function (_ref23) {
  var position = _ref23.position;
  return position.left + position.width + 10;
}, function (_ref24) {
  var position = _ref24.position;
  return position.top + position.height;
}, (0, _styledTools.ifProp)('fade', '0', '-5px'), arrow);

var Balloon = _styledComponents["default"].div(_templateObject14(), (0, _getFromTheme["default"])('zIndex.z6'), function (props) {
  return props.placement === 'top' && top;
}, function (props) {
  return props.placement === 'bottom' && bottom;
}, function (props) {
  return props.placement === 'left' && left;
}, function (props) {
  return props.placement === 'right' && right;
}, function (props) {
  return props.placement === 'topLeft' && topLeft;
}, function (props) {
  return props.placement === 'topRight' && topRight;
}, function (props) {
  return props.placement === 'leftTop' && leftTop;
}, function (props) {
  return props.placement === 'leftBottom' && leftBottom;
}, function (props) {
  return props.placement === 'bottomLeft' && bottomLeft;
}, function (props) {
  return props.placement === 'bottomRight' && bottomRight;
}, function (props) {
  return props.placement === 'rightTop' && rightTop;
}, function (props) {
  return props.placement === 'rightBottom' && rightBottom;
}, (0, _getFromTheme["default"])('palette.black.900'), (0, _getFromTheme["default"])('palette.misc.white'), (0, _getFromTheme["default"])('typography.fontSize.small'), (0, _styledTools.ifProp)('fade', '1', '0'));

exports.Balloon = Balloon;

var Trigger = _styledComponents["default"].span(_templateObject15());

exports.Trigger = Trigger;