import styled from 'styled-components';
import { ifProp, withProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import getFromTheme from '../../utils/getFromTheme';
import { Icon } from '../Icon';

export const Wrapper = styled.div``;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 6px;
`;

export const StyledLabel = styled.label`
  font-size: ${getFromTheme('typography.fontSize.body')};
  font-weight: ${getFromTheme('typography.fontWeight.bold')};
`;

export const LabelText = styled.span`
  color: ${ifProp('isDisabled', withProp(getFromTheme('palette.black.900'), transparentize(0.75)), getFromTheme('palette.black.900'))};
`;

export const HelpLabel = styled.small`
  font-size: ${getFromTheme('typography.fontSize.small')};
  color: ${ifProp('isDisabled', withProp(getFromTheme('palette.black.900'), transparentize(0.75)), getFromTheme('palette.black.500'))};
  font-weight: ${getFromTheme('typography.fontWeight.regular')};
  &::before {
    content: ' - ';
  }
`;

export const InfoIcon = styled(Icon)`
  padding: 0 4px;
  font-size: ${rem(20)};
  color: ${getFromTheme('palette.black.300')};
  transform: rotate(180deg);
  cursor: default;
`;

export const HelpText = styled.div`
  font-size: ${getFromTheme('typography.fontSize.small')};
  color: ${ifProp('error', getFromTheme('palette.red.700'), getFromTheme('palette.black.500'))};
  font-weight: ${ifProp('error', getFromTheme('typography.fontWeight.semiBold'), getFromTheme('typography.fontWeight.regular'))};
  margin-top: 6px;
`;
