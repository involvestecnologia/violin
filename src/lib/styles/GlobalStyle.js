import { createGlobalStyle } from 'styled-components';
import { theme as involves } from "../theme";
import { theme, prop } from "styled-tools";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i,700&display=swap');

    html {
        font-size: ${theme("typography.htmlFontSize", involves.typography.htmlFontSize)};
    }
    
    body {
        margin: 0;
        font-family: ${theme("typography.fontFamily", involves.typography.fontFamily)};
        font-size: ${theme("typography.fontSize.size14", involves.typography.fontSize.size14)};
        line-height: ${theme("typography.lineHeight", involves.typography.lineHeight)};
        color: ${theme("palette.system.dark", involves.palette.system.dark)};
    }
)
    input,
    textarea,
    button,
    select {
        font-family: ${theme("typography.fontFamily", involves.typography.fontFamily)};
    }

    ${prop("include")}
`

export { GlobalStyle };