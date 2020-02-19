import React from 'react';
import PropTypes from 'prop-types';
import { WrapperIcon } from './style';

export const Icon = ({ icon, ...props }) => (
  <WrapperIcon {...props}>{icon}</WrapperIcon>
)

Icon.propTypes = {
  /** Icon name from [Material Icons](https://material.io/resources/icons/?style=round) library */
  icon: PropTypes.string.isRequired,
  outlined: PropTypes.bool,
};

Icon.defaultProps = {
  outlined: false
};
