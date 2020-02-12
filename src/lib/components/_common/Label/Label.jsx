import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../../Tooltip';
import { LabelContainer, StyledLabel, LabelText, HelpLabel, InfoIcon } from './style';

export const Label = ({ htmlFor, disabled, content, helpContent, tooltip }) => (
  <LabelContainer data-testid="label-container">
    <StyledLabel htmlFor={htmlFor}>
      <LabelText data-testid="label-text" isDisabled={disabled}>{content}</LabelText>
      {helpContent && <HelpLabel data-testid="help-label">{helpContent}</HelpLabel>}
    </StyledLabel>

    {tooltip && (
      <Tooltip placement="topRight" content={tooltip}>
        <InfoIcon data-testid="info-icon" icon="error_outline" />
      </Tooltip>
    )}
  </LabelContainer>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  disabled: PropTypes.bool,
  content: PropTypes.string,
  helpContent: PropTypes.string,
  tooltip: PropTypes.string
};

Label.defaultProps = {
  htmlFor: null,
  disabled: null,
  content: null,
  helpContent: null,
  tooltip: null
}
