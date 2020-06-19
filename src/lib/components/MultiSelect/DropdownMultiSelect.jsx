/* eslint-disable react/no-danger */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import idgen from '../../utils/idgen';
import Term from '../../localization/Term'
import { setHighlightNavigation, highlightFirstItemList, highlightText, scrollToElement } from './MultiSelect.utils';
import { SelectMenu, SelectMenuItem, SelectMenuTitle, StyledSelectMenuItem, EmptyFilter, Loading, StyledCheckbox } from './style';

const DropdownMultiSelect = ({
  options,
  selected,
  onSelect,
  onSelectAll,
  menuRef,
  filter,
  loading,
  showSelectAll,
  isAllSelected,
  ...props
}) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const highlightRef = useRef(null);

  const selectOption = (option) => {
    onSelect(option);
  };

  const selectAll = () => {
    onSelectAll()
  }

  useEffect(() => {
    highlightFirstItemList(options, setHighlightItem);
  }, []);

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
    <SelectMenu
      ref={menuRef}
      data-testid="select-menu"
      {...props}
    >
      {showSelectAll && options && options.length > 0 && (
        <StyledSelectMenuItem
          onClick={() => selectAll()}
          data-testid="select-menu-item"
        >
          {isAllSelected ? 'Desmarcar todos' : 'Selecionar todos'}
        </StyledSelectMenuItem>
      )}
      {options.map((option, i) => {
        if (loading) return null;
        if (option.title) {
          return <SelectMenuTitle key={idgen()} data-testid="select-menu-item">{option.title}</SelectMenuTitle>
        }
        return (
          <SelectMenuItem
            highlight={highlightItem === i}
            key={idgen()}
            onMouseEnter={() => setHighlightItem(i)}
            onClick={() => selectOption(option)}
            deepRef={highlightItem === i ? highlightRef : null}
            selected={option.selected}
            data-testid="select-menu-item"
          >
            <StyledCheckbox defaultChecked={option.selected} />
            <span dangerouslySetInnerHTML={{ __html: highlightText(option.label, filter) }} />
          </SelectMenuItem>
        )
      })}
      {!loading && options.length < 1 && (
        <EmptyFilter data-testid="select-menu-empty"><Term>Select.noOptionsText</Term></EmptyFilter>
      )}
      {loading && <Loading data-testid="select-menu-loading" />}
    </SelectMenu>
  );
};

DropdownMultiSelect.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.array]).isRequired,
  menuRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  showSelectAll: PropTypes.bool,
  isAllSelected: PropTypes.bool.isRequired,
};

DropdownMultiSelect.defaultProps = {
  showSelectAll: false,
}

export default DropdownMultiSelect;
