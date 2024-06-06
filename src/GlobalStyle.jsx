import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

body {
  width: 100%;
  font-family: 'SUITE-Regular';
  &::-webkit-scrollbar {
    display: none;
  }
}
`;

export default GlobalStyle;
