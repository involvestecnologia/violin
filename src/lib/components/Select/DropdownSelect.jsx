/* eslint-disable react/no-danger */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import idgen from '../../utils/idgen';
import { setHighlightNavigation, highlightFirstItemList, highlightText, scrollToElement } from './Select.utils';
import { SelectMenu, SelectMenuItem, SelectMenuTitle, EmptyFilter, Loading } from './style';

const DropdownSelect = ({ options, onSelect, menuRef, filter, loading, ...props }) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const highlightRef = useRef(null);

  const selectOption = (option) => {
    onSelect(option);
  };

  useEffect(() => {
    highlightFirstItemList(options, setHighlightItem);
  }, [options]);

  useEffect(() => {
    const navigateMenuKeyboard = (e) => {
      const upKey = e.keyCode === 38;
      const downKey = e.keyCode === 40;
      const enterKey = e.keyCode === 13;
      const hasOptions = options.length > 0;

      const direction = (upKey && 'UP') || (downKey && 'DOWN');

      if (upKey || downKey || enterKey) {
        e.preventDefault();
      }

      if (hasOptions) {
        setHighlightNavigation(options, direction, highlightItem, setHighlightItem);
        scrollToElement(menuRef.current, highlightRef.current);
      }

      if (hasOptions && enterKey) {
        selectOption(options[highlightItem]);
      }
    };
    document.addEventListener('keydown', navigateMenuKeyboard);

    return () => {
      document.removeEventListener('keydown', navigateMenuKeyboard);
    }
  }, [highlightItem, options]);

  return (
    <SelectMenu ref={menuRef} {...props}>
      {options.map((option, i) => {
        if (loading) return null;
        if (option.title) {
          return <SelectMenuTitle key={idgen()}>{option.title}</SelectMenuTitle>
        }
        return (
          <SelectMenuItem
            highlight={highlightItem === i}
            key={idgen()}
            onMouseEnter={() => setHighlightItem(i)}
            onClick={() => selectOption(option)}
            deepRef={highlightItem === i ? highlightRef : null}
            selected={option.selected}
          >
            <span dangerouslySetInnerHTML={{ __html: highlightText(option.label, filter) }} />
          </SelectMenuItem>
        )
      })}
      {!loading && options.length < 1 && (
        <EmptyFilter>Nada encontrado</EmptyFilter>
      )}
      {loading && <Loading />}
    </SelectMenu>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired,
  menuRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default DropdownSelect;
