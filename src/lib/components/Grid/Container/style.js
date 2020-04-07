import styled from 'styled-components';
import getFromTheme from '../../../utils/getFromTheme';

export const StyledContainer = styled.div`
  width: auto;
  margin-right: auto;
  margin-left: auto;
  ${({ fluid }) => fluid && `
    padding-right: ${getFromTheme('grid.outerMargin')};
    padding-left: ${getFromTheme('grid.outerMargin')};
  `}

  ${({ fluid }) => !fluid && `
    @media(min-width: ${getFromTheme('breakpoints.sm')}) {
      width: ${getFromTheme('grid.container.sm')};
    }

    @media(min-width: ${getFromTheme('breakpoints.md')}) {
      width: ${getFromTheme('grid.container.md')};
    }

    @media(min-width: ${getFromTheme('breakpoints.lg')}) {
      width: ${getFromTheme('grid.container.lg')};
    }

    @media(min-width: ${getFromTheme('breakpoints.xl')}) {
      width: ${getFromTheme('grid.container.xl')};
    }
  `}
`;
