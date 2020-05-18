import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types';

export const TextHighLight = ({
  filter,
  children,
}) => {
  const [leftText, setLeftText] = useState('')
  const [middleText, setMiddleText] = useState(children)
  const [rightText, setRightText] = useState('')

  const ref = useCallback(() => {
    if (!children || !filter) return

    const index = children.toLowerCase().indexOf(filter.toLowerCase());
    setLeftText(`${children.substring(0, index)}`)
    setMiddleText(`${children.substring(index, index + filter.length)}` || children)
    setRightText(`${children.substring(index + filter.length)}`)
  }, [filter, children])

  return (
    <span ref={ref}>
      {leftText}
      {filter ? <mark>{middleText}</mark> : middleText}
      {rightText}
    </span>
  )
}

TextHighLight.propTypes = {
  children: PropTypes.string,
  filter: PropTypes.string,
}

TextHighLight.defaultProps = {
  children: '',
  filter: '',
}
