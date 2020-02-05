import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { GlobalStyle, theme, createTheme } from 'lib';
import { ThemeProvider } from 'styled-components';

const myCustomTheme = createTheme({
  palette: {
    primary: theme.palette.green
  }
});

export default ({ children }) => (
  <ThemeProvider theme={myCustomTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
