import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { createTheme } from "lib/theme";

const GlobalStyleDocz = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');
    
    [data-testid="live-preview"] * {
        font-family: 'Open Sans', sans-serif;
    }
`;

const customTheme = createTheme({
    // palette: {
    //     primary: {
    //         regular: "green"
    //     }
    // }
});

export default ({ children }) => (
    <ThemeProvider theme={customTheme}>
        <GlobalStyleDocz />
        {children}
    </ThemeProvider>
)