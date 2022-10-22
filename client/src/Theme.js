const variable = {
  mobile: "480px",
  medium: "768px",
  desktop: "769px",

  pointColor: "#e2bbe9",
  gray: "#ddd",
  lightGray: "#eee",
  ivory: "#f7f6f4",
};

const theme = {
  // 반응형
  mobile: `(max-width: ${variable.mobile})`,
  medium: `(max-width: ${variable.medium})`,
  desktop: `(min-width: ${variable.desktop})`,

  // 컬러
  pointColor: `${variable.pointColor}`,
  pointColorToneDown: "#e5d3e8",
  pointColorDarker: "#cb54e5",
  pointFontColor: "#fff",
  alertText: "#ff4f4f",

  gray: `${variable.gray}`,
  lightGray: `${variable.lightGray}`,
  whiteGray: "#f3f3f3",
  darkGray: "#888888",
  ivory: `${variable.ivory}`,
  skyblue: "#dbeef5",
  yellow: "#ffc107",

  // 글씨크기
  smallFont: `0.75rem`,

  textOverflow: () => `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }`,

  button: () => `
    padding: 1rem 0;
    border: 1px solid ${variable.pointColor};
    border-radius: 0.3rem;
    outline: none;
    background-color:#fff;
    font-weight: bold;
    cursor: pointer;
  `,

  buttonFill: () => `
    padding: 1rem 0;
    border: 1px solid ${variable.pointColor};
    border-radius: 0.3rem;
    outline: none;
    background-color:${variable.pointColor};
    font-weight: bold;
    cursor: pointer;
  `,

  buttonPlus: () => `
    padding: 1rem 0;
    border: 2px solid ${variable.gray};
    border-radius: 0.3rem;
    outline: none;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
  `,

  input: () => `
    padding: .75rem 1rem;
    border: 1px solid ${variable.gray};
    outline: none;
    background-color:#fff;
    font-weight: bold;
  `,

  icon: () => `
    flex-shrink: 0;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.2rem;
    border-radius: 50%;
  `,

  mainPadding: () => `
    padding-top: 5rem;
  `,

  inputSomething: () => `
    outline: none;
    border: none;
    padding: 0.7rem 1rem;
    background-color: ${variable.lightGray};
    border-radius: 0.3rem;
  `,

  detailPage: () => `
    hr {
      margin: 2.5rem 0 1.5rem;
      border: none;
      border-top: 1px solid ${variable.gray};
    }

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    section ~ section {
      margin-bottom: 3rem;
    }

    .text-content {
      padding: 1rem 1rem;
      text-align: justify;
      word-break: keep-all;
    }

    .content p {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    @media ${variable.medium} {
      .heading + hr {
        margin-top: 1rem;
      }
    }

    @media ${variable.mobile} {
      * {
        word-break: normal;
      }
    }
  `,
};

export default theme;
