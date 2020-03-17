/* eslint-disable react/no-danger */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import scrollToElement from '../../utils/scrollToElement';
import idgen from '../../utils/idgen';
import { setHighlightNavigation, setFirstHighlight, highlightText } from './Select.utils';
import { SelectMenu, SelectMenuItem, SelectMenuTitle, EmptyFilter } from './style';

const DropdownSelect = ({ options, onSelect, menuRef, filter }) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const [customOptions, setCustomOptions] = useState([]);
  const highlightRef = useRef(null);

  const selectOption = (optionValue) => {
    onSelect(optionValue);
  };

  const mountOptions = () => {
    const formatedOptions = [];
    options.forEach((item) => {
      if (item.options) {
        formatedOptions.push({ title: item.label });
        item.options.forEach((sub) => {
          formatedOptions.push(sub);
        })
      } else {
        formatedOptions.push(item);
      }
    });
    return formatedOptions;
  }

  useEffect(() => {
    const mounted = mountOptions();
    setFirstHighlight(mounted, setHighlightItem);
    setCustomOptions(mounted);
  }, [options]);

  useEffect(() => {
    setFirstHighlight(customOptions, setHighlightItem);
  }, [customOptions]);

  useEffect(() => {
    const mounted = mountOptions();

    if (filter.length > 0) {
      const filtered = mounted.filter((item) => {
        if (item.title) {
          const isMatchedGroup = options.filter(
            (opt) => opt.label === item.title
          )[0].options.filter(
            (opt) => opt.label.toLowerCase().includes(filter.toLowerCase())
          );

          if (isMatchedGroup.length > 0) {
            return item;
          }
        }
        return item.label && item.label.toLowerCase().includes(filter.toLowerCase())
      });
      setCustomOptions(filtered);
    } else {
      setCustomOptions(mounted);
    }
  }, [filter]);

  useEffect(() => {
    const navigateMenuKeyboard = (e) => {
      const upKey = e.keyCode === 38;
      const downKey = e.keyCode === 40;
      const enterKey = e.keyCode === 13;
      const hasOptions = customOptions.length > 0;

      const direction = (upKey && 'UP') || (downKey && 'DOWN');

      if (upKey || downKey || enterKey) {
        e.preventDefault();
      }

      if (hasOptions) {
        setHighlightNavigation(customOptions, direction, highlightItem, setHighlightItem);
        scrollToElement(menuRef.current, highlightRef.current);
      }

      if (hasOptions && enterKey) {
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
            <span dangerouslySetInnerHTML={{ __html: highlightText(option.label, filter) }} />
          </SelectMenuItem>
        )
      })}
      {customOptions.length < 1 && (
        <EmptyFilter>Nada encontrado</EmptyFilter>
      )}
    </SelectMenu>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired,
  menuRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  filter: PropTypes.string.isRequired
};

export default DropdownSelect;
