/**
 * @description             문자열에 서식 적용
 * @param {string} string   서식을 적용할 문자열
 * @return                  서식이 적용된 문자열
 */

// 화폐단위
const stringMoney = (string) => {
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { stringMoney };
