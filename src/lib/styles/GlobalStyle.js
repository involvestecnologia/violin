import { createGlobalStyle } from 'styled-components';
import { theme as involves } from "../theme";
import { theme } from "styled-tools";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');

    html {
        font-size: ${theme("typography.htmlFontSize", involves.typography.htmlFontSize)};
    }
    
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: ${theme("typography.fontSize.size2", involves.typography.fontSize.size2)};
        line-height: ${theme("typography.lineHeight", involves.typography.lineHeight)};
        color: ${theme("palette.system.dark", involves.palette.system.dark)};
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