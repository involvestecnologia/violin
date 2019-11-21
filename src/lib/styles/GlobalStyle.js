import { createGlobalStyle } from 'styled-components';
import getFromTheme from '../utils/getFromTheme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');

  html {
    font-size: ${getFromTheme('typography.htmlFontSize')};
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: ${getFromTheme('typography.fontSize.size2')};
    line-height: ${getFromTheme('typography.lineHeight')};
    color: ${getFromTheme('palette.system.dark')};
  }

  button,
  input,
  textarea,
  select {
    font-family: 'Open Sans', sans-serif
  }

  * {
    box-sizing: border-box;
  }
`

export { GlobalStyle };
