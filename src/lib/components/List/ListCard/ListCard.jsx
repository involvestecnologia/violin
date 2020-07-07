import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { StyledListCard } from './styles'

export const ListCard = forwardRef(({ children, fadeIn, ...props }, ref) => {
  return (
    <StyledListCard data-testid="test-list-card" fadeIn={fadeIn} ref={ref} {...props}>
      {children}
    </StyledListCard>
  )
})

ListCard.propTypes = {
  children: PropTypes.node,
  fadeIn: PropTypes.bool,
}

ListCard.defaultProps = {
  children: null,
  fadeIn: false,
}
