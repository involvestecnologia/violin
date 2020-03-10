import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import scrollToElement from '../../utils/scrollToElement';
import idgen from '../../utils/idgen';
import { setHighlightNavigation, setFirstHighlight } from './Select.utils';
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

    setFirstHighlight(opts, setHighlightItem);
    setCustomOptions(opts);
  }, [options]);

  useEffect(() => {
    const navigateMenuKeyboard = (e) => {
      const upKey = e.keyCode === 38;
      const downKey = e.keyCode === 40;
      const enterKey = e.keyCode === 13;

      const direction = (upKey && 'UP') || (downKey && 'DOWN');

      if (upKey || downKey || enterKey) {
        e.preventDefault();
      }

      setHighlightNavigation(customOptions, direction, highlightItem, setHighlightItem);
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
        }
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
      })}
    </SelectMenu>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DropdownSelect;
