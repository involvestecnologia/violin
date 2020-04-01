import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import {
  StyledSelect, Filter, Input, Value, Placeholder, Controls, ArrowDropdown, SearchIcon
} from './style';

const InputSelect = ({
  id,
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
  error,
  disabled
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [widthInput, setWidthInput] = useState(1);
  const [showClearButton, setShowClearButton] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [showValue, setShowValue] = useState(false);

  const resetInput = () => {
    setWidthInput(1);
    setSearchTerm('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    if (searchTerm.length > 0) {
      resetInput();
      inputRef.current.focus();
    } else {
      clearSelect();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMouseDown = (e) => {
    onMouseDown(e);
    resetInput();
  };

  useEffect(() => {
    setWidthInput(inputRef.current.scrollWidth);
    onTyping(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    resetInput();
  }, [isFocused, selected]);

  useEffect(() => {
    if (!isMenuOpen) resetInput();
  }, [isMenuOpen]);

  useEffect(() => {
    setShowPlaceholder(!selected.value && !!placeholder && !searchTerm.length);
    setShowValue(!!selected.value && !searchTerm.length);
    setShowClearButton((selected.value || searchTerm.length > 0) && isFocused);
  }, [selected, searchTerm, placeholder, isFocused]);

  useEffect(() => {
    const handleKeydownInput = (e) => {
      const spaceKey = e.keyCode === 32;

      if (spaceKey && searchTerm.trim().length > 0) {
        e.stopPropagation();
      }
    };
    inputRef.current.addEventListener('keydown', handleKeydownInput);

    return () => {
      inputRef.current.removeEventListener('keydown', handleKeydownInput);
    };
  }, [searchTerm]);

  return (
    <StyledSelect
      isFocused={isFocused}
      onMouseDown={handleMouseDown}
      isDisabled={disabled}
      error={error}
      data-testid="select-input"
    >
      <Filter>
        {isSearchable && <SearchIcon isFocused={isFocused} icon="search" />}
        <Input
          type="text"
          id={id}
          ref={inputRef}
          onFocus={onFocus}
          disabled={disabled}
          value={searchTerm}
          onChange={handleChange}
          onMouseDown={(e) => e.stopPropagation()}
          readOnly={!isSearchable}
          widthInput={widthInput}
          data-testid="input-select-filter"
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
            data-testid="input-select-clear"
          />
        )}
      </Controls>
    </StyledSelect>
  );
};

InputSelect.propTypes = {
  id: PropTypes.string,
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
  isMenuOpen: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

InputSelect.defaultProps = {
  id: null
}

export default InputSelect;
