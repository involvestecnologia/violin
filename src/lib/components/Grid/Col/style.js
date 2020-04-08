import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import getFromTheme from '../../../utils/getFromTheme';

const createColStyle = (breakpoint, value) => {
  if (typeof value === 'boolean' && value === true) {
    if (breakpoint === 'xs') {
      return css`
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      `
    }
    return css`
      @media(min-width: ${getFromTheme(`breakpoints.${breakpoint}`)}) {
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      }
    `
  }

  const styledCol = css`
    ${value === 1 && 'flex-basis: 8.33333333%; max-width: 8.33333333%;'}
    ${value === 2 && 'flex-basis: 16.66666667%; max-width: 16.66666667%;'}
    ${value === 3 && 'flex-basis: 25%; max-width: 25%;'}
    ${value === 4 && 'flex-basis: 33.33333333%; max-width: 33.33333333%;'}
    ${value === 5 && 'flex-basis: 41.66666667%; max-width: 41.66666667%;'}
    ${value === 6 && 'flex-basis: 50%; max-width: 50%;'}
    ${value === 7 && 'flex-basis: 58.33333333%; max-width: 58.33333333%;'}
    ${value === 8 && 'flex-basis: 66.66666667%; max-width: 66.66666667%;'}
    ${value === 9 && 'flex-basis: 75%; max-width: 75%;'}
    ${value === 10 && 'flex-basis: 83.33333333%; max-width: 83.33333333%;'}
    ${value === 11 && 'flex-basis: 91.66666667%; max-width: 91.66666667%;'}
    ${value === 12 && 'flex-basis: 100%; max-width: 100%;'}
  `

  if (breakpoint === 'xs') {
    return css`${styledCol}`;
  }
  return css`
    @media(min-width: ${getFromTheme(`breakpoints.${breakpoint}`)}) {
      ${styledCol}
    }
  `;
}

const createOffsetStyle = (breakpoint, value) => {
  const styledOffset = css`
    ${value === 0 && 'margin-left: 0;'}
    ${value === 1 && 'margin-left: 8.33333333%;'}
    ${value === 2 && 'margin-left: 16.66666667%;'}
    ${value === 3 && 'margin-left: 25%;'}
    ${value === 4 && 'margin-left: 33.33333333%;'}
    ${value === 5 && 'margin-left: 41.66666667%;'}
    ${value === 6 && 'margin-left: 50%;'}
    ${value === 7 && 'margin-left: 58.33333333%;'}
    ${value === 8 && 'margin-left: 66.66666667%;'}
    ${value === 9 && 'margin-left: 75%;'}
    ${value === 10 && 'margin-left: 83.33333333%;'}
    ${value === 11 && 'margin-left: 91.66666667%;'}
  `

  if (breakpoint === 'xs') {
    return css`${styledOffset}`;
  }
  return css`
    @media(min-width: ${getFromTheme(`breakpoints.${breakpoint}`)}) {
      ${styledOffset}
    }
  `;
}

const createOrderStyle = (breakpoint, style) => {
  if (breakpoint === 'xs') {
    return style;
  }
  return css`
    @media(min-width: ${getFromTheme(`breakpoints.${breakpoint}`)}) {
      ${style}
    }
  `;
}

export const StyledCol = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: calc(${getFromTheme('grid.gutterWidth')} / 2);
  padding-left: calc(${getFromTheme('grid.gutterWidth')} / 2);

  ${({ xs }) => xs && createColStyle('xs', xs)}
  ${({ sm }) => sm && createColStyle('sm', sm)}
  ${({ md }) => md && createColStyle('md', md)}
  ${({ lg }) => lg && createColStyle('lg', lg)}
  ${({ xl }) => xl && createColStyle('xl', xl)}

  ${({ xsOffset }) => xsOffset && createOffsetStyle('xs', xsOffset)}
  ${({ smOffset }) => smOffset && createOffsetStyle('sm', smOffset)}
  ${({ mdOffset }) => mdOffset && createOffsetStyle('md', mdOffset)}
  ${({ lgOffset }) => lgOffset && createOffsetStyle('lg', lgOffset)}
  ${({ xlOffset }) => xlOffset && createOffsetStyle('xl', xlOffset)}

  ${({ first }) => first && createOrderStyle(first, 'order: -1;')}
  ${({ last }) => last && createOrderStyle(last, 'order: 1;')}
`;

export const Box = styled.div`
  width: 100%;
  min-height: 30px;
  box-sizing: border-box;
  background: ${ifProp('container', getFromTheme('palette.primary.100'), getFromTheme('palette.primary.500'))};
  outline: 1px solid ${ifProp('container', getFromTheme('palette.primary.200'), getFromTheme('palette.primary.600'))};
  margin-bottom: 15px;
  padding: ${ifProp('container', '16px 16px 0', '0')};
  color: white;
  text-align: center;
`;
