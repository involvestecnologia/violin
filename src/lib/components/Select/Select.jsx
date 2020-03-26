import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputSelect from './InputSelect';
import { Container } from './style';
import DropdownSelect from './DropdownSelect';
import { selectOption, formatOptionsList, filterOptions } from './Select.utils';

export const Select = ({
  placeholder,
  options: originalOptions,
  name,
  defaultValue,
  searchable,
  error,
  emptyMessage,
  async,
  loadOptions,
  debounce,
  disabled
}) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [focused, setFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [loadSearching, setLoadingSearching] = useState(false);
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  const menuRef = useRef(null);
  const timerRef = useRef(null);

  const handleMenuOpen = (open) => {
    if (disabled) return;
    setMenuOpen(open);
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

  const onSelectOption = (optionValue) => {
    const updateSelected = selectOption(options, optionValue, setSelected);
    setOptions(updateSelected);
    handleMenuOpen(false);
    focusSelect();
  };

  const clearSelect = () => {
    setSelected({});
    onSelectOption(null);
  }

  const formatAndSetOptions = (array) => {
    const formatedList = formatOptionsList(array);
    setOptions(formatedList);
  };

  const onTyping = (value) => {
    if (!menuOpen && value.length > 0) handleMenuOpen(true);
    setFilterValue(value);
  }

  useEffect(() => {
    formatAndSetOptions(originalOptions);
  }, [originalOptions]);

  useEffect(() => {
    if (defaultValue) {
      const updateSelected = selectOption(options, defaultValue, setSelected);
      setOptions(updateSelected);
    }
  }, [defaultValue]);

  useEffect(() => {
    filterOptions(originalOptions, filterValue, setOptions);

    if (filterValue.length > 0 && async && loadOptions) {
      clearTimeout(timerRef.current);
      setLoadingSearching(true);
      timerRef.current = setTimeout(() => {
        loadOptions(filterValue).then((res) => {
          setLoadingSearching(false);
          formatAndSetOptions(res);
        });
      }, debounce)
    } else if (filterValue.length === 0 && async && loadOptions) {
      clearTimeout(timerRef.current);
      setLoadingSearching(false);
      setOptions([]);
    }
  }, [filterValue]);

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
        emptyMessage={emptyMessage}
        clearSelect={clearSelect}
        isSearchable={searchable || async}
        onTyping={onTyping}
        isMenuOpen={menuOpen}
        error={error}
        disabled={disabled}
      />
      {menuOpen && (
        <DropdownSelect
          options={options}
          onSelect={onSelectOption}
          menuRef={menuRef}
          filter={filterValue}
          async={async}
          onClick={focusSelect}
          loading={loadSearching}
        />
      )}
      <input type="hidden" name={name} value={selected.value || ''} disabled={disabled} />
    </Container>
  )
};

Select.propTypes = {
  /** Add a placeholder */
  placeholder: PropTypes.string,
  /** Array of options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  /** Name input form */
  name: PropTypes.string,
  /** Set a value to auto select an item */
  defaultValue: PropTypes.string,
  /** Allow serach items and filter */
  searchable: PropTypes.bool,
  /** Disable select */
  disabled: PropTypes.bool,
  /** Apply erro style */
  error: PropTypes.bool,
  /** Show message when result search is empty */
  emptyMessage: PropTypes.string,
  /** Allow to load options asynchronous */
  async: PropTypes.bool,
  /** Load options from a promisse */
  loadOptions: PropTypes.func,
  /** Set a time delay to call a request */
  debounce: PropTypes.number
};

Select.defaultProps = {
  placeholder: null,
  options: [],
  name: null,
  defaultValue: null,
  searchable: false,
  disabled: false,
  error: false,
  emptyMessage: 'Nada encontrado',
  async: false,
  loadOptions: null,
  debounce: 500
};
