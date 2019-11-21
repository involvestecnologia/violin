import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './style';

export const ButtonLink = ({ color, ...props }) => <StyledLink hasColor={color} {...props} />

ButtonLink.propTypes = {
  color: PropTypes.oneOf(['white', 'primary', 'accent', 'done', 'error', 'alert', 'progress'])
};

ButtonLink.defaultProps = {
  color: 'primary'
};
