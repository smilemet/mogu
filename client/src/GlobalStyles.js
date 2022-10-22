import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import theme from "./Theme.js";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;

    #root {
      min-height: 100vh;
      display: flex;
      flex-direction: column;

      main {
        flex-grow: 1
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit
  }

  .wrapper {
    padding: 0 1.5rem;

  }

  .inner {
    max-width: 1150px;
    margin: 0 auto;
    position: relative;
  }

  .inner2 {
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
  }

  .inner3 {
    max-width: 390px;
    margin: 0 auto;
    position: relative;
  }

  .flex-box {
    display: flex;
  }

  .alert {
    color: ${theme.alertText};
  }

  .bold {
    font-weight: bold;
  }

  .blind-text {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(50%);
  }  
`;

export default GlobalStyles;
