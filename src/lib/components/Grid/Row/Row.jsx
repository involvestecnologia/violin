import React from 'react';
import PropTypes from 'prop-types';
import { StyledRow } from './style';

export const Row = (props) => (
  <StyledRow {...props} />
);

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

Row.propTypes = {
  /** Change columns order */
  reverse: PropTypes.bool,
  /** Align columns to left */
  start: PropTypes.oneOf(breakpoints),
  /** Align columns to right */
  end: PropTypes.oneOf(breakpoints),
  /** Align columns to top */
  top: PropTypes.oneOf(breakpoints),
  /** Align columns to middle */
  middle: PropTypes.oneOf(breakpoints),
  /** Align columns to bottom */
  bottom: PropTypes.oneOf(breakpoints),
  /** Distribute columns with same aside margin */
  around: PropTypes.oneOf(breakpoints),
  /** Distribute columns to corner */
  between: PropTypes.oneOf(breakpoints)
};

Row.defaultProps = {
  reverse: false,
  start: null,
  end: null,
  top: null,
  middle: null,
  bottom: null,
  around: null,
  between: null
};
