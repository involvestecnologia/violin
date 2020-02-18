function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './style';
export var TextField = function TextField(_ref) {
  var id = _ref.id,
      error = _ref.error,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "error", "disabled"]);

  return React.createElement(Input, _extends({
    id: id,
    error: error,
    disabled: disabled
  }, props));
};
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