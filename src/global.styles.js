import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

    body {
    margin: 0;
    padding: 20px 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Roboto', 'Oxygen',
        'Ubuntu', 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a{
    text-decoration: none;
    color: black;
    }
    *{
    box-sizing: border-box;
    }


`;
