import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  *{
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  .inner {
    max-width: 1280px;
    padding: 0 1.5rem;
    margin: 0 auto;
  }

  .inner2 {
    max-width: 1024px;
    margin: 0 auto;
  }

  
  .inner3 {
    max-width: 390px;
    margin: 0 auto;
  }

  .flex-box {
    display: flex;
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
