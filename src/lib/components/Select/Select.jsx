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
  searchable,
  disabled
}) => {
  const [options, setOptions] = useState(Array.from(optionsList));
  const [selected, setSelected] = useState({});
  const [focused, setFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  const menuRef = useRef(null);

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
    handleMenuOpen(!menuOpen);
    focusSelect();
  };

  const selectOption = (optionValue) => {
    const updateSelected = setSelectOption(options, optionValue, setSelected);
    setOptions(updateSelected);
    handleMenuOpen(false);
    focusSelect();
  };

  const clearSelect = () => {
    setSelected({});
    selectOption(null);
  }

  const onTyping = () => {
    if (!menuOpen) setMenuOpen(true);
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
    const closeOnClickOut = (event) => {
      if (focused) {
        const hasMenu = menuRef.current;
        const clickedSelect = selectRef.current.contains(event.target);
        const clickedMenu = hasMenu && menuRef.current.contains(event.target);

        const isClickedOut = (hasMenu && (!clickedSelect && !clickedMenu)) || !clickedSelect;

        if (isClickedOut) {
          blurSelect();
        }
      }
    };

    document.addEventListener('click', closeOnClickOut, true);
    return () => {
      document.removeEventListener('click', closeOnClickOut, true);
    }
  }, [focused]);

  return (
    <Container ref={selectRef}>
      <InputSelect
        isFocused={focused}
        onMouseDown={focusAndToggleMenu}
        inputRef={inputRef}
        onFocus={focusSelect}
        selected={selected}
        placeholder={placeholder}
        clearSelect={clearSelect}
        isSearchable={searchable}
        onTyping={onTyping}
        disabled={disabled}
      />
      {menuOpen && (
        <DropdownSelect
          options={options}
          onSelect={selectOption}
          menuRef={menuRef}
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
  searchable: PropTypes.bool,
  disabled: PropTypes.bool
};

Select.defaultProps = {
  placeholder: null,
  name: null,
  defaultValue: null,
  searchable: false,
  disabled: false
};
