function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyled, CheckedIcon, IndeterminateIcon, Svg, Rect, Label } from './style';
export var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "style", "label", "disabled"]);

  return React.createElement(Wrapper, {
    className: className,
    style: style,
    disabled: disabled
  }, React.createElement(InputStyled, _extends({
    type: "checkbox",
    disabled: disabled
  }, props)), React.createElement(Svg, {
    viewBox: "0 0 18 18",
    mlns: "http://www.w3.org/2000/svg"
  }, React.createElement(Rect, {
    strokeLocation: "inside",
    x: "1",
    y: "1",
    rx: "2",
    ry: "2",
    strokeWidth: "2"
  }), React.createElement(CheckedIcon, {
    d: "M4 9L7 12L14 5",
    "data-testid": "checked-icon"
  }), React.createElement(IndeterminateIcon, {
    d: "M5 9L13 9"
  })), label && React.createElement(Label, null, label));
};
Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool
};
Checkbox.defaultProps = {
  label: null,
  disabled: false
};