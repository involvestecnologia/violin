import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '../_common';
export var DropdownItem = function DropdownItem(props) {
  return React.createElement(ListItem, props);
};
DropdownItem.propTypes = {
  icon: PropTypes.string
};
DropdownItem.defaultProps = {
  icon: null
};