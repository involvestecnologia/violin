import React from 'react';
import { GlobalStyle } from "lib";

export default ({ children }) => (
    <>
        <GlobalStyle />
        {children}
    </>
)