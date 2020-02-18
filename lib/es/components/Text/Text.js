import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './style';
export var Text = function Text(props) {
  return React.createElement(StyledText, props);
};
Text.propTypes = {
  small: PropTypes.bool,
  caption: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool
};
Text.defaultProps = {
  small: false,
  caption: false,
  disabled: false,
  error: false,
  bold: false,
  italic: false
};