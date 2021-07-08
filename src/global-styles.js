import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
        color: ##23272a;
        background: #fff;
        font-size: 16px;
        margin: 0 auto;
        letter-spacing:1px;
        position:relative;
    }

    
`;