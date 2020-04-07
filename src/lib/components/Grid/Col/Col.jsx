import React from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from './style';

export const Col = (props) => (
  <StyledCol {...props} />
);

const arrayCols = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const arrayOffset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Col.propTypes = {
  xs: PropTypes.oneOf(arrayCols),
  sm: PropTypes.oneOf(arrayCols),
  md: PropTypes.oneOf(arrayCols),
  lg: PropTypes.oneOf(arrayCols),
  xl: PropTypes.oneOf(arrayCols),
  xsOffset: PropTypes.oneOf(arrayOffset),
  smOffset: PropTypes.oneOf(arrayOffset),
  mdOffset: PropTypes.oneOf(arrayOffset),
  lgOffset: PropTypes.oneOf(arrayOffset),
  xlOffset: PropTypes.oneOf(arrayOffset)
};

Col.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  xsOffset: null,
  smOffset: null,
  mdOffset: null,
  lgOffset: null,
  xlOffset: null
};
