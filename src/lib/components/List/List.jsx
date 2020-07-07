import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { withArrowNavigation } from './withArrowNavigation'
import { ListCard } from './ListCard'

export const List = forwardRef(({ children, ...props }, ref) => {
  return (
    <ListCard ref={ref} {...props}>{children}</ListCard>
  )
})

export const ListWithArrowNavigation = withArrowNavigation(List)

List.propTypes = {
  children: PropTypes.node
}

List.defaultProps = {
  children: null
}
