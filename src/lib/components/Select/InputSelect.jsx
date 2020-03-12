import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import {
  StyledSelect, Filter, Input, Value, Placeholder, Controls, ArrowDropdown
} from './style';

const InputSelect = ({
  isFocused,
  onMouseDown,
  inputRef,
  onFocus,
  selected,
  clearSelect,
  placeholder,
  isSearchable,
  isTyping,
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
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleMouseDown = (e) => {
    onMouseDown(e);
    resetInput();
  };

  useEffect(() => {
    if (value.length > 0) {
      setWidthInput(inputRef.current.scrollWidth);
      isTyping();
    }
  }, [value]);

  useEffect(() => {
    resetInput();
  }, [selected]);

  useEffect(() => {
    if (!isFocused) resetInput();
  }, [isFocused]);

  return (
    <StyledSelect
      isFocused={isFocused}
      onMouseDown={handleMouseDown}
      isDisabled={disabled}
    >
      <Filter>
        <Input
          type="text"
          ref={inputRef}
          onFocus={onFocus}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          onMouseDown={(e) => e.stopPropagation()}
          readOnly={!isSearchable}
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
            tabIndex="-1"
          />
        )}
      </Controls>
    </StyledSelect>
  );
};

InputSelect.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onFocus: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.object]).isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  clearSelect: PropTypes.func.isRequired,
  isSearchable: PropTypes.bool.isRequired,
  isTyping: PropTypes.func.isRequired
};

export default InputSelect;
