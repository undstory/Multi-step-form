import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        max-width: 1920px;
        margin: 0 auto;
        min-height: 100vh;
        font-family: 'Ubuntu', sans-serif;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: black;
    }

    button {
        outline: none;
        cursor: pointer;
    }

    body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
        margin: 0;
    }

    img {
        max-width: 100%;
        display: block;
    }

    input, button, textarea, select {
        font: inherit;
    }

`;

export default GlobalStyles;
