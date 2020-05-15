import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types';
import { SelectMenuItemContainer, SelectMenuTitle } from './style';

const SelectMenuItem = ({
  title,
  label,
  selected,
  filter,
  highlight,
  ...props
}) => {
  const [leftText, setLeftText] = useState('')
  const [middleText, setMiddleText] = useState(label)
  const [rightText, setRightText] = useState('')

  const ref = useCallback(() => {
    if (!label || !filter) return

    const index = label.toLowerCase().indexOf(filter.toLowerCase());
    setLeftText(`${label.substring(0, index)}`)
    setMiddleText(`${label.substring(index, index + filter.length)}` || label)
    setRightText(`${label.substring(index + filter.length)}`)
  }, [filter, label])

  return (
    <>
      {title && <SelectMenuTitle data-testid="select-menu-item">{title}</SelectMenuTitle>}
      {!title && (
        <SelectMenuItemContainer
          {...props}
          highlight={highlight}
          selected={selected}
        >
          <span ref={ref}>
            {leftText}
            {filter ? <mark>{middleText}</mark> : middleText}
            {rightText}
          </span>
        </SelectMenuItemContainer>
      )}
    </>
  )
}

SelectMenuItem.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  filter: PropTypes.string,
  selected: PropTypes.bool,
  highlight: PropTypes.bool,
}

SelectMenuItem.defaultProps = {
  title: '',
  label: '',
  filter: '',
  highlight: false,
  selected: false,
}

export default SelectMenuItem
