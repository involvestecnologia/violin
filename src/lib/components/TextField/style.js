import styled, { css } from 'styled-components';
import { ifProp, withProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 6px;
`;

export const Label = styled.label`
  font-size: ${getFromTheme('typography.fontSize.body')};
  font-weight: ${getFromTheme('typography.fontWeight.bold')};
`;

export const LabelText = styled.span`
  color: ${ifProp('isDisabled', withProp(getFromTheme('palette.black.900'), transparentize(0.75)), getFromTheme('palette.black.900'))};
`;

export const HelpLabel = styled.small`
  font-size: ${getFromTheme('typography.fontSize.small')};
  color: ${getFromTheme('palette.black.500')};
  font-weight: ${getFromTheme('typography.fontWeight.regular')};
  &::before {
    content: ' - ';
  }
`;

const errorStyle = css`
  box-shadow: 0 0 0 2px ${getFromTheme('palette.red.600')};
  background-color: ${withProp(getFromTheme('palette.red.100'), transparentize(0.2))};

  &:focus {
    box-shadow: 0 0 0 2px ${getFromTheme('palette.red.600')};
    background-color: ${withProp(getFromTheme('palette.red.100'), transparentize(0.2))};
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: ${ifProp('small', '30px', ifProp('large', '52px', '40px'))};
  box-sizing: border-box;
  border: none;
  background-color: ${withProp(getFromTheme('palette.primary.900'), transparentize(0.9))};
  border-radius: 4px;
  padding: 0 ${ifProp('large', '16px', '10px')};
  outline: none;
  transition: ${getFromTheme('common.transition')};
  font-family: ${getFromTheme('typography.fontFamily')};
  font-size: ${ifProp('large', getFromTheme('typography.fontSize.subtitle'), ifProp('small', getFromTheme('typography.fontSize.small'), getFromTheme('typography.fontSize.body')))};
  color: ${getFromTheme('palette.black.900')};
  box-shadow: 0 0 0 transparent;

  &::placeholder {
    color: ${getFromTheme('palette.black.500')};
  }

  &:focus {
    background-color: ${getFromTheme('palette.misc.white')};
    box-shadow: 0 0 0 2px ${getFromTheme('palette.primary.500')};
  }

  &:disabled {
    background-color: ${withProp(getFromTheme('palette.misc.black'), transparentize(0.96))};
    color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.75))};
    cursor: not-allowed;

    &::placeholder {
      color: ${withProp(getFromTheme('palette.black.500'), transparentize(0.75))};
    }
  }

  ${(props) => props.error && errorStyle}
`;

export const HelpText = styled.div`
  font-size: ${getFromTheme('typography.fontSize.small')};
  color: ${ifProp('error', getFromTheme('palette.red.700'), getFromTheme('palette.black.500'))};
  font-weight: ${ifProp('error', getFromTheme('typography.fontWeight.semiBold'), getFromTheme('typography.fontWeight.regular'))};
  margin-top: 6px;
`;

export const InfoIcon = styled(Icon)`
  padding: 0 4px;
  font-size: ${rem(20)};
  color: ${getFromTheme('palette.black.300')};
  transform: rotate(180deg);
  cursor: default;
`;
