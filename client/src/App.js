import { ThemeProvider } from "styled-components";

import Router from "./router/Router.js";
import theme from "./Theme.js";
import ScrollToTop from "./utils/ScrollToTop.js";

const App = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <ScrollToTop>
        <Router />
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;
