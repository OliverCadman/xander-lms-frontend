import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        padding-top: ${props => {
            return `92.203125px`;
        }}
    }
`;

export default GlobalStyle;
