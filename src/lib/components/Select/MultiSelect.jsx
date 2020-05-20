import React, { useState } from 'react'
import PropTypes from 'prop-types'
import idgen from '../../utils/idgen'
import { TextHighLight } from '../_common'
import { SelectBase } from './SelectBase'
import { SelectMenuItem, SelectMenuTitle } from './SelectMenu'

export const MultiSelect = ({
  autoFocus,
  placeholder,
  name,
  options,
  ...props
}) => {
  const [originalOptions] = useState([...options])
  const [clonedOptions, setClonedOptions] = useState([...options])

  return (
    <SelectBase
      {...props}
      autoFocus
      name={name}
      placeholder={placeholder}
      originalOptions={originalOptions}
      options={clonedOptions}
      setOptions={setClonedOptions}
    >
      {clonedOptions.map((option) => (
        <SelectMenuItem
          data-testid="select-menu-item"
          key={idgen()}
          selected={option.selected}
        >
          {
            option.title
              ? <SelectMenuTitle>{option.title}</SelectMenuTitle>
              : <TextHighLight>{option.label}</TextHighLight>
          }
        </SelectMenuItem>
      ))}
    </SelectBase>
  )
}

MultiSelect.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  name: PropTypes.string,
  autoFocus: PropTypes.bool
};

MultiSelect.defaultProps = {
  placeholder: '',
  options: [],
  name: '',
  autoFocus: null
};
