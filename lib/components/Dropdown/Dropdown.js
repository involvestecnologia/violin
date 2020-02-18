"use strict";

exports.__esModule = true;
exports.Dropdown = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _offsetElementPosition = _interopRequireDefault(require("../../utils/offsetElementPosition"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      trigger = _ref.trigger,
      preventClose = _ref.preventClose,
      placement = _ref.placement,
      open = _ref.open;

  var _useState = (0, _react.useState)(false),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  var _useState2 = (0, _react.useState)({}),
      triggerPosition = _useState2[0],
      setTriggerPosition = _useState2[1];

  var triggerRef = (0, _react.useRef)({});

  var handleTriggerPosition = function handleTriggerPosition() {
    var position = (0, _offsetElementPosition["default"])(triggerRef.current);
    setTriggerPosition(position);
  };

  var openDropdown = function openDropdown() {
    handleTriggerPosition();
    setCollapsed(true);
  };

  var closeDropdown = function closeDropdown() {
    if (!preventClose) {
      setCollapsed(false);
    }
  };

  (0, _react.useEffect)(function () {
    if (open) {
      openDropdown();
    } else {
      setCollapsed(false);
    }
  }, [open]);
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', handleTriggerPosition);
    return function () {
      window.removeEventListener('resize', handleTriggerPosition);
    };
  }, []);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_style.Trigger, {
    ref: triggerRef,
    onClick: openDropdown
  }, trigger), collapsed && _react["default"].createElement(DropdownCard, {
    closeDropdown: closeDropdown,
    triggerPosition: triggerPosition,
    onClick: closeDropdown,
    placement: placement
  }, children));
};

exports.Dropdown = Dropdown;
Dropdown.propTypes = {
  trigger: _propTypes["default"].node.isRequired,

  /** Prevent dropdown close when clicked */
  preventClose: _propTypes["default"].bool,

  /** Use with preventClose for managing status Dropdown */
  open: _propTypes["default"].bool,

  /** Change position dropdown */
  placement: _propTypes["default"].oneOf(['left', 'right'])
};
Dropdown.defaultProps = {
  preventClose: false,
  open: false,
  placement: 'left'
};

var DropdownCard = function DropdownCard(_ref2) {
  var closeDropdown = _ref2.closeDropdown,
      triggerPosition = _ref2.triggerPosition,
      placement = _ref2.placement,
      props = _objectWithoutPropertiesLoose(_ref2, ["closeDropdown", "triggerPosition", "placement"]);

  var _useState3 = (0, _react.useState)(false),
      fadeIn = _useState3[0],
      setFadeIn = _useState3[1];

  var _useState4 = (0, _react.useState)({}),
      position = _useState4[0],
      setPosition = _useState4[1];

  var timerShow = (0, _react.useRef)(null);
  var cardRef = (0, _react.useRef)(null);

  var listenClose = function listenClose(e) {
    if (!cardRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  var handlePosition = function handlePosition() {
    var trigger = triggerPosition;
    var card = cardRef.current.getBoundingClientRect();
    var isTop = trigger.bottom + card.height > window.scrollY + window.innerHeight;
    var isRight = trigger.left + card.width > window.innerWidth || placement === 'right';
    var dynamicPosition = {
      top: isTop ? trigger.top - card.height + 2 : trigger.bottom - 2,
      left: isRight ? trigger.right - card.width : trigger.left
    };
    setPosition(dynamicPosition);
  };

  (0, _react.useEffect)(function () {
    timerShow.current = setTimeout(function () {
      return setFadeIn(true);
    }, 50);
    document.addEventListener('click', listenClose);
    return function () {
      clearTimeout(timerShow.current);
      document.removeEventListener('click', listenClose);
    };
  }, []);
  (0, _react.useEffect)(function () {
    handlePosition();
    window.addEventListener('scroll', handlePosition);
    return function () {
      window.removeEventListener('scroll', handlePosition);
    };
  }, [triggerPosition]);

  var component = _react["default"].createElement(_style.StyledCard, _extends({
    ref: cardRef,
    fadeIn: fadeIn,
    position: position
  }, props));

  return _reactDom["default"].createPortal(component, document.querySelector('body'));
};