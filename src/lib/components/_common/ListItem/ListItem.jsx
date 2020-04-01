/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledIcon } from './style';

export const ListItem = ({ children, icon, deepRef, ...props }) => (
  <StyledItem ref={deepRef} {...props}>
    {icon && <StyledIcon icon={icon} />}
    {children}
  </StyledItem>
);

ListItem.propTypes = {
  /** Add an icon to left item */
  icon: PropTypes.string,
  /** Change style to disabled */
  disabled: PropTypes.bool,
  deepRef: PropTypes.oneOfType([PropTypes.object])
};

ListItem.defaultProps = {
  icon: null,
  disabled: false,
  deepRef: null
};
