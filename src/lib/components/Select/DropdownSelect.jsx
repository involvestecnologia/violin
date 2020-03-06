import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SelectMenu, SelectMenuItem } from './style';
import scrollToElement from '../../utils/scrollToElement';
import idgen from '../../utils/idgen';

const DropdownSelect = ({ options, onSelect }) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const menuRef = useRef(null);
  const highlightRef = useRef(null);

  const selectOption = (optionValue) => {
    onSelect(optionValue);
  };

  useEffect(() => {
    console.log(options);
  }, []);

  useEffect(() => {
    const navigateMenuKeyboard = (e) => {
      const upKey = e.keyCode === 38;
      const downKey = e.keyCode === 40;
      const enterKey = e.keyCode === 13;

      if (upKey || downKey || enterKey) {
        e.preventDefault();
      }

      if (upKey && highlightItem > 0) {
        setHighlightItem(highlightItem - 1);
      } else if (downKey && highlightItem < options.length - 1) {
        setHighlightItem(highlightItem + 1);
      } else if (upKey && highlightItem === 0) {
        setHighlightItem(options.length - 1);
      } else if (downKey && highlightItem === options.length - 1) {
        setHighlightItem(0);
      }

      scrollToElement(menuRef.current, highlightRef.current);

      if (enterKey) {
        selectOption(options[highlightItem].value);
      }
    };
    document.addEventListener('keydown', navigateMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', navigateMenuKeyboard);
    }
  }, [highlightItem]);

  return (
    <SelectMenu ref={menuRef}>
      {options.map((option, i) => (
        <SelectMenuItem
          highlight={highlightItem === i}
          key={idgen()}
          onMouseEnter={() => setHighlightItem(i)}
          onClick={() => selectOption(option.value)}
          deepRef={highlightItem === i ? highlightRef : null}
          selected={option.selected}
        >
          {option.label}
        </SelectMenuItem>
      ))}
    </SelectMenu>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DropdownSelect;
