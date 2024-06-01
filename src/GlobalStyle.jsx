import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

body {
  font-family: 'SUITE-Regular';
}
`;

export default GlobalStyle;
