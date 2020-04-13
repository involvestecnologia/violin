import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, Item, ItemButton, Separator } from './style';
import { Button } from '../Button';
import { Dropdown, DropdownItem } from '../Dropdown';

export const Breadcrumb = ({ paths, breakpoint, ...props }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkResponible = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkResponible();
    window.addEventListener('resize', checkResponible);
    return () => {
      window.removeEventListener('resize', checkResponible);
    };
  }, []);

  const renderMobileItems = () => {
    const items = paths.slice(-2, -1).concat(paths.slice(-1));
    if (items.length > 1) {
      return (
        <>
          <Button
            secondary
            icon="arrow_back"
            onClick={items[0].to}
            style={{ flexShrink: 0 }}
            data-testid="button-mobile"
          />
          <Item data-testid="item-mobile">{items[1].label}</Item>
        </>
      )
    }
    return (
      <Item data-testid="item-mobile">{items[0].label}</Item>
    )
  };

  const renderItems = () => {
    const visibleItems = paths.slice(-2, -1).concat(paths.slice(-1));
    const elipsisItem = paths.slice(-3, -2);
    const dropdownItems = paths.filter((item) => !visibleItems.concat(elipsisItem).includes(item));
    return (
      <>
        {dropdownItems.length > 0 && (
          <>
            <Dropdown
              trigger={(
                <ItemButton elipsis data-testid="elipsis-dropdown"><Item>...</Item></ItemButton>
              )}
            >
              {dropdownItems.map((item) => (
                <DropdownItem key={item.label} onClick={item.to}>
                  {item.label}
                </DropdownItem>
              ))}
            </Dropdown>
            <Separator icon="arrow_forward_ios" />
          </>
        )}
        {dropdownItems.length === 0 && elipsisItem.length === 1 && (
          <>
            <ItemButton
              elipsis
              onClick={elipsisItem[0].to}
              title={elipsisItem[0].label}
              data-testid="elipsis-item"
            >
              <Item>...</Item>
            </ItemButton>
            <Separator icon="arrow_forward_ios" />
          </>
        )}
        {visibleItems.length === 2 && (
          <>
            <ItemButton
              onClick={visibleItems[0].to}
              title={visibleItems[0].label}
              data-testid="button-item"
            >
              <Item>{visibleItems[0].label}</Item>
            </ItemButton>
            <Separator icon="arrow_forward_ios" />
            <Item title={visibleItems[1].label} data-testid="current-item">{visibleItems[1].label}</Item>
          </>
        )}
        {visibleItems.length === 1 && (
          <Item title={visibleItems[0].label} data-testid="current-item">{visibleItems[0].label}</Item>
        )}
      </>
    )
  };

  return (
    <Nav {...props}>
      {isMobile && renderMobileItems()}
      {!isMobile && renderItems()}
    </Nav>
  );
};

Breadcrumb.propTypes = {
  /** Array with list pages */
  paths: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.func,
    label: PropTypes.string.isRequired,
  })).isRequired,
  /** Change breakpoit to change style in small screens */
  breakpoint: PropTypes.number
};

Breadcrumb.defaultProps = {
  breakpoint: 400
};
