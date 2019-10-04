import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "lib";

const modifyTheme = {
    ...theme,
    // midify theme
}

const includeGlobalStyle = `
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');
`;

export default ({ children }) => (
    <ThemeProvider theme={modifyTheme}>
        <GlobalStyle include={includeGlobalStyle} />
        {children}
    </ThemeProvider>
)