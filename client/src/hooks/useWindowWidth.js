/**
 * @description 사용자 정의 훅. 브라우저 넓이를 의미하는 상태값 반환
 * @return {Object} 브라우저 넓이 상태값
 */
import React, { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onWidthResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", onWidthResize);

    return () => window.removeEventListener("resize", onWidthResize);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
