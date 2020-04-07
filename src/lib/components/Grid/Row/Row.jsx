import React from 'react';
import PropTypes from 'prop-types';
import { StyledRow } from './style';

export const Row = (props) => (
  <StyledRow {...props} />
);

Row.propTypes = {
  reverse: PropTypes.bool,
  start: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  end: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  top: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  middle: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  bottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  around: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  between: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
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
