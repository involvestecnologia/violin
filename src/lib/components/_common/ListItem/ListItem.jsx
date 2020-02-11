import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledIcon } from './style';

export const ListItem = ({ children, icon, ...props }) => (
  <StyledItem {...props}>
    {icon && <StyledIcon icon={icon} />}
    {children}
  </StyledItem>
);

ListItem.propTypes = {
  icon: PropTypes.string
};

ListItem.defaultProps = {
  icon: null
};
