function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledButton, HiddenInput } from './style';
export var ToggleButton = function ToggleButton(_ref) {
  var multiple = _ref.multiple,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["multiple", "style", "className", "children"]);

  return React.createElement(Wrapper, {
    "data-testid": "wrapper"
  }, React.createElement(HiddenInput, _extends({
    "data-testid": "hidden-input",
    type: multiple ? 'checkbox' : 'radio'
  }, props)), React.createElement(StyledButton, {
    "data-testid": "styled-button",
    style: style,
    className: className
  }, children));
};
ToggleButton.propTypes = {
  /** Change to checkbox behavior */
  multiple: PropTypes.bool,

  /** Change style button */
  style: PropTypes.oneOfType([PropTypes.object]),

  /** Add css class to change button style */
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};
ToggleButton.defaultProps = {
  multiple: false,
  style: null,
  className: null,
  checked: null,
  disabled: null
};