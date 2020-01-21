import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './style';

export const Link = ({ external, ...props }) => <StyledLink {...props} target={external ? '_blank' : '_self'} />

Link.propTypes = {
  invert: PropTypes.bool,
  external: PropTypes.bool
};

Link.defaultProps = {
  invert: false,
  external: false
};
