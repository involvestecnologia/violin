import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, HelpLabel, HelpText, LabelContainer, LabelText } from './style';

export const TextField = ({ label, helpLabel, helpText, id, error, disabled, ...props }) => (
  <div>
    {(label || helpLabel) && (
      <LabelContainer>
        <Label htmlFor={id}>
          <LabelText isDisabled={disabled}>{label}</LabelText>
          {helpLabel && <HelpLabel>{helpLabel}</HelpLabel>}
        </Label>
      </LabelContainer>
    )}
    <Input id={id} error={error} disabled={disabled} {...props} />
    {helpText && <HelpText error={error}>{helpText}</HelpText>}
  </div>
)

TextField.propTypes = {
  label: PropTypes.string,
  helpLabel: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'tel', 'url', 'datetime-local', 'date', 'search', 'month', 'time', 'week', 'currency']),
  small: PropTypes.bool,
  large: PropTypes.bool,
  id: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool
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
  disabled: false
};
