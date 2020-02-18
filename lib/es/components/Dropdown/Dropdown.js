function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import ReactDOM from 'react-dom';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledCard, Trigger } from './style';
import offsetElementPosition from '../../utils/offsetElementPosition';
export var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      trigger = _ref.trigger,
      preventClose = _ref.preventClose,
      placement = _ref.placement,
      open = _ref.open;

  var _useState = useState(false),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  var _useState2 = useState({}),
      triggerPosition = _useState2[0],
      setTriggerPosition = _useState2[1];

  var triggerRef = useRef({});

  var handleTriggerPosition = function handleTriggerPosition() {
    var position = offsetElementPosition(triggerRef.current);
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

  useEffect(function () {
    if (open) {
      openDropdown();
    } else {
      setCollapsed(false);
    }
  }, [open]);
  useEffect(function () {
    window.addEventListener('resize', handleTriggerPosition);
    return function () {
      window.removeEventListener('resize', handleTriggerPosition);
    };
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(Trigger, {
    ref: triggerRef,
    onClick: openDropdown
  }, trigger), collapsed && React.createElement(DropdownCard, {
    closeDropdown: closeDropdown,
    triggerPosition: triggerPosition,
    onClick: closeDropdown,
    placement: placement
  }, children));
};
Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,

  /** Prevent dropdown close when clicked */
  preventClose: PropTypes.bool,

  /** Use with preventClose for managing status Dropdown */
  open: PropTypes.bool,

  /** Change position dropdown */
  placement: PropTypes.oneOf(['left', 'right'])
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

  var _useState3 = useState(false),
      fadeIn = _useState3[0],
      setFadeIn = _useState3[1];

  var _useState4 = useState({}),
      position = _useState4[0],
      setPosition = _useState4[1];

  var timerShow = useRef(null);
  var cardRef = useRef(null);

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

  useEffect(function () {
    timerShow.current = setTimeout(function () {
      return setFadeIn(true);
    }, 50);
    document.addEventListener('click', listenClose);
    return function () {
      clearTimeout(timerShow.current);
      document.removeEventListener('click', listenClose);
    };
  }, []);
  useEffect(function () {
    handlePosition();
    window.addEventListener('scroll', handlePosition);
    return function () {
      window.removeEventListener('scroll', handlePosition);
    };
  }, [triggerPosition]);
  var component = React.createElement(StyledCard, _extends({
    ref: cardRef,
    fadeIn: fadeIn,
    position: position
  }, props));
  return ReactDOM.createPortal(component, document.querySelector('body'));
};