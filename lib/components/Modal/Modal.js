"use strict";

exports.__esModule = true;
exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = require("./style");

var _Button = require("../Button");

var _idgen = _interopRequireDefault(require("../../utils/idgen"));

var _activeElement = _interopRequireDefault(require("../../utils/activeElement"));

var _ownerDocument = _interopRequireDefault(require("../../utils/ownerDocument"));

var _contains = _interopRequireDefault(require("../../utils/contains"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ModalWithPortal = function ModalWithPortal(_ref) {
  var open = _ref.open,
      onClose = _ref.onClose,
      children = _ref.children,
      actions = _ref.actions,
      title = _ref.title,
      disableBackdropClick = _ref.disableBackdropClick,
      disableEscapeKeyDown = _ref.disableEscapeKeyDown;
  var modalWrapperElement = (0, _react.useRef)(null);
  var modalCardElement = (0, _react.useRef)(null);
  var timerShow = (0, _react.useRef)(null);
  var targetElement = (0, _react.useMemo)(function () {
    return document.querySelector('body');
  });

  var _useState = (0, _react.useState)(null),
      triggerElement = _useState[0],
      setTriggerElement = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      fadeIn = _useState2[0],
      setFadeIn = _useState2[1];

  var onEscPress = function onEscPress(_ref2) {
    var key = _ref2.key;
    if (key === 'Escape') onClose();
  };

  var restoreLastFocus = function restoreLastFocus() {
    if (triggerElement) {
      triggerElement.focus();
      setTriggerElement(null);
    }
  };

  var autoFocus = function autoFocus() {
    var currentActiveElement = (0, _activeElement["default"])((0, _ownerDocument["default"])(_this));

    if (modalWrapperElement && !(0, _contains["default"])(modalWrapperElement, currentActiveElement)) {
      setTriggerElement(currentActiveElement);
      modalCardElement.current.focus();
    }
  };

  var enableFadeIn = function enableFadeIn() {
    timerShow.current = setTimeout(function () {
      return setFadeIn(true);
    }, 50);
  };

  var disableFadeIn = function disableFadeIn() {
    clearTimeout(timerShow.current);
    setFadeIn(false);
  };

  (0, _react.useEffect)(function () {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    document.body.onkeydown = open && !disableEscapeKeyDown ? onEscPress : null;

    if (open) {
      autoFocus();
      enableFadeIn();
    } else {
      restoreLastFocus();
    }

    return function () {
      return disableFadeIn();
    };
  }, [open]);

  var component = open && _react["default"].createElement(_style.ModalWrapper, {
    ref: modalWrapperElement,
    fadeIn: fadeIn,
    "data-testid": "modal-wrapper"
  }, _react["default"].createElement(_style.ModalBackdrop, {
    onClick: onClose,
    disableBackdropClick: disableBackdropClick,
    "data-testid": "modal-backdrop"
  }), _react["default"].createElement(_style.ModalCard, {
    ref: modalCardElement,
    tabIndex: "0",
    "data-testid": "modal-card"
  }, title && _react["default"].createElement(_style.ModalHeader, null, _react["default"].createElement(_style.ModalTitle, {
    size: "h6"
  }, title), _react["default"].createElement(_Button.Button, {
    icon: "close",
    secondary: true,
    onClick: onClose,
    "data-testid": "modal-close-button"
  })), _react["default"].createElement(_style.ModalContent, null, children), actions && _react["default"].createElement(_style.ModalFooter, null, actions.map(function (action) {
    return _react["default"].createElement(_react.Fragment, {
      key: "modal-action-" + (0, _idgen["default"])()
    }, action);
  }))));

  return _reactDom["default"].createPortal(component, targetElement);
}; // this was necessary because docz doesn't understand
// the props of a component from ReactDOM.createPortal
// Ref: https://github.com/doczjs/docz/issues/942


var Modal = function Modal(props) {
  return _react["default"].createElement(ModalWithPortal, props);
};

exports.Modal = Modal;
Modal.propTypes = {
  /** Makes modal visibile/hidden */
  open: _propTypes["default"].bool,

  /** Updates modal state */
  onClose: _propTypes["default"].func,

  /** Apply actions to modal footer */
  actions: _propTypes["default"].arrayOf(_propTypes["default"].element),

  /** Apply title to modal header */
  title: _propTypes["default"].string,

  /** Prevent backdrop click from closing the modal */
  disableBackdropClick: _propTypes["default"].bool,

  /** Prevent ESC key from closing the modal */
  disableEscapeKeyDown: _propTypes["default"].bool
};
Modal.defaultProps = {
  open: false,
  onClose: null,
  actions: null,
  title: null,
  disableBackdropClick: false,
  disableEscapeKeyDown: false
};