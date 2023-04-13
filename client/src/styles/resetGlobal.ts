import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
        font-family: 'Inter', 700;
    }

    body {
        font-size: 1.6rem;
    }
`