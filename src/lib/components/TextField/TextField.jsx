import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../_common';
import {
  Input,
  HelpText,
} from './style';

export const TextField = (
  {
    label,
    helpLabel,
    helpText,
    id,
    error,
    disabled,
    tooltip,
    ...props
  }
) => (
  <div>
    {(label || helpLabel || tooltip) && (
      <Label
        htmlFor={id}
        disabled={disabled}
        content={label}
        helpContent={helpLabel}
        tooltip={tooltip}
      />
    )}
    <Input id={id} error={error} disabled={disabled} {...props} />
    {helpText && <HelpText error={error}>{helpText}</HelpText>}
  </div>
)

TextField.propTypes = {
  /** Add a label for input */
  label: PropTypes.string,
  /** Add a description of label */
  helpLabel: PropTypes.string,
  /** Add a text to bottom input */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Add a placeholde to input */
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
  disabled: PropTypes.bool,
  /** Shows an icon width tooltip info */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

TextField.defaultProps = {
  label: null,
  helpLabel: null,
  helpText: null,
  placeholder: null,
  type: 'text',
  small: false,
  large: false,
  id: null,
  error: false,
  disabled: false,
  tooltip: null
};
