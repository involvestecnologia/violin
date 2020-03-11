import React from 'react';
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
  disabled
}) => {
  const handleClear = (e) => {
    e.stopPropagation();
    clearSelect();
  };

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
          readOnly
        />
        {!!selected.value && <Value isDisabled={disabled}>{selected.label}</Value>}
        {(!selected.value && !!placeholder)
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
