import React from 'react';
import PropTypes from 'prop-types';
import Term from '../../../localization/Term'
import { SelectMenuContainer, EmptyFilter, Loading } from './style';

const SelectMenu = ({ options, menuRef, loading, children, ...props }) => (
  <SelectMenuContainer
    ref={menuRef}
    data-testid="select-menu"
    {...props}
  >
    {children}
    {!loading && options.length < 1 && (
      <EmptyFilter data-testid="select-menu-empty"><Term>Select.noOptionsText</Term></EmptyFilter>
    )}
    {loading && <Loading data-testid="select-menu-loading" />}
  </SelectMenuContainer>
);

SelectMenu.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  menuRef: PropTypes.oneOfType([PropTypes.object]).isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node)
};

SelectMenu.defaultProps = {
  children: []
}

export default SelectMenu;
