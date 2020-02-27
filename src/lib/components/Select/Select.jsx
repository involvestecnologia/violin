import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  StyledSelect,
  Filter,
  Value,
  Placeholder,
  Controls,
  ArrowDropdown,
  Input,
  SelectMenu,
  SelectMenuItem
} from './style';

export const Select = ({ placeholder, options: list, ...props }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [options, setOptions] = useState({})
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Apply highlight at first option item
    const menuList = list.map(
      (item, index) => (index === 0
        ? { ...item, highlight: true }
        : { ...item, highlight: false })
    );
    setOptions(menuList);

    // Toggle menu when space key is pressed
    const openMenuKeyboard = (e) => {
      if (focused && e.keyCode === 32) {
        e.preventDefault();
        setMenuOpen(!menuOpen);
      }
    };
    document.addEventListener('keydown', openMenuKeyboard);

    const navigateMenuKeyboard = (e) => {
      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
        if (focused && !menuOpen) setMenuOpen(true);
        if (menuOpen) {
          const currentHighlight = options.indexOf(options.find((item) => item.highlight));
          // Down
          if (e.keyCode === 38) {
            const updatedList = options.map((item, i) => {
              const option = item;
              if (currentHighlight === 0 && i === options.length - 1) {
                option.highlight = true;
              } else if (i === (currentHighlight - 1)) {
                option.highlight = true;
              } else {
                option.highlight = false;
              }
              return option;
            });
            setOptions(updatedList);
          }
          // Up
          if (e.keyCode === 40) {
            const updatedList = options.map((item, i) => {
              const option = item;
              if (currentHighlight + 1 === options.length && i === 0) {
                option.highlight = true;
              } else if (i === (currentHighlight + 1)) {
                option.highlight = true;
              } else {
                option.highlight = false;
              }
              return option;
            });
            setOptions(updatedList);
          }
        }
      }
    };
    document.addEventListener('keydown', navigateMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', openMenuKeyboard);
      document.removeEventListener('keydown', navigateMenuKeyboard);
    }
  }, [focused, menuOpen]);

  const focusSelect = (e) => {
    e.preventDefault();
    if (inputRef.current) inputRef.current.focus();
    setFocused(true);
  };

  const blurSelect = () => {
    setFocused(false);
    setMenuOpen(false);
  };

  const onMouseDown = (e) => {
    focusSelect(e);
    setMenuOpen(!menuOpen);
  };

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
      onMouseDown={onMouseDown}
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
      {menuOpen && (
        <SelectMenu>
          {options.map((option) => (
            <SelectMenuItem
              highlight={option.highlight}
              key={option.value}
            >
              {option.label}
            </SelectMenuItem>
          ))}
        </SelectMenu>
      )}
      <input type="hidden" value={value} />
    </StyledSelect>
  )
};

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired
};

Select.defaultProps = {
  placeholder: null
};
