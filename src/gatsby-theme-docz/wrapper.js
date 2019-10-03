import React from 'react';
import { ThemeProvider } from "styled-components";
import { involves, GlobalStyles } from "lib";

export default ({ children }) => (
    <ThemeProvider theme={involves}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
)