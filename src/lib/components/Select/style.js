import styled, { css } from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize, rem } from 'polished';
import { inputStyle, inputStyleFocus, inputStyleDisabled } from '../TextField/style';
import { Icon } from '../Icon';
import getFromTheme from '../../utils/getFromTheme';
import { ListItem } from '../_common';

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

  ${({ isFocused }) => isFocused && inputStyleFocus}
`;

export const Filter = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 0%;
  padding-left: 10px;
`;

export const Input = styled.input`
  width: 1px;
  background: transparent;
  border: none;
  font-size: ${getFromTheme('typography.fontSize.body')};
  color: ${getFromTheme('palette.black.900')};
  padding: 0;
  outline: none;
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
  cursor: default;
  box-sizing: border-box;
`;

export const Value = styled.div`
  ${styledValue}
  color: ${getFromTheme('palette.black.900')};
`;

export const Placeholder = styled.div`
  ${styledValue}
  color: ${getFromTheme('palette.black.400')};
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

export const ArrowDropdown = styled(Icon)`
  font-size: 24px;
  padding: 0 10px;
  color: ${getFromTheme('palette.black.600')};
  cursor: default;
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

export const SelectMenuTitle = styled.h6`
  font-size: ${rem(11)};
  text-transform: uppercase;
  color: ${getFromTheme('palette.black.400')};
  padding: 10px 16px 4px 16px;
  margin: 0;
  cursor: default;
  user-select: none;
`;
