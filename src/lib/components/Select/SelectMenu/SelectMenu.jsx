import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Term from '../../../localization/Term';
import { useEventListener } from '../../_common';
import { scrollToElement, setHighlightNavigation } from '../Select.utils';
import { SelectMenuContainer, EmptyFilter, Loading } from './style';

export const SelectMenu = ({ menuRef, loading, children, onSelectOption, ...props }) => {
  const [highlightItem, setHighlightItem] = useState(0);
  const highlightRef = useRef(null);

  useEventListener('keydown', (e) => {
    const upKey = e.keyCode === 38;
    const downKey = e.keyCode === 40;
    const enterKey = e.keyCode === 13;
    const hasOptions = children.length > 0;

    const direction = (upKey && 'UP') || (downKey && 'DOWN');

    if (upKey || downKey || enterKey) {
      e.preventDefault();
    }

    if (!children || !children.length) return

    if (hasOptions) {
      setHighlightNavigation(children, direction, highlightItem, setHighlightItem);
      scrollToElement(menuRef.current, highlightRef.current);
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

      {React.Children.map(children, (child, i) => {
        if (child.type.name === 'SelectMenuTitle') {
          return React.cloneElement(child)
        }
        return React.cloneElement(child, {
          highlight: highlightItem === i,
          deepRef: highlightItem === i ? highlightRef : null,
          onMouseEnter: () => setHighlightItem(i),
          onClick: () => onSelectOption(children[i].props.value)
        })
      })}

      {!loading && (!children || children.length === 0) && (
        <EmptyFilter data-testid="select-menu-empty"><Term>Select.noOptionsText</Term></EmptyFilter>
      )}
      {loading && <Loading data-testid="select-menu-loading" />}
    </SelectMenuContainer>
  );
}

SelectMenu.propTypes = {
  menuRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
  onSelectOption: PropTypes.func.isRequired,
};

SelectMenu.defaultProps = {
  children: [],
}
