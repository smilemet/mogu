import { ThemeProvider } from "styled-components";

import Router from "./router/Router.js";
import theme from "./Theme.js";

const App = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
