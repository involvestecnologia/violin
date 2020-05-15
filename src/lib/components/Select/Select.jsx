import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import SelectInput from './SelectInput';
import SelectMenu from './SelectMenu';
import { selectOption, formatOptionsList, filterOptions } from './Select.utils';

export const Select = ({
  placeholder,
  options: originalOptions,
  name,
  id,
  className,
  style,
  value: defaultValue,
  searchable,
  error,
  emptyMessage,
  async,
  loadOptions,
  debounce,
  onSelect,
  disabled,
  autoFocus,
  ...props
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

  const onSelectOption = (value) => {
    setSelected(value || {});
    handleMenuOpen(false);
    focusInputAndSelect();
  };

  const clearSelect = () => {
    onSelectOption(null);
  };

  const updateOptionsWithSelected = (list, selectedValue, setSelectedFunction) => {
    const optionsWithSelected = selectOption(list, selectedValue || selected, setSelectedFunction);
    setOptions(formatOptionsList(optionsWithSelected));
  };

  const clearSearch = () => {
    clearTimeout(searchTimerRef.current);
    setIsLoadingSearch(false);
  };

  const onTyping = (text) => {
    if (!isMenuOpen && text.length > 0) handleMenuOpen(true);
    setSearchTerm(text);
  };

  const callLoadOptions = () => {
    if (isFocused) {
      clearSearch();
      setIsLoadingSearch(true);
      if (searchTerm) {
        searchTimerRef.current = setTimeout(() => {
          loadOptions(searchTerm).then((res) => {
            updateOptionsWithSelected(res);
            setIsLoadingSearch(false);
          });
        }, debounce)
      } else {
        clearSearch();
      }
    }
  };

  useEffect(() => {
    if (autoFocus) focusInputAndSelect()
    updateOptionsWithSelected(originalOptions, defaultValue, setSelected)
  }, []);

  useEffect(() => {
    updateOptionsWithSelected(async ? options : originalOptions);
    if (onSelect) onSelect(selected);
  }, [selected]);

  useEffect(() => {
    if (!async && !loadOptions) filterOptions(originalOptions, searchTerm, setOptions);
    if (async && loadOptions) callLoadOptions();
  }, [searchTerm]);

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
    <Container
      ref={selectRef}
      style={style}
      className={className}
      data-testid="select"
      {...props}
    >
      <SelectInput
        id={id}
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
        <SelectMenu
          options={options}
          onSelect={onSelectOption}
          menuRef={menuRef}
          filter={searchTerm}
          async={async}
          onClick={focusInputAndSelect}
          loading={isLoadingSearch}
        />
      )}
      <input
        type="hidden"
        name={name}
        value={selected.value || ''}
        disabled={disabled}
        data-testid="select-input-value"
      />
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
  /** Set id to input */
  id: PropTypes.string,
  /** Add class to container */
  className: PropTypes.string,
  /** Add style to container */
  style: PropTypes.string,
  /** Set a value to auto select an item */
  value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
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
  /** Set a time delay to call a request when async prop is true */
  debounce: PropTypes.number,
  /** Pass to function the option selected */
  onSelect: PropTypes.func,
  /** Apply autofocus */
  autoFocus: PropTypes.bool
};

Select.defaultProps = {
  placeholder: '',
  options: [],
  name: '',
  id: null,
  className: '',
  style: null,
  value: null,
  searchable: false,
  disabled: false,
  error: false,
  emptyMessage: 'Nada encontrado',
  async: false,
  loadOptions: null,
  debounce: 500,
  onSelect: null,
  autoFocus: null
};
