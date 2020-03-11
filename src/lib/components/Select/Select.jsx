import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputSelect from './InputSelect';
import { Container } from './style';
import DropdownSelect from './DropdownSelect';
import { setSelectOption } from './Select.utils';

export const Select = ({
  placeholder,
  options: optionsList,
  name,
  defaultValue,
  disabled
}) => {
  const [options, setOptions] = useState(Array.from(optionsList));
  const [selected, setSelected] = useState({});
  const [focused, setFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  const handleMenuOpen = (open) => {
    if (!disabled) setMenuOpen(open);
  }

  const handleFocused = (focus) => {
    if (!disabled) setFocused(focus);
  }

  const focusSelect = () => {
    inputRef.current.focus();
    handleFocused(true);
  };

  const blurSelect = () => {
    handleFocused(false);
    handleMenuOpen(false);
  };

  const focusAndToggleMenu = (e) => {
    if (e) e.preventDefault();
    focusSelect();
    handleMenuOpen(!menuOpen);
  };

  const selectOption = (optionValue) => {
    const updateSelected = setSelectOption(options, optionValue, setSelected);
    setOptions(updateSelected);
    handleMenuOpen(false);
  };

  const clearSelect = () => {
    setSelected({});
    selectOption(null);
  }

  useEffect(() => {
    const updateSelected = setSelectOption(options, defaultValue, setSelected);
    setOptions(updateSelected);
  }, [defaultValue]);

  useEffect(() => {
    const openMenuKeyboard = (e) => {
      const spaceKey = focused && e.keyCode === 32;
      const upKey = focused && e.keyCode === 38;
      const downKey = focused && e.keyCode === 40;
      const tabKey = focused && e.keyCode === 9;
      const escKey = focused && e.keyCode === 27;
      const enterKey = focused && e.keyCode === 13;

      if (spaceKey || (!menuOpen && upKey) || (!menuOpen && downKey) || (!menuOpen && enterKey)) {
        e.preventDefault();
        handleMenuOpen(!menuOpen);
      }

      if (menuOpen && escKey) handleMenuOpen(!menuOpen);

      if (tabKey) blurSelect();
    };
    document.addEventListener('keydown', openMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', openMenuKeyboard);
    }
  }, [focused, menuOpen]);

  useEffect(() => {
    const closeOnOut = (event) => {
      if (focused) {
        const isClickedOut = !selectRef.current.contains(event.target);
        if (isClickedOut) blurSelect();
      }
    };

    document.addEventListener('click', closeOnOut);
    return () => {
      document.removeEventListener('click', closeOnOut);
    }
  }, [focused]);

  return (
    <Container ref={selectRef}>
      <InputSelect
        focused={focused}
        onMouseDown={focusAndToggleMenu}
        inputRef={inputRef}
        onFocus={focusSelect}
        selected={selected}
        placeholder={placeholder}
        clearSelect={clearSelect}
        disabled={disabled}
      />
      {menuOpen && (
        <DropdownSelect
          options={options}
          onSelect={selectOption}
        />
      )}
      <input type="hidden" name={name} value={selected.value || ''} disabled={disabled} />
    </Container>
  )
};

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool
};

Select.defaultProps = {
  placeholder: null,
  name: null,
  defaultValue: null,
  disabled: false
};
