import styled, { css, keyframes } from 'styled-components';
import { withProp, prop, ifProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import { inputStyle, inputStyleFocus, inputStyleDisabled, errorStyle } from '../TextField/style';
import { Checkbox } from '../Checkbox'
import { Icon } from '../Icon'
import getFromTheme from '../../utils/getFromTheme';
import { ListItem } from '../List';

export const Container = styled.div`
  position: relative;
`;

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

export const SelectMenu = styled.div`
  position: absolute;
  z-index: ${getFromTheme('zIndex.z8')};
  top: 100%;
  left: 0;
  margin-top: 2px;
  width: 100%;
  max-height: 256px;
  overflow: auto;
  background-color: ${getFromTheme('palette.misc.white')};
  border-radius: 4px;
  padding: 8px 0;
  box-shadow: 0 5px 10px ${withProp(getFromTheme('palette.black.900'), transparentize(0.8))};
  overscroll-behavior: contain;

  scrollbar-color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.9))} white;
  scrollbar-width: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${withProp(getFromTheme('palette.black.900'), transparentize(0.9))};
  }
`;

export const SelectMenuItem = styled(ListItem)`
  width: 100%;
  background: ${({ selected, highlight }) => {
    if (selected && !highlight) {
      return getFromTheme('palette.primary.100');
    }
    if (highlight && !selected) {
      return withProp(getFromTheme('palette.black.900'), transparentize(0.92));
    }
    if (selected && highlight) {
      return getFromTheme('palette.primary.200');
    }
    return 'none';
  }};
  user-select: none;

  mark {
    text-decoration: underline;
    background: none;
    color: inherit;
    padding: 0;
  }

  &:hover {
    background: ${({ selected, highlight }) => {
      if (selected && !highlight) {
        return getFromTheme('palette.primary.100');
      }
      if (highlight && !selected) {
        return withProp(getFromTheme('palette.black.900'), transparentize(0.92));
      }
      if (selected && highlight) {
        return getFromTheme('palette.primary.200');
      }
      return 'none';
    }};
  }
`;

export const StyledSelectMenuItem = styled(SelectMenuItem)`
  &:hover {
    background: ${withProp(getFromTheme('palette.black.900'), transparentize(0.92))}
  }
`

export const SelectMenuTitle = styled.h6`
  font-size: ${rem(11)};
  text-transform: uppercase;
  color: ${getFromTheme('palette.black.400')};
  padding: 10px 16px 4px 16px;
  margin: 0;
  cursor: default;
  user-select: none;
`;

export const EmptyFilter = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: ${getFromTheme('typography.fontSize.small')};
  color: ${getFromTheme('palette.black.500')};
`;

const rotate = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &::before {
    content: "";
    height: 16px;
    width: 16px;
    border: 3px solid ${withProp(getFromTheme('palette.primary.500'), transparentize(0.4))};
    border-top-color: transparent;
    border-radius: 100%;
    animation: ${rotate} .25s linear infinite;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  margin-right: 9px;
`
