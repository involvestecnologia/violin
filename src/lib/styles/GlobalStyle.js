import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import getFromTheme from '../utils/getFromTheme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');
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

  [data-testid="live-preview"] {
    padding: 20px;
  }
`

export { GlobalStyle };
