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
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  .inner {
    max-width: 1280px;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .inner2 {
    max-width: 1024px;
    margin: 0 auto;
  }

  .flex-box {
    display: flex;
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
