import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  rowHeight,
  padding,
  StyledTextArea,
} from './style';

export const TextArea = ({
  rows,
  value,
  autoHeight,
  maxRow,
  ...props
}) => {
  const elementRef = useCallback((node) => {
    if (!autoHeight || !node) return

    const element = node
    element.style.height = `${(rowHeight * rows) + (padding * 2)}px`;
    element.style.height = `${node.scrollHeight}px`;
  }, [value])

  return (
    <StyledTextArea
      ref={elementRef}
      rows={rows}
      maxRow={maxRow}
      value={value}
      {...props}
    />
  )
}

TextArea.propTypes = {
  rows: PropTypes.number,
  value: PropTypes.string,
  autoHeight: PropTypes.bool,
  maxRow: PropTypes.number,
}

TextArea.defaultProps = {
  rows: 3,
  value: '',
  autoHeight: false,
  maxRow: null,
};
