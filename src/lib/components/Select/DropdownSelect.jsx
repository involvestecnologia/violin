import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SelectMenu, SelectMenuItem } from './style';
import scrollToElement from '../../utils/scrollToElement';

const DropdownSelect = ({ options: optionsList, onSelect }) => {
  const [options, setOptions] = useState(optionsList)
  const menuRef = useRef(null);
  const highlightRef = useRef(null);

  const selectOption = (optionValue) => {
    onSelect(optionValue);
  };

  const setHighlightList = (itemValue) => {
    const updatedList = options.map((item, index) => {
      const option = {
        ...item,
        highlight: itemValue ? item.value === itemValue : index === 0
      };
      return option;
    });
    setOptions(updatedList);
  }

  useEffect(() => {
    setHighlightList();

    const navigateMenuKeyboard = (e) => {
      if (e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();

      //   const currentHighlight = options.indexOf(options.find((item) => item.highlight));
      //   const updatedList = options.map((item, i) => {
      //     let highlight = false;
      //     if (
      //       (e.keyCode === 38 && currentHighlight === 0 && i === options.length - 1)
      //       || (e.keyCode === 40 && currentHighlight + 1 === options.length && i === 0)
      //     ) {
      //       highlight = true;
      //     } else if (
      //       (e.keyCode === 38 && i === (currentHighlight - 1))
      //       || (e.keyCode === 40 && i === (currentHighlight + 1))
      //     ) {
      //       highlight = true;
      //     }
      //     const option = {
      //       ...item,
      //       highlight
      //     };
      //     return option;
      //   });
      //   setOptions(updatedList);
      //   scrollToElement(menuRef.current, highlightRef.current);
      // }

      // if (e.keyCode === 13) {
      //   const selectedItem = options.filter((item) => item.highlight);
      //   selectOption(selectedItem[0].value);
      }
    };
    document.addEventListener('keydown', navigateMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', navigateMenuKeyboard);
    }
  }, []);

  return (
    <SelectMenu ref={menuRef}>
      {options.map((option) => (
        <SelectMenuItem
          highlight={option.highlight}
          key={option.value}
          onMouseEnter={() => setHighlightList(option.value)}
          onClick={() => selectOption(option.value)}
          deepRef={option.highlight ? highlightRef : null}
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
