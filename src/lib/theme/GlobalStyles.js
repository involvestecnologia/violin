import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,400i,700&display=swap');

    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        height: 100vh;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.palette.system.dark};
    }
    
    * {
        box-sizing: border-box;
    }
    
    input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }
    
    #root {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`