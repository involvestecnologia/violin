import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledSelect, Filter, Input, Value, Placeholder, Controls, ArrowDropdown
} from './style';

const InputSelect = ({ focused, onMouseDown, inputRef, onFocus, selected, placeholder }) => (
  <StyledSelect
    isFocused={focused}
    onMouseDown={onMouseDown}
  >
    <Filter>
      <Input
        type="text"
        ref={inputRef}
        onFocus={onFocus}
        readOnly
      />
      {!!selected.value && <Value>{selected.label}</Value>}
      {(!selected.value && !!placeholder) && <Placeholder>{placeholder}</Placeholder>}
    </Filter>
    <Controls>
      <ArrowDropdown icon="arrow_drop_down" />
    </Controls>
  </StyledSelect>
);

InputSelect.propTypes = {
  focused: PropTypes.bool.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  inputRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onFocus: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.object]),
  placeholder: PropTypes.string
};

InputSelect.defaultProps = {
  selected: null,
  placeholder: null
}

export default InputSelect;
