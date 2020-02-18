"use strict";

exports.__esModule = true;
exports.ModalFooter = exports.ModalContent = exports.ModalTitle = exports.ModalHeader = exports.ModalWrapper = exports.ModalBackdrop = exports.ModalCard = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledTools = require("styled-tools");

var _polished = require("polished");

var _getFromTheme = _interopRequireDefault(require("../../utils/getFromTheme"));

var _Title = require("../Title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject12() {
  var data = _taggedTemplateLiteralLoose(["\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 10px;\n  padding: 20px 16px 16px 16px;\n\n  @media(min-width: 540px) {\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: 5px;\n    grid-template-rows: 70px;\n    padding: 0 16px 0 16px;\n    justify-content: flex-end;\n    align-items: center;\n    height: 70px;\n    max-height: 70px;\n    min-height: 70px;\n    background-color: ", ";\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 20px 20px 30px;\n\n  @media(min-width: 540px) {\n    overflow: auto;\n  }\n\n  @media only screen and (min-width: 540px) and (max-height: 450px) {\n    overflow: hidden;\n  } \n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; \n  color: ", ";\n  font-weight: ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 10px 0 20px;\n  box-sizing: border-box;\n  border: 1px solid transparent;\n  border-bottom-color: rgba(31, 14, 61, .1);\n  height: 70px;\n  min-height: 70px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["visibility: visible; opacity: 1;"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["visibility: visible; opacity: 0.6;"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["visibility: visible; opacity: 1;"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  ", "\n\n  ", " {\n    ", "\n    ", "\n  }\n\n  ", " {\n    ", "\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  transition: ", ";\n  transition-duration: .2s;\n  transition-property: opacity;\n  transition-timing-function: ease;\n  visibility: hidden;\n  opacity: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["pointer-events: none;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 70px auto max-content;\n  overflow: auto;\n  outline: none;\n  background: ", ";\n\n  @media(min-width: 540px) {\n    top: 50%;\n    left: 50%;\n    height: auto;\n    width: 500px;\n    grid-template-rows: 70px 1fr;\n    overflow: hidden;\n    max-height: calc(100vh - 20px);\n    transform: translate(-50%, -50%);\n    border-radius: 8px;\n    box-shadow: 0px 5px 10px ", ";\n  }\n\n  @media(min-width: 780px) {\n    width: 700px;\n  }\n\n  @media only screen and (min-width: 540px) and (max-height: 450px) {\n    top: 0;\n    max-height: fit-content;\n    transform: translate(-50%, 0);\n    margin: 10px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ModalCard = _styledComponents["default"].div(_templateObject(), (0, _getFromTheme["default"])('palette.misc.white'), (0, _styledTools.withProp)((0, _getFromTheme["default"])('palette.black.900'), (0, _polished.transparentize)(0.8)));

exports.ModalCard = ModalCard;

var ModalBackdrop = _styledComponents["default"].div(_templateObject2(), (0, _getFromTheme["default"])('palette.black.500'), function (props) {
  return props.disableBackdropClick && (0, _styledComponents.css)(_templateObject3());
});

exports.ModalBackdrop = ModalBackdrop;
var transition = (0, _styledComponents.css)(_templateObject4(), (0, _getFromTheme["default"])('common.transition'));

var ModalWrapper = _styledComponents["default"].div(_templateObject5(), (0, _getFromTheme["default"])('zIndex.z1'), function (props) {
  return props.fadeIn && (0, _styledComponents.css)(_templateObject6());
}, ModalBackdrop, transition, function (props) {
  return props.fadeIn && (0, _styledComponents.css)(_templateObject7());
}, ModalCard, transition, function (props) {
  return props.fadeIn && (0, _styledComponents.css)(_templateObject8());
});

exports.ModalWrapper = ModalWrapper;

var ModalHeader = _styledComponents["default"].header(_templateObject9());

exports.ModalHeader = ModalHeader;
var ModalTitle = (0, _styledComponents["default"])(_Title.Title)(_templateObject10(), (0, _getFromTheme["default"])('palette.black.500'), (0, _getFromTheme["default"])('typography.fontWeight.semiBold'));
exports.ModalTitle = ModalTitle;

var ModalContent = _styledComponents["default"].div(_templateObject11());

exports.ModalContent = ModalContent;

var ModalFooter = _styledComponents["default"].footer(_templateObject12(), (0, _getFromTheme["default"])('palette.black.50'));

exports.ModalFooter = ModalFooter;