import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import scrollToElement from '../../utils/scrollToElement';
import idgen from '../../utils/idgen';
import { SelectMenu, SelectMenuItem, SelectMenuTitle } from './style';

const DropdownSelect = ({ options, onSelect }) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const [customOptions, setCustomOptions] = useState([]);
  const menuRef = useRef(null);
  const highlightRef = useRef(null);

  const selectOption = (optionValue) => {
    onSelect(optionValue);
  };

  useEffect(() => {
    const opts = [];
    options.forEach((item) => {
      if (item.options) {
        opts.push({ title: item.label });
        item.options.forEach((sub) => {
          opts.push(sub);
        })
      } else {
        opts.push(item);
      }
    });
    setCustomOptions(opts);
  }, [options]);

  useEffect(() => {
    const navigateMenuKeyboard = (e) => {
      const upKey = e.keyCode === 38;
      const downKey = e.keyCode === 40;
      const enterKey = e.keyCode === 13;

      if (upKey || downKey || enterKey) {
        e.preventDefault();
      }

      if (upKey && highlightItem > 0) {
        let prev = highlightItem - 1;
        if (customOptions[highlightItem - 1].title) {
          prev = highlightItem - 2;
        }
        setHighlightItem(prev);
      } else if (downKey && (highlightItem < customOptions.length - 1)) {
        let next = highlightItem + 1;
        if (customOptions[highlightItem + 1].title) {
          next = highlightItem + 2;
        }
        setHighlightItem(next);
      } else if (upKey && highlightItem === 0) {
        setHighlightItem(customOptions.length - 1);
      } else if (downKey && highlightItem === customOptions.length - 1) {
        setHighlightItem(0);
      }

      scrollToElement(menuRef.current, highlightRef.current);

      if (enterKey) {
        selectOption(customOptions[highlightItem].value);
      }
    };
    document.addEventListener('keydown', navigateMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', navigateMenuKeyboard);
    }
  }, [highlightItem, customOptions]);

  return (
    <SelectMenu ref={menuRef}>
      {customOptions.map((option, i) => {
        if (option.title) {
          return <SelectMenuTitle key={idgen()}>{option.title}</SelectMenuTitle>
        } else {
          return (
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
          )
        }
      })}
    </SelectMenu>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DropdownSelect;
