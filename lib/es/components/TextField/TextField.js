function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../index';
import { Input, Label, HelpLabel, HelpText, LabelContainer, LabelText, InfoIcon } from './style';
export var TextField = function TextField(_ref) {
  var label = _ref.label,
      helpLabel = _ref.helpLabel,
      helpText = _ref.helpText,
      id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      tooltip = _ref.tooltip,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "helpLabel", "helpText", "id", "error", "disabled", "tooltip"]);

  return React.createElement("div", null, (label || helpLabel || tooltip) && React.createElement(LabelContainer, null, React.createElement(Label, {
    htmlFor: id
  }, React.createElement(LabelText, {
    isDisabled: disabled
  }, label), helpLabel && React.createElement(HelpLabel, null, helpLabel)), tooltip && React.createElement(Tooltip, {
    placement: "topRight",
    content: tooltip
  }, React.createElement(InfoIcon, {
    icon: "error_outline"
  }))), React.createElement(Input, _extends({
    id: id,
    error: error,
    disabled: disabled
  }, props)), helpText && React.createElement(HelpText, {
    error: error
  }, helpText));
};
TextField.propTypes = {
  label: PropTypes.string,
  helpLabel: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'tel', 'url', 'datetime-local', 'date', 'search', 'month', 'time', 'week', 'currency']),
  small: PropTypes.bool,
  large: PropTypes.bool,
  id: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,

  /** Shows an icon width tooltip info */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
TextField.defaultProps = {
  label: null,
  helpLabel: null,
  helpText: null,
  placeholder: null,
  type: 'text',
  small: false,
  large: false,
  id: null,
  error: false,
  disabled: false,
  tooltip: null
};