import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html, body, #root {
        height: 100%;  
    }

    body {
        background: #e6e7e8;
        color: #636466;
        -webkit-font-smoothing: antialiased !important;
    }
`;