import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Term from '../../../localization/Term';
import { useEventListener } from '../../_common';
import { setHighlightNavigation, highlightFirstItemList, scrollToElement } from '../Select.utils';
import { SelectMenuContainer, EmptyFilter, Loading } from './style';

export const SelectMenu = ({ options, menuRef, loading, children, onSelectOption, ...props }) => {
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
      onSelectOption(options[highlightItem]);
    }
  })

  return (
    <SelectMenuContainer
      data-testid="select-menu"
      ref={menuRef}
      {...props}
    >

      {React.Children.map(children, (child, i) => React.cloneElement(child, {
        highlight: highlightItem === i,
        deepRef: highlightItem === i ? highlightRef : null,
        onMouseEnter: () => setHighlightItem(i),
      }))}

      {!loading && !children && (
        <EmptyFilter data-testid="select-menu-empty"><Term>Select.noOptionsText</Term></EmptyFilter>
      )}
      {loading && <Loading data-testid="select-menu-loading" />}
    </SelectMenuContainer>
  );
}

SelectMenu.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]),
  menuRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
  onSelectOption: PropTypes.func.isRequired,
};

SelectMenu.defaultProps = {
  options: [],
  children: [],
}
