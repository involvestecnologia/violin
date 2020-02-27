import React, { useRef, useState, useEffect } from 'react';
import {
  StyledSelect,
  Filter,
  Value,
  Placeholder,
  Controls,
  ArrowDropdown,
  Input
} from './style';

export const Select = ({ placeholder, ...props }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  const focusSelect = (e) => {
    e.preventDefault();
    setFocused(true);
    inputRef.current.focus();
  }
  const blurSelect = () => {
    setFocused(false);
  }

  useEffect(() => {
    const closeOnOut = (e) => {
      if (!selectRef.current.contains(e.target)) {
        blurSelect();
      }
    };

    document.addEventListener('click', closeOnOut);
    return () => {
      document.removeEventListener('click', closeOnOut);
    }
  }, [focused]);

  return (
    <StyledSelect
      ref={selectRef}
      isFocused={focused}
      onMouseDown={focusSelect}
    >
      <Filter>
        <Input
          type="text"
          ref={inputRef}
          onFocus={focusSelect}
          onBlur={blurSelect}
          readOnly
        />
        {!!value && <Value>{value}</Value>}
        {(!value && !!placeholder) && <Placeholder>{placeholder}</Placeholder>}
      </Filter>
      <Controls>
        <ArrowDropdown icon="arrow_drop_down" />
      </Controls>
      <input type="hidden" value={value} />
    </StyledSelect>
  )
};
