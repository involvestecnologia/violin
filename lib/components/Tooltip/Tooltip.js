"use strict";

exports.__esModule = true;
exports.Tooltip = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _offsetElementPosition = _interopRequireDefault(require("../../utils/offsetElementPosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tooltip = function Tooltip(_ref) {
  var content = _ref.content,
      placement = _ref.placement,
      children = _ref.children,
      disableFocus = _ref.disableFocus,
      disableHover = _ref.disableHover;

  var _useState = (0, _react.useState)(false),
      showTip = _useState[0],
      setShowTip = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isTriggerHovered = _useState2[0],
      setIsTriggerHovered = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      isTipHovered = _useState3[0],
      setIsTipHovered = _useState3[1];

  var _useState4 = (0, _react.useState)({}),
      triggerPosition = _useState4[0],
      setTriggerPosition = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      triggerElement = _useState5[0],
      setTriggerElement = _useState5[1];

  var timerShowTip = (0, _react.useRef)();
  var timerHideTip = (0, _react.useRef)();

  var stopHiddenTimer = function stopHiddenTimer() {
    clearTimeout(timerHideTip.current);
  };

  var stopShowTimer = function stopShowTimer() {
    clearTimeout(timerShowTip.current);
  };

  (0, _react.useEffect)(function () {
    if (isTriggerHovered || isTipHovered) {
      stopHiddenTimer();

      if (isTipHovered) {
        setShowTip(true);
      } else {
        timerShowTip.current = setTimeout(function () {
          setShowTip(true);
        }, 100);
      }
    }

    if (!isTriggerHovered && !isTipHovered) {
      stopShowTimer();
      timerHideTip.current = setTimeout(function () {
        return setShowTip(false);
      }, 200);
    }

    return function () {
      stopShowTimer();
      stopHiddenTimer();
    };
  }, [isTriggerHovered, isTipHovered]);

  var onHovered = function onHovered(elem, value, event, propEvent) {
    if (event) {
      setTriggerPosition((0, _offsetElementPosition["default"])(event.target));
    }

    switch (elem) {
      case 'trigger':
        setIsTriggerHovered(value);
        break;

      case 'tip':
        setIsTipHovered(value);
        break;

      default:
        break;
    }

    if (propEvent) {
      propEvent();
    }
  };

  (0, _react.useEffect)(function () {
    var Elem = function Elem() {
      return _react["default"].cloneElement(children, _extends({}, children.props, {
        onMouseEnter: function onMouseEnter(event) {
          return !disableHover && onHovered('trigger', true, event, children.props.onMouseEnter);
        },
        onMouseLeave: function onMouseLeave(event) {
          return !disableHover && onHovered('trigger', false, event, children.props.onMouseLeave);
        },
        onFocus: function onFocus(event) {
          return !disableFocus && onHovered('trigger', true, event, children.props.onFocus);
        },
        onBlur: function onBlur(event) {
          return !disableFocus && onHovered('trigger', false, event, children.props.onBlur);
        },
        'data-testid': 'trigger'
      }));
    };

    setTriggerElement(Elem);
  }, [disableHover, disableFocus]);
  return _react["default"].createElement(_react["default"].Fragment, null, triggerElement, showTip && _react["default"].createElement(Tip, {
    onMouseEnter: function onMouseEnter() {
      return onHovered('tip', true);
    },
    onMouseLeave: function onMouseLeave() {
      return onHovered('tip', false);
    },
    position: triggerPosition,
    placement: placement,
    "data-testid": "balloon"
  }, content));
};

exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  content: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]).isRequired,
  placement: _propTypes["default"].oneOf(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']),
  children: _propTypes["default"].node.isRequired,

  /** Doesn't show Tooltip when hover children */
  disableFocus: _propTypes["default"].bool,

  /** Doesn't show Tooltip when focus children */
  disableHover: _propTypes["default"].bool
};
Tooltip.defaultProps = {
  placement: 'top',
  disableFocus: false,
  disableHover: false
};

var dynamicPositionTooltip = function dynamicPositionTooltip(placement, tooltip, setCallback) {
  if (tooltip.top - 5 < 0) {
    switch (placement) {
      case 'top':
        setCallback('bottom');
        break;

      case 'topLeft':
        setCallback('bottomLeft');
        break;

      case 'topRight':
        setCallback('bottomRight');
        break;

      case 'left':
        setCallback('leftTop');
        break;

      case 'right':
        setCallback('rightTop');
        break;

      case 'leftTop':
        setCallback('leftBottom');
        break;

      case 'rightTop':
        setCallback('rightBottom');
        break;

      default:
        break;
    }
  }

  if (tooltip.left - 5 < 0) {
    switch (placement) {
      case 'top':
        setCallback('topLeft');
        break;

      case 'bottom':
        setCallback('bottomLeft');
        break;

      case 'left':
        setCallback('bottomLeft');
        break;

      case 'leftTop':
        setCallback('topLeft');
        break;

      case 'leftBottom':
        setCallback('bottomLeft');
        break;

      case 'topRight':
        setCallback('topLeft');
        break;

      case 'bottomRight':
        setCallback('bottomLeft');
        break;

      default:
        break;
    }
  }

  if (tooltip.right + 20 > window.innerWidth) {
    switch (placement) {
      case 'top':
        setCallback('topRight');
        break;

      case 'bottom':
        setCallback('bottomRight');
        break;

      case 'right':
        setCallback('bottomRight');
        break;

      case 'rightTop':
        setCallback('topRight');
        break;

      case 'rightBottom':
        setCallback('bottomRight');
        break;

      default:
        break;
    }
  }

  if (tooltip.bottom + 5 > window.innerHeight) {
    switch (placement) {
      case 'bottom':
        setCallback('top');
        break;

      case 'bottomLeft':
        setCallback('topLeft');
        break;

      case 'bottomRight':
        setCallback('topRight');
        break;

      case 'right':
        setCallback('rightBottom');
        break;

      case 'left':
        setCallback('leftBottom');
        break;

      case 'leftTop':
        setCallback('leftBottom');
        break;

      case 'rightTop':
        setCallback('rightBottom');
        break;

      default:
        break;
    }
  }
};

var Tip = function Tip(_ref2) {
  var placement = _ref2.placement,
      props = _objectWithoutPropertiesLoose(_ref2, ["placement"]);

  var _useState6 = (0, _react.useState)(false),
      fade = _useState6[0],
      setFade = _useState6[1];

  var _useState7 = (0, _react.useState)(placement),
      dynamicPlacement = _useState7[0],
      setDynamicPlacement = _useState7[1];

  var tooltipElement = (0, _react.useRef)(null);
  var timerShow = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    timerShow.current = setTimeout(function () {
      return setFade(true);
    }, 50);
    var tooltipPosition = tooltipElement.current.getBoundingClientRect();

    var repositionTooltip = function repositionTooltip(pos) {
      setDynamicPlacement(pos);
    };

    dynamicPositionTooltip(dynamicPlacement, tooltipPosition, repositionTooltip);
    return function () {
      clearTimeout(timerShow.current);
    };
  }, [dynamicPlacement]);

  var component = _react["default"].createElement(_style.Balloon, _extends({
    ref: tooltipElement,
    fade: fade,
    placement: dynamicPlacement
  }, props));

  return _reactDom["default"].createPortal(component, document.querySelector('body'));
};