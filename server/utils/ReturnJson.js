let util = {};

/**
 * API 통신이 성공했을 때 반환하는 메시지
 * @param {object} data
 * @returns
 */
util.successTrue = (data) => {
  return {
    success: true,
    message: null,
    errors: null,
    data,
  };
};

/**
 * API 통신이 실패했을 때 반환하는 메시지
 * @param {object} data
 * @returns
 */
util.successFalse = (err, message) => {
  if (!err && !message) message = "data not found";
  return {
    success: false,
    message: message,
    errors: err ? util.parseError(err) : null,
    data: null,
  };
};

util.parseError = (errors) => {
  let parsed = {};

  if (errors.name === "ValidationError") {
    for (let name in errors.errors) {
      let validationError = errors.errors[name];
      parsed[name] = { message: validationError.message };
    }
  } else if (errors.code === "11000" && errors.errmsg.indexOf("username") > 0) {
    parsed.username = { message: "This username already exists!" };
  } else {
    parsed.unhandled = errors;
  }

  return parsed;
};

export default util;
