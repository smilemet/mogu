class RegexHelper {
  /**
   * 값의 존재 여부 검사
   * @param {string} field 검사할 대상
   */
  value(field) {
    const content = field;

    if (
      content === false ||
      content === undefined ||
      content === null ||
      (typeof content === "string" && content.trim().length === 0)
    ) {
      return false;
    }

    return true;
  }

  /**
   * 입력값이 지정된 글자수를 초과했는지 검사
   * @param {string}  field  검사할 대상
   * @param {int}     length    최대 글자수
   */
  maxLength(field, len) {
    this.value(field);

    const content = field;

    if (content.trim().length > len) {
      return false;
    }

    return true;
  }

  /**
   * 입력값이 지정된 글자수 미만인지 검사
   * @param {string}  field  검사할 대상
   * @param {int}     len       최소 글자수
   */
  minLength(field, len) {
    this.value(field);

    let content = field;

    if (content.trim().length < len) {
      return false;
    }

    return true;
  }

  /**
   * 출생연도 유효성 검사
   */
  birthYear(field) {
    const content = parseInt(field);

    const nowYear = new Date().getFullYear();

    if (content > nowYear || content < nowYear - 100 || typeof content !== "number") {
      return false;
    }
  }

  /**
   * 입력값이 'F'와 'M'중 하나인지 검사
   */
  gender(field) {
    const content = field;

    if (content !== "F" && field !== "M") {
      return false;
    }
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사
   * @param {string}  field  검사할 대상
   * @param {object}  regexExpr 검사할 정규표현식
   */
  field(field, regexExpr) {
    this.value(field);

    const content = field;
    const src = content.trim();

    // 입력값에 대한 정규표현식 검사가 실패하면?
    if (!regexExpr.test(src)) return false;

    return true;
  }

  /**
   * 최소 8, 최대16자, 문자 특수문자 숫자 포함
   * */
  password(field) {
    return this.field(field, /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/);
  }

  /**
   * 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)
   */
  id(field) {
    return this.field(field, /^[A-Za-z0-9-_]{5,20}$/);
  }

  /**
   * 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  num(field) {
    return this.field(field, /^[0-9]*$/);
  }

  /**
   * 영문으로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  eng(field) {
    return this.field(field, /^[a-zA-Z]*$/);
  }

  /**
   * 한글로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  kor(field) {
    return this.field(field, /^[ㄱ-ㅎ가-힣]*$/);
  }
  /**
   * 한글, 영문으로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  engKor(field) {
    return this.field(field, /^[ㄱ-ㅎ가-힣a-zA-z]*$/);
  }

  /**
   * 영문과 숫자로 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  engNum(field) {
    return this.field(field, /^[a-zA-Z0-9]*$/);
  }

  /**
   * 한글과 숫자로만 이루어졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  korNum(field) {
    return this.field(field, /^[ㄱ-ㅎ가-힣0-9]*$/);
  }

  /**
   * 이메일주소 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  email(field) {
    return this.field(
      field,
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[az]{2})?)$/i
    );
  }

  /**
   * 핸드폰번호 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  cellphone(field) {
    return this.field(field, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
  }

  /**
   * 집전화 형식인지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  tellphone(field) {
    return this.field(field, /^\d{2,3}\d{3,4}\d{4}$/);
  }

  /**
   * 핸드폰번호 형식과 집전화 형식 중 하나를 충족하는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {string}  field  검사할 대상
   */
  phone(field) {
    this.value(field);

    const content = field.value.trim();
    let check1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/; // 핸드폰 형식
    let check2 = /^\d{2,3}\d{3,4}\d{4}$/; //집전화 형식

    //둘 다 아니라면
    if (!check1.test(content) && !check2.test(content)) {
      return false;
    }
    return true; // 성공했음을 리턴
  }

  /**
   * 두 값이 동일한지 검사
   * @param {string}  origin  원본에 대한 CSS 선택자
   * @param {string}  compare 검사 대상에 대한 CSS 선택자
   */
  compareTo(origin, compare) {
    this.value(origin);
    this.value(compare);

    let src = origin.trim(); // 원본값을 가져온다.
    let dsc = compare.trim(); // 비교할 값을 가져온다.

    if (src !== dsc) {
      return false;
    }

    return true; // 성공했음을 리턴
  }
}

export default new RegexHelper();
