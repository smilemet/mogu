const variable = {
  mobile: "480px",
  medium: "768px",
  desktop: "769px",

  pointColor: "#e2bbe9",
  gray: "#ddd",
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
  lightGray: "#eee",
  whiteGray: "#f3f3f3",
  darkGray: "#888888",
  ivory: "#f7f6f4",
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
    outline: none;
    background-color:#fff;
    font-weight: bold;
  `,

  buttonFill: () => `
    padding: 1rem 0;
    border: none;
    outline: none;
    background-color:${variable.pointColor};
    font-weight: bold;
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
};

export default theme;
