import styled, { css } from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import { inputStyle, inputStyleFocus, inputStyleDisabled, errorStyle } from '../../TextField/style';
import { Icon } from '../../Icon';
import getFromTheme from '../../../utils/getFromTheme';

export const StyledSelect = styled.div`
  ${inputStyle}
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  * {
    cursor: pointer;
  }

  ${({ isFocused }) => isFocused && inputStyleFocus}
  ${({ isDisabled }) => isDisabled && inputStyleDisabled}
  ${({ isDisabled }) => isDisabled && `
    * {
      cursor: not-allowed !important;
    }
  `}

  ${({ error }) => error && errorStyle}
`;

export const Filter = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  padding-left: 10px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: ${prop('widthInput')}px;
  max-width: 100%;
  background: transparent;
  border: none;
  font-size: ${getFromTheme('typography.fontSize.body')};
  line-height: 1;
  color: ${getFromTheme('palette.black.900')};
  padding: 0;
  outline: none;
  cursor: text;
`;

const styledValue = css`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${getFromTheme('typography.fontSize.body')};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  margin-left: ${ifProp('isFocused', ifProp('isSearchable', rem(24), '0'))};
  transition: ${getFromTheme('common.transition')};
`;

export const textDisabled = css`
  color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.75))};
`;

export const Value = styled.div`
  ${styledValue}
  color: ${getFromTheme('palette.black.900')};
  ${({ isDisabled }) => isDisabled && textDisabled}
`;

export const Placeholder = styled.div`
  ${styledValue}
  color: ${getFromTheme('palette.black.400')};
  ${({ isDisabled }) => isDisabled && textDisabled}
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  margin-right: 5px;
  color: ${getFromTheme('palette.black.600')};
  ${({ isDisabled }) => isDisabled && textDisabled}
`;

export const ArrowDropdown = styled(Icon)`
  font-size: 24px;
  padding: 0 3px;
`;

export const SearchIcon = styled(Icon)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  font-size: ${rem(24)};
  width: ${ifProp('isFocused', rem(24), '0')};
  color: ${getFromTheme('palette.black.600')};
  opacity: ${ifProp('isFocused', '1', '0')};
  transition: ${getFromTheme('transition')};
  overflow: hidden;
`;
