function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyled, CircleCheck, Svg, Circle, Label } from './style';
export var RadioButton = function RadioButton(_ref) {
  var className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "style", "label"]);

  return React.createElement(Wrapper, {
    className: className,
    style: style
  }, React.createElement(InputStyled, _extends({
    type: "radio"
  }, props)), React.createElement(Svg, {
    viewBox: "0 0 18 18",
    mlns: "http://www.w3.org/2000/svg"
  }, React.createElement(Circle, {
    strokeLocation: "inside",
    cx: "9",
    cy: "9",
    r: "8"
  }), React.createElement(CircleCheck, {
    cx: "9",
    cy: "9",
    r: "4",
    "data-testid": "checked-circle"
  })), label && React.createElement(Label, null, label));
};
RadioButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
RadioButton.defaultProps = {
  label: null
};