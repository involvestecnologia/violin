import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './style';

export const Container = (props) => (
  <StyledContainer {...props} />
);

Container.propTypes = {
  fluid: PropTypes.bool
};

Container.defaultProps = {
  fluid: false
};
