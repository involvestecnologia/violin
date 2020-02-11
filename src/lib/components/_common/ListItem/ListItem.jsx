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
  /** Add an icon to left item */
  icon: PropTypes.string,
  /** Change style to disabled */
  disabled: PropTypes.bool
};

ListItem.defaultProps = {
  icon: null,
  disabled: false
};
