const variable = {
  mobile: "650px",
  desktop: "651px",

  pointColor: "#e2bbe9",
  pointColorToneDown: "#e5d3e8",
  pointColorDarker: "#cb54e5",
  pointFontColor: "#fff",
  alertText: "#ff4f4f",

  gray: "#ddd",
  lightGray: "#eee",
  darkGray: "#555",
  ivory: "#f7f6f4",
  skyblue: "#dbeef5",
  yellow: "#ffc107",
};

const theme = {
  // 반응형
  mobile: `(max-width: ${variable.mobile})`,
  desktop: `(min-width: ${variable.desktop})`,

  // 컬러
  pointColor: `${variable.pointColor}`,
  pointColorToneDown: `${variable.pointColorToneDown}`,
  pointColorDarker: `${variable.pointColorDarker}`,
  pointFontColor: `${variable.pointFontColor}`,
  alertText: `${variable.alertText}`,

  gray: `${variable.gray}`,
  lightGray: `${variable.lightGray}`,
  darkGray: `${variable.darkGray}`,
  ivory: `${variable.ivory}`,
  skyblue: `${variable.skyblue}`,
  yellow: `${variable.yellow}`,

  // 글씨크기
  smallFont: `0.75rem`,

  textOverflow: () => `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }`,
};

export default theme;
