import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import {
  StyledSelect, Filter, Input, Value, Placeholder, Controls, ArrowDropdown
} from './style';

const InputSelect = ({
  focused,
  onMouseDown,
  inputRef,
  onFocus,
  selected,
  clearSelect,
  placeholder,
  searchable,
  disabled
}) => {
  const [value, setValue] = useState('');
  const [widthInput, setWidthInput] = useState(1);
  
  const handleClear = (e) => {
    e.stopPropagation();
    clearSelect();
  };

  const resetInput = () => {
    setWidthInput(1);
    setValue('');
  }

  useEffect(() => {
    setWidthInput(inputRef.current.scrollWidth);
  }, [value]);

  return (
    <StyledSelect
      isFocused={focused}
      onMouseDown={onMouseDown}
      isDisabled={disabled}
    >
      <Filter>
        <Input
          type="text"
          ref={inputRef}
          onFocus={onFocus}
          disabled={disabled}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={resetInput}
          readOnly={!searchable}
          widthInput={widthInput}
        />
        {!!selected.value && !value.length && <Value isDisabled={disabled}>{selected.label}</Value>}
        {(!selected.value && !!placeholder && !value.length)
          && <Placeholder isDisabled={disabled}>{placeholder}</Placeholder>}
      </Filter>
      <Controls isDisabled={disabled}>
        {!selected.value && <ArrowDropdown icon="arrow_drop_down" />}
        {selected.value && (
          <Button
            small
            secondary
            icon="clear"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleClear}
            disabled={disabled}
          />
        )}
      </Controls>
    </StyledSelect>
  );
};

InputSelect.propTypes = {
  focused: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onFocus: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

InputSelect.defaultProps = {
  selected: null,
  placeholder: null,
  disabled: false
}

export default InputSelect;
