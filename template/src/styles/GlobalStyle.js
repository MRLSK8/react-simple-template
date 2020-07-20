import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body { 
    background-color: ${(props) => props.theme.background}
  }
  a {
    text-decoration: none
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
