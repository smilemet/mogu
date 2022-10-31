import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";

import Router from "./router/Router.js";
import { getCategory } from "./slices/CategorySlice.js";
import theme from "./Theme.js";
import ScrollToTop from "./utils/ScrollToTop.js";

const App = () => {
  const dispatch = useDispatch();

  // 앱 초기 구동 시 카테고리 목록 가져오기
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <ScrollToTop>
        <Router />
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;
