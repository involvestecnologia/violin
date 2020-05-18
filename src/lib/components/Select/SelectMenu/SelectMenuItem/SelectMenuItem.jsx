import React from 'react'
import PropTypes from 'prop-types';
import { Container } from './style';

export const SelectMenuItem = ({
  selected,
  highlight,
  children,
  ...props
}) => (
  <Container
    data-testid="select-menu-item"
    {...props}
    highlight={highlight}
    selected={selected}
  >
    {children}
  </Container>
)

SelectMenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  selected: PropTypes.bool,
  highlight: PropTypes.bool,
}

SelectMenuItem.defaultProps = {
  highlight: false,
  selected: false,
}
