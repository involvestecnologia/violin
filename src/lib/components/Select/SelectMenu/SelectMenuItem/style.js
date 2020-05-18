import styled from 'styled-components';
import { withProp } from 'styled-tools';
import { transparentize } from 'polished';
import getFromTheme from '../../../../utils/getFromTheme';
import { ListItem } from '../../../_common';

export const Container = styled(ListItem)`
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
