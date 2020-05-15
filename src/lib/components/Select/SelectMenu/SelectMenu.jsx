import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import idgen from '../../../utils/idgen';
import Term from '../../../localization/Term'
import { useEventListener } from '../../_common'
import { setHighlightNavigation, highlightFirstItemList, scrollToElement } from '../Select.utils';
import { SelectMenuContainer, EmptyFilter, Loading } from './style';
import SelectMenuItem from './SelectMenuItem'

const SelectMenu = ({ options, onSelect, menuRef, filter, loading, ...props }) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const highlightRef = useRef(null);

  useEffect(() => {
    highlightFirstItemList(options, setHighlightItem);
  }, [options]);

  useEventListener('keydown', (e) => {
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
      onSelect(options[highlightItem]);
    }
  })

  return (
    <SelectMenuContainer
      ref={menuRef}
      data-testid="select-menu"
      {...props}
    >
      {options.map((option, i) => (
        <SelectMenuItem
          data-testid="select-menu-item"
          key={idgen()}
          title={option.title}
          label={option.label}
          selected={option.selected}
          filter={filter}
          highlight={highlightItem === i}
          deepRef={highlightItem === i ? highlightRef : null}
          onMouseEnter={() => setHighlightItem(i)}
          onClick={() => onSelect(option)}
        />
      ))}
      {!loading && options.length < 1 && (
        <EmptyFilter data-testid="select-menu-empty"><Term>Select.noOptionsText</Term></EmptyFilter>
      )}
      {loading && <Loading data-testid="select-menu-loading" />}
    </SelectMenuContainer>
  );
};

SelectMenu.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired,
  menuRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default SelectMenu;
