import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Term from '../../../localization/Term';
import { useEventListener } from '../../_common';
import { scrollToElement } from '../Select.utils';
import { SelectMenuContainer, EmptyFilter, Loading } from './style';

export const SelectMenu = ({ options, menuRef, loading, children, onSelectOption, ...props }) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const highlightRef = useRef(null);

  useEventListener('keydown', (e) => {
    const upKey = e.keyCode === 38;
    const downKey = e.keyCode === 40;
    const enterKey = e.keyCode === 13;

    if (upKey || downKey || enterKey) {
      e.preventDefault();
    }

    if (!children || !children.length) return

    const updateHighLightedItem = (itemIndex) => {
      setHighlightItem(itemIndex)
      scrollToElement(menuRef.current, highlightRef.current);
    }

    if (upKey) {
      if (highlightItem === 0) {
        updateHighLightedItem(children.length - 1)
      } else if (highlightItem - 1 > 0 || highlightItem === 1) {
        updateHighLightedItem(highlightItem - 1)
      }
      return
    }

    if (downKey) {
      if (highlightItem === children.length - 1) {
        updateHighLightedItem(0)
      } else if (highlightItem < children.length - 1) {
        updateHighLightedItem(highlightItem + 1)
      }
      return
    }

    if (enterKey) {
      onSelectOption(children[highlightItem].props.value);
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
        onClick: () => onSelectOption(options[i])
      }))}

      {!loading && (!children || children.length === 0) && (
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
