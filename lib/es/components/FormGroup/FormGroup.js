function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { Wrapper, LabelContainer, StyledLabel, LabelText, HelpLabel, InfoIcon, HelpText } from './style';
export var FormGroup = function FormGroup(_ref) {
  var htmlFor = _ref.htmlFor,
      disabled = _ref.disabled,
      label = _ref.label,
      helpLabel = _ref.helpLabel,
      tooltip = _ref.tooltip,
      helpText = _ref.helpText,
      error = _ref.error,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["htmlFor", "disabled", "label", "helpLabel", "tooltip", "helpText", "error", "children"]);

  return React.createElement(Wrapper, _extends({
    "data-testid": "wrapper"
  }, props), React.createElement(LabelContainer, {
    "data-testid": "label-container"
  }, React.createElement(StyledLabel, {
    htmlFor: htmlFor
  }, label && React.createElement(LabelText, {
    isDisabled: disabled,
    "data-testid": "label-text"
  }, label), helpLabel && React.createElement(HelpLabel, {
    isDisabled: disabled,
    "data-testid": "help-label"
  }, helpLabel)), tooltip && React.createElement(Tooltip, {
    placement: "topRight",
    content: tooltip
  }, React.createElement(InfoIcon, {
    icon: "error_outline"
  }))), children, helpText && React.createElement(HelpText, {
    error: error,
    "data-testid": "help-text"
  }, helpText));
};
FormGroup.propTypes = {
  /** Set focus to input with this id value */
  htmlFor: PropTypes.string,

  /** Change style to disabled */
  disabled: PropTypes.bool,

  /** Label text */
  label: PropTypes.string,

  /** Label help text */
  helpLabel: PropTypes.string,

  /** Display info icon with content to tooltip */
  tooltip: PropTypes.string,

  /** Set text to the bottom field for help or error text */
  helpText: PropTypes.string,

  /** Set error style on help text */
  error: PropTypes.bool
};
FormGroup.defaultProps = {
  htmlFor: null,
  disabled: null,
  label: null,
  helpLabel: null,
  tooltip: null,
  helpText: null,
  error: false
};