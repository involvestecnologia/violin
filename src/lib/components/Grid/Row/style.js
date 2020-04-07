import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../../utils/getFromTheme';

const createRowStyle = (prop, style) => {
  const breakpoints = ['sm', 'md', 'lg', 'xl'];

  return css`
    ${(prop === 'xs' || prop === true) && style}

    ${breakpoints.map((breakpoint) => prop === breakpoint && css`
      @media(min-width: ${getFromTheme(`breakpoints.${breakpoint}`)}) {
        ${style}
      }
    `)}
  `
}

export const StyledRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: ${ifProp('reverse', 'row-reverse', 'row')};
  flex-wrap: wrap;
  margin-right: calc(${getFromTheme('grid.gutterWidth')} / 2 * -1);
  margin-left: calc(${getFromTheme('grid.gutterWidth')} / 2 * -1);

  ${({ start }) => start && createRowStyle(start, 'justify-content: flex-start; text-align: start;')}
  ${({ center }) => center && createRowStyle(center, 'justify-content: center; text-align: center;')}
  ${({ end }) => end && createRowStyle(end, 'justify-content: flex-end; text-align: end;')}
  ${({ top }) => top && createRowStyle(top, 'align-items: flex-start;')}
  ${({ middle }) => middle && createRowStyle(middle, 'align-items: center;')}
  ${({ bottom }) => bottom && createRowStyle(bottom, 'align-items: flex-end;')}
  ${({ around }) => around && createRowStyle(around, 'justify-content: space-around;')}
  ${({ between }) => between && createRowStyle(between, 'justify-content: space-between;')}
`;
