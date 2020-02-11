import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import getFromTheme from '../utils/getFromTheme';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: ${getFromTheme('typography.htmlFontSize')};
  }

  body {
    font-family: ${getFromTheme('typography.fontFamily')};
    font-size: ${getFromTheme('typography.fontSize.body')};
    line-height: ${getFromTheme('typography.lineHeight')};
    color: ${getFromTheme('palette.black.900')};
  }
`

export { GlobalStyle };
