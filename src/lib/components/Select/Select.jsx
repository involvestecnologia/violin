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
  const [isFocused, setIsFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  const menuRef = useRef(null);
  const searchTimerRef = useRef(null);

  const handleMenuOpen = (open) => {
    if (!disabled) setIsMenuOpen(open);
  }

  const handleFocusSelect = (focus) => {
    if (!disabled) setIsFocused(focus);
  }

  const focusInputAndSelect = () => {
    inputRef.current.focus();
    handleFocusSelect(true);
  };

  const blurSelect = () => {
    handleFocusSelect(false);
    handleMenuOpen(false);
  };

  const focusAndToggleMenu = (e) => {
    if (e) e.preventDefault();
    if (!async || (async && options.length > 0)) handleMenuOpen(!isMenuOpen);
    focusInputAndSelect();
  };

  const onSelectOption = (optionValue) => {
    const updateSelected = selectOption(options, optionValue, setSelected);
    setOptions(updateSelected);
    handleMenuOpen(false);
    focusInputAndSelect();
  };

  const clearSelect = () => {
    setSelected({});
    onSelectOption(null);
  }

  const formatAndSetOptions = (array) => {
    const formatedList = formatOptionsList(array);
    setOptions(formatedList);
  };

  const clearSearch = () => {
    clearTimeout(searchTimerRef.current);
    // setOptions([]);
    setIsLoadingSearch(false);
  };

  const onTyping = (value) => {
    if (!isMenuOpen && value.length > 0) handleMenuOpen(true);
    setSearchTerm(value);
  };

  const callLoadOptions = () => {
    if (isFocused) {
      clearSearch();
      setIsLoadingSearch(true);
      searchTimerRef.current = setTimeout(() => {
        loadOptions(searchTerm).then((res) => {
          setIsLoadingSearch(false);
          if (searchTerm) {
            formatAndSetOptions(res);
          } else {
            clearSearch();
          }
        });
      }, debounce)
    } else {
      clearSearch();
    }
  };

  useEffect(() => {
    formatAndSetOptions(originalOptions);
  }, [originalOptions]);

  useEffect(() => {
    if (defaultValue) {
      const updateSelected = selectOption(originalOptions, defaultValue, setSelected);
      setOptions(updateSelected);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (!async && !loadOptions) filterOptions(originalOptions, searchTerm, setOptions);
    if (async && loadOptions) callLoadOptions();
    if (async && searchTerm.length === 0) handleMenuOpen(false);
  }, [searchTerm, originalOptions]);

  useEffect(() => {
    const openMenuKeyboard = (e) => {
      const spaceKey = isFocused && e.keyCode === 32;
      const upKey = isFocused && e.keyCode === 38;
      const downKey = isFocused && e.keyCode === 40;
      const tabKey = isFocused && e.keyCode === 9;
      const escKey = isFocused && e.keyCode === 27;
      const enterKey = isFocused && e.keyCode === 13;

      if (
        spaceKey
        || (!isMenuOpen && upKey)
        || (!isMenuOpen && downKey)
        || (!isMenuOpen && enterKey)
      ) {
        e.preventDefault();
        if (!async || (async && options.length > 0)) handleMenuOpen(!isMenuOpen);
      }

      if (isMenuOpen && escKey) handleMenuOpen(!isMenuOpen);
      if (tabKey) blurSelect();
    };
    document.addEventListener('keydown', openMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', openMenuKeyboard);
    }
  }, [isFocused, isMenuOpen]);

  useEffect(() => {
    const closeOnClickOut = (event) => {
      if (isFocused) {
        const hasMenu = menuRef.current;
        const clickedSelect = selectRef.current.contains(event.target);
        const clickedMenu = hasMenu && menuRef.current.contains(event.target);

        const isClickedOut = (hasMenu && (!clickedSelect && !clickedMenu)) || !clickedSelect;

        if (isClickedOut) blurSelect();
      }
    };

    document.addEventListener('click', closeOnClickOut, true);
    return () => {
      document.removeEventListener('click', closeOnClickOut, true);
    }
  }, [isFocused]);

  return (
    <Container ref={selectRef}>
      <InputSelect
        isFocused={isFocused}
        onMouseDown={focusAndToggleMenu}
        inputRef={inputRef}
        onFocus={focusInputAndSelect}
        selected={selected}
        placeholder={placeholder}
        emptyMessage={emptyMessage}
        clearSelect={clearSelect}
        isSearchable={searchable || async}
        onTyping={onTyping}
        isMenuOpen={isMenuOpen}
        error={error}
        disabled={disabled}
      />
      {isMenuOpen && (
        <DropdownSelect
          options={options}
          onSelect={onSelectOption}
          menuRef={menuRef}
          filter={searchTerm}
          async={async}
          onClick={focusInputAndSelect}
          loading={isLoadingSearch}
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
