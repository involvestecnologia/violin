import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
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

const setScrollMenu = (menu, menuItem) => {
  const bottomHighlight = menuItem.offsetTop
    + menuItem.clientHeight;
  const topHighlight = menuItem.offsetTop;
  const menuHeight = menu.clientHeight;
  const menuScroll = menu.scrollTop;

  if (bottomHighlight > menuHeight + menuScroll) {
    menu.scroll(0, bottomHighlight - menuHeight);
  }
  if (topHighlight < menuScroll) {
    menu.scroll(0, topHighlight);
  }
}

export const Select = ({ placeholder, options: list, name, ...props }) => {
  const [options, setOptions] = useState({})
  const [selected, setSelected] = useState({});
  const [focused, setFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  const highlightRef = useRef(null);
  const menuRef = useRef(null);

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
          const updatedList = options.map((item, i) => {
            const option = item;
            if (
              (e.keyCode === 38 && currentHighlight === 0 && i === options.length - 1)
              || (e.keyCode === 40 && currentHighlight + 1 === options.length && i === 0)
            ) {
              option.highlight = true;
            } else if (
              (e.keyCode === 38 && i === (currentHighlight - 1))
              || (e.keyCode === 40 && i === (currentHighlight + 1))
            ) {
              option.highlight = true;
            } else {
              option.highlight = false;
            }
            return option;
          });
          setOptions(updatedList);

          // Position menu item
          setScrollMenu(menuRef.current, highlightRef.current);
        }
      }
    };
    document.addEventListener('keydown', navigateMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', openMenuKeyboard);
      document.removeEventListener('keydown', navigateMenuKeyboard);
    }
  }, [focused, menuOpen]);

  const focusSelect = () => {
    inputRef.current.focus();
    setFocused(true);
  };

  const blurSelect = () => {
    setFocused(false);
    setMenuOpen(false);
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    focusSelect();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const closeOnOut = (event) => {
      const isClickedOut = !selectRef.current.contains(event.target);
      const isClickedMenu = menuRef.current && menuRef.current.contains(event.target);
      if (isClickedOut && !isClickedMenu) {
        blurSelect();
      }
    };

    document.addEventListener('click', closeOnOut);
    return () => {
      document.removeEventListener('click', closeOnOut);
    }
  }, [focused]);

  const onMouseEnterOption = (optionItem) => {
    const updatedList = options.map((item) => {
      const option = item;
      if (option.value === optionItem.value) {
        option.highlight = true;
      } else {
        option.highlight = false;
      }
      return option;
    });
    setOptions(updatedList);
  };

  const selectOption = (option) => {
    setSelected(option);
    const updateSelected = options.map((itemList) => {
      const item = itemList;
      if (item.value === option.value) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
    setOptions(updateSelected);
    setMenuOpen(false);
  };

  return (
    <Container>
      <StyledSelect
        ref={selectRef}
        isFocused={focused}
        onMouseDown={onMouseDown}
      >
        <Filter>
          <Input
            type="text"
            ref={inputRef}
            tabIndex="0"
            readOnly
          />
          {!!selected.value && <Value>{selected.label}</Value>}
          {(!selected.value && !!placeholder) && <Placeholder>{placeholder}</Placeholder>}
        </Filter>
        <Controls>
          <ArrowDropdown icon="arrow_drop_down" />
        </Controls>
      </StyledSelect>
      {menuOpen && (
        <SelectMenu ref={menuRef}>
          {options.map((option) => (
            <SelectMenuItem
              highlight={option.highlight}
              key={option.value}
              onMouseEnter={() => onMouseEnterOption(option)}
              onClick={() => selectOption(option)}
              deepRef={option.highlight ? highlightRef : null}
            >
              {option.label}
            </SelectMenuItem>
          ))}
        </SelectMenu>
      )}
      <input type="hidden" name={name} value={selected.value || ''} />
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
  ).isRequired
};

Select.defaultProps = {
  placeholder: null
};
