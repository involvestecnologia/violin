import React from 'react'
import PropTypes from 'prop-types'
import { Select } from './Select'
import { MultiSelect } from './MultiSelect'

export const SelectWrapper = ({ multiselect, ...props }) => (
  <>
    {multiselect ? <MultiSelect {...props} /> : <Select {...props} />}
  </>
)

SelectWrapper.propTypes = {
  multiselect: PropTypes.bool,
}

SelectWrapper.defaultProps = {
  multiselect: false,
}
