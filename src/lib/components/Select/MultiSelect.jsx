import React, { useState } from 'react'
import PropTypes from 'prop-types'
import idgen from '../../utils/idgen'
import { TextHighLight } from '../_common'
import { formatOptionsList } from './Select.utils'
import { SelectBase } from './SelectBase'
import { SelectMenuItem, SelectMenuTitle } from './SelectMenu'

export const MultiSelect = ({
  autoFocus,
  placeholder,
  name,
  options,
  value: defaultValue,
  ...props
}) => {
  const [originalOptions] = useState([...options])
  const [clonedOptions, setClonedOptions] = useState(formatOptionsList([...options]))

  return (
    <SelectBase
      {...props}
      name={name}
      autoFocus={autoFocus}
      placeholder={placeholder}
      options={clonedOptions}
      originalOptions={originalOptions}
      value={defaultValue}
      setOptions={setClonedOptions}
    >
      {clonedOptions.map((option) => {
        if (option.title) {
          return <SelectMenuTitle key={idgen()} data-testid="select-menu-item">{option.title}</SelectMenuTitle>
        }
        return (
          <SelectMenuItem
            data-testid="select-menu-item"
            key={idgen()}
            selected={option.selected}
            value={{ label: option.label, value: option.value }}
          >
            <TextHighLight>{option.label}</TextHighLight>
          </SelectMenuItem>
        )
      })}
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
  autoFocus: PropTypes.bool,
  value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
};

MultiSelect.defaultProps = {
  placeholder: '',
  options: [],
  name: '',
  autoFocus: false,
  value: null,
};
