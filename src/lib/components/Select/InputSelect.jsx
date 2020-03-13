import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import {
  StyledSelect, Filter, Input, Value, Placeholder, Controls, ArrowDropdown, SearchIcon
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
  isMenuOpen,
  onTyping,
  disabled
}) => {
  const [valueFilter, setValueFilter] = useState('');
  const [widthInput, setWidthInput] = useState(1);
  const [showClearButton, setShowClearButton] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [showValue, setShowValue] = useState(false);

  const resetInput = () => {
    setWidthInput(1);
    setValueFilter('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    if (valueFilter.length > 0) {
      resetInput();
      inputRef.current.focus();
    } else {
      clearSelect();
    }
  };

  const handleChange = (e) => {
    setValueFilter(e.target.value);
  };

  const handleMouseDown = (e) => {
    onMouseDown(e);
    resetInput();
  };

  useEffect(() => {
    setWidthInput(inputRef.current.scrollWidth);
    onTyping(valueFilter);
  }, [valueFilter]);

  useEffect(() => {
    resetInput();
  }, [isFocused, selected]);

  useEffect(() => {
    if (!isMenuOpen) resetInput();
  }, [isMenuOpen]);

  useEffect(() => {
    setShowPlaceholder(!selected.value && !!placeholder && !valueFilter.length);
    setShowValue(!!selected.value && !valueFilter.length);
    setShowClearButton(selected.value || valueFilter.length > 0);
  }, [selected, valueFilter, placeholder]);

  useEffect(() => {
    const handleKeydownInput = (e) => {
      const spaceKey = e.keyCode === 32;

      if (spaceKey && valueFilter.trim().length > 0) {
        e.stopPropagation();
      }
    };
    inputRef.current.addEventListener('keydown', handleKeydownInput);

    return () => {
      inputRef.current.removeEventListener('keydown', handleKeydownInput);
    };
  }, [valueFilter]);

  return (
    <StyledSelect
      isFocused={isFocused}
      onMouseDown={handleMouseDown}
      isDisabled={disabled}
    >
      <Filter>
        {isSearchable && <SearchIcon isFocused={isFocused} icon="search" />}
        <Input
          type="text"
          ref={inputRef}
          onFocus={onFocus}
          disabled={disabled}
          value={valueFilter}
          onChange={handleChange}
          onMouseDown={(e) => e.stopPropagation()}
          readOnly={!isSearchable}
          widthInput={widthInput}
        />
        {showValue && (
          <Value
            isFocused={isFocused}
            isSearchable={isSearchable}
            isDisabled={disabled}
          >
            {selected.label}
          </Value>
        )}
        {showPlaceholder && (
          <Placeholder
            isFocused={isFocused}
            isSearchable={isSearchable}
            isDisabled={disabled}
          >
            {placeholder}
          </Placeholder>
        )}
      </Filter>
      <Controls isDisabled={disabled}>
        {!showClearButton && <ArrowDropdown icon="arrow_drop_down" />}
        {showClearButton && (
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
  onTyping: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};

export default InputSelect;
