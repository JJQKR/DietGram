import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

body {
  width: 100%;
  font-family: 'SUITE-Regular';
}
`;

export default GlobalStyle;
