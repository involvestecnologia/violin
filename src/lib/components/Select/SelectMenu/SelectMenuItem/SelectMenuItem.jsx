import React from 'react'
import PropTypes from 'prop-types';
import { Container } from './style';

export const SelectMenuItem = ({
  selected,
  highlight,
  children,
  value,
  ...props
}) => (
  <Container
    data-testid="select-menu-item"
    {...props}
    highlight={highlight}
    selected={selected}
    value={value}
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
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })
}

SelectMenuItem.defaultProps = {
  highlight: false,
  selected: false,
  value: {
    value: '',
    label: ''
  }
}
