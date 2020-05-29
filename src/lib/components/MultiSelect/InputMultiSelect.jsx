import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import {
  StyledSelect, Filter, Input, Value, Placeholder, Controls, ArrowDropdown, SearchIcon
} from './style';

const InputMultiSelect = ({
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
    setShowPlaceholder(!selected.length && !!placeholder && !searchTerm.length);
    setShowValue(!!selected.length && !searchTerm.length);
    setShowClearButton((selected.length || searchTerm.length > 0) && isFocused);
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
            {selected.length} selecionados
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
            type="button"
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

InputMultiSelect.propTypes = {
  id: PropTypes.string,
  isFocused: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onFocus: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      selected: PropTypes.bool,
    })
  ),
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  clearSelect: PropTypes.func.isRequired,
  isSearchable: PropTypes.bool.isRequired,
  onTyping: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

InputMultiSelect.defaultProps = {
  id: null,
  selected: [],
}

export default InputMultiSelect;
