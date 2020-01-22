import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyled, CircleCheck, Svg, Circle, Label } from './style';

export const RadioButton = ({ className, style, label, ...props }) => (
  <Wrapper className={className} style={style}>
    <InputStyled type="radio" {...props} />
    <Svg viewBox="0 0 18 18" mlns="http://www.w3.org/2000/svg">
      <Circle strokeLocation="inside" cx="9" cy="9" r="8" />
      <CircleCheck cx="9" cy="9" r="4" data-testid="checked-circle" />
    </Svg>
    {label && (<Label>{label}</Label>)}
  </Wrapper>
)

RadioButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

RadioButton.defaultProps = {
  label: null
};
