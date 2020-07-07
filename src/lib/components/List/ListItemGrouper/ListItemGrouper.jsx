import React from 'react'
import PropTypes from 'prop-types'
import { StyledListItemGrouper } from './styles'

export const ListItemGrouper = ({ children, ...props }) => {
  return (
    <StyledListItemGrouper {...props}>{children}</StyledListItemGrouper>
  )
}

ListItemGrouper.propTypes = {
  children: PropTypes.node,
}

ListItemGrouper.defaultProps = {
  children: null,
}
