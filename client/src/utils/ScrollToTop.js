/**
 * @description url 주소 변경 시 페이지 최상단으로 스크롤 이동
 * @param {Any} children    로딩할 컴포넌트
 * @returns {Any}           로딩할 컴포넌트
 */
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default ScrollToTop;
