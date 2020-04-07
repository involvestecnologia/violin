import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './style';

export const Container = (props) => (
  <StyledContainer {...props} />
);

Container.propTypes = {
  /** Set with 100% */
  fluid: PropTypes.bool
};

Container.defaultProps = {
  fluid: false
};
