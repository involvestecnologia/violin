import React from 'react'
import PropTypes from 'prop-types';
import { SelectMenuItemContainer, SelectMenuTitle } from './style';

const SelectMenuItem = ({
  title,
  selected,
  highlight,
  children,
  ...props
}) => (
  <>
    {title && <SelectMenuTitle data-testid="select-menu-item">{title}</SelectMenuTitle>}
    {!title && (
      <SelectMenuItemContainer
        {...props}
        highlight={highlight}
        selected={selected}
      >
        {children}
      </SelectMenuItemContainer>
    )}
  </>
)

SelectMenuItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  selected: PropTypes.bool,
  highlight: PropTypes.bool,
}

SelectMenuItem.defaultProps = {
  title: '',
  children: [],
  highlight: false,
  selected: false,
}

export default SelectMenuItem
