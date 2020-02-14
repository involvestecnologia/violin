import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { Wrapper, LabelContainer, StyledLabel, LabelText, HelpLabel, InfoIcon, HelpText } from './style';

export const FormGroup = ({
  htmlFor,
  disabled,
  label,
  helpLabel,
  tooltip,
  helpText,
  error,
  children,
  ...props
}) => (
  <Wrapper data-testid="wrapper" {...props}>
    <LabelContainer data-testid="label-container">
      <StyledLabel htmlFor={htmlFor}>
        {label && <LabelText isDisabled={disabled} data-testid="label-text">{label}</LabelText>}
        {helpLabel && <HelpLabel isDisabled={disabled} data-testid="help-label">{helpLabel}</HelpLabel>}
      </StyledLabel>

      {tooltip && (
        <Tooltip placement="topRight" content={tooltip}>
          <InfoIcon icon="error_outline" />
        </Tooltip>
      )}
    </LabelContainer>
    {children}
    {helpText && <HelpText error={error} data-testid="help-text">{helpText}</HelpText>}
  </Wrapper>
);

FormGroup.propTypes = {
  /** Set focus to input with this id value */
  htmlFor: PropTypes.string,
  /** Change style to disabled */
  disabled: PropTypes.bool,
  /** Label text */
  label: PropTypes.string,
  /** Label help text */
  helpLabel: PropTypes.string,
  /** Display info icon with content to tooltip */
  tooltip: PropTypes.string,
  /** Set text to the bottom field for help or error text */
  helpText: PropTypes.string,
  /** Set error style on help text */
  error: PropTypes.bool
};

FormGroup.defaultProps = {
  htmlFor: null,
  disabled: null,
  label: null,
  helpLabel: null,
  tooltip: null,
  helpText: null,
  error: false,
}
