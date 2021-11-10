/**
 * GlobalStyles.js
 * Sets the Global styles for the app
 */
import { createGlobalStyle } from 'styled-components';

// Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: grey;
  }
`;

export default GlobalStyle;