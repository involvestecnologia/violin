import React from 'react'
import PropTypes from 'prop-types'
import { StyledSelectMenuTitle } from './style'

export const SelectMenuTitle = ({ children }) => (
  <StyledSelectMenuTitle>{children}</StyledSelectMenuTitle>
)

SelectMenuTitle.propTypes = {
  children: PropTypes.string
}

SelectMenuTitle.defaultProps = {
  children: ''
}
