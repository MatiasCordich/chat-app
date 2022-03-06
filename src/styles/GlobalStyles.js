import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

html{
    font-size: 62.5%
}

body {
    background-color: #E2DBBE;
    font-size: 2rem ;
    font-family: 'Poppins', sans-serif;
}

button {
    background-color: #282c34;
    border: none;
    color: #fff;
    padding: 15px 32px;
    cursor: pointer;
    font-size: 1.8rem;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

a{
    text-decoration: none ;
}
`