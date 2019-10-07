import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: ${({ theme }) => theme.typography.htmlFontSize};
    }
    
    body {
        margin: 0;
        font-family: ${({ theme }) => theme.typography.fontFamily};
        font-size: ${({ theme }) => theme.typography.fontSize.size14};
        line-height: ${({ theme }) => theme.typography.lineHeight};
        color: ${({ theme }) => theme.palette.system.dark};
    }

    input,
    textarea,
    button,
    select {
        font-family: ${({ theme }) => theme.typography.fontFamily};
    }

    ${({ include }) => include && include}
`

export { GlobalStyle };