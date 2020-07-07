import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem, StyledListItemIcon } from './style';

export const ListItem = ({
  children,
  icon,
  highlighted,
  selected,
  selectable,
  deepRef,
  ...props
}) => (
  <StyledListItem
    highlighted={highlighted}
    selected={selected}
    selectable={selectable}
    ref={deepRef}
    {...props}
  >
    {icon && <StyledListItemIcon icon={icon} data-testid="test-list-item-icon" />}
    {children}
  </StyledListItem>
);

ListItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  selected: PropTypes.bool,
  selectable: PropTypes.bool,
  deepRef: PropTypes.oneOfType([PropTypes.object]),
};

ListItem.defaultProps = {
  children: null,
  icon: null,
  disabled: false,
  highlighted: false,
  selected: false,
  selectable: false,
  deepRef: null
};
