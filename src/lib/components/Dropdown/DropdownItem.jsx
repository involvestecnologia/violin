import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '../_common';

export const DropdownItem = (props) => <ListItem {...props} />;

DropdownItem.propTypes = {
  icon: PropTypes.string
};

DropdownItem.defaultProps = {
  icon: null
};
