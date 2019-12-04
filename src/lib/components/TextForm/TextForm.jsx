import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './style';

export const TextForm = (props) => <Text {...props} />;

TextForm.propTypes = {
  validate: PropTypes.oneOf(['regular', 'alert', 'done', 'error'])
};

TextForm.defaultProps = {
  validate: 'regular'
};
