import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './style';

export const TextField = (
  {
    id,
    error,
    disabled,
    ...props
  }
) => <Input id={id} error={error} disabled={disabled} {...props} />;

TextField.propTypes = {
  placeholder: PropTypes.string,
  /** Add native type attribute to input */
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'tel', 'url', 'datetime-local', 'date', 'search', 'month', 'time', 'week', 'currency']),
  /** Change size (height) input */
  small: PropTypes.bool,
  /** Change size (height) input */
  large: PropTypes.bool,
  /** Add native attribute id to input */
  id: PropTypes.string,
  /** Set error style */
  error: PropTypes.bool,
  /** Add a native attribute disabled and set disabled style */
  disabled: PropTypes.bool
};

TextField.defaultProps = {
  placeholder: null,
  type: 'text',
  small: false,
  large: false,
  id: null,
  error: false,
  disabled: false
};
