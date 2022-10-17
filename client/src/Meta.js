/**
 * @filename: Meta.js
 * @description: index.html 파일 <head> 태그 내의 SEO처리 및 기본 참조 리소스 명시
 */
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        {/* <meta property="og:images" content={props.images} /> */}

        {/* 웹폰트 */}
        <link
          rel="stylesheet"
          as="style"
          crossorigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
      </Helmet>
    </HelmetProvider>
  );
};

/**
 * props에 대한 기본값 설정
 * @type : {{keywords: string, author: string, description: string, title: string, url : string}}
 */
Meta.defaultProps = {
  title: "모두의 공구, MOGU!",
  description: "누구나 쉽게 공구를 열고 참여하는 플랫폼, 모구입니다.",
  keywords: "공구, 직구, 공동구매",
  author: "방미소",
  url: "AWA배포예정",
};

export default Meta;
