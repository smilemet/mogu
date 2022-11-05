import ejs from "ejs";
import crypto from "crypto";
import nodemailer from "nodemailer";

import { db } from "../../models/index.js";
import { generateToken, generateRefreshToken } from "../../utils/Jwt.js";
import { createHashedPassword } from "../../utils/Encrypto.js";
import RegexHelper from "../../utils/RegexHelper.js";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const { user, verify_email } = db;

/**
 * email, password로 API에 로그인하고 token 리턴하기
 * @method POST /api/auth/login
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let signedUser = null;
    signedUser = await user.findOne({ where: { email } });

    // 유저가 존재하지 않거나 소셜로그인 유저일 경우 에러 반환
    if (signedUser === null || signedUser.platform !== "local")
      throw new Error("아이디와 비밀번호를 확인해주세요.");

    // 비밀번호 체크
    const { hashedPassword } = await createHashedPassword(password, signedUser.salt);

    if (signedUser.password !== hashedPassword) {
      throw new Error("아이디와 비밀번호를 확인해주세요.");
    }

    // 로그인 성공
    const accessToken = await generateToken(signedUser);
    const refreshToken = await generateRefreshToken(signedUser);

    await user.update({ refresh_token: refreshToken }, { where: { id: signedUser.id } });

    res.json({
      success: true,
      accessToken,
      refreshToken,
    });
  } catch (err) {
    res.json({
      status: 403,
      success: false,
      message: err.message,
    });
  }
};

/**
 * token의 유효성 검사 후 token의 주인인 user 리턴하기
 * header에 x-access-token 필요
 * @method GET /api/auth/verify
 */
export const tokenVerify = async (req, res, next) => {
  const { id } = req.decoded;

  let signedUser = null;
  try {
    signedUser = await user.findOne({ where: { id } });
  } catch (err) {
    next(err);
  }

  res.json({
    success: true,
    signedUser,
  });
};

/**
 * 기존의 token을 이용하여 새로운 token 발급하기
 * header에 x-access-token 필요
 * @method GET /api/auth/refresh
 */
export const tokenRefresh = async (req, res) => {
  const { email } = req.decoded;

  try {
    let signedUser = null;
    signedUser = await user.findOne({ where: { email } });

    if (signedUser !== null && signedUser.refresh_token === req.token) {
      // 리프레시 토큰 인증 성공
      const accessToken = await generateToken(signedUser);

      res.json({
        success: true,
        accessToken,
      });
    } else {
      // 리프레시 토큰 인증 실패
      throw new Error("유효하지 않은 토큰입니다.");
    }
  } catch (err) {
    res.status(401).json({ success: false, message: err });
  }
};

/**
 * 이메일로 인증된 url을 전송한다.
 * @method POST /api/email/send
 */
export const sendEmail = async (req, res) => {
  const { email, type } = req.body;
  let statusNo = 403;

  try {
    RegexHelper.value(email, "이메일을 입력하세요.");
    RegexHelper.email(email, "이메일 형식이 맞지 않습니다.");

    const length = parseInt(process.env.MAIL_HASH_LENGTH);
    const url = process.env.CLIENT_URL;

    // 인증용 해시코드 생성
    let code = crypto.randomBytes(length).toString("base64");
    code = code.replace(/\//, "a"); // '/'문자가 섞일 경우 a로 대치

    let sendedEmail = await verify_email.findOne({ where: { email } });

    // 재전송여부 판별
    if (sendedEmail) {
      await verify_email.update(
        {
          code: code,
          expiresIn: new Date(Date.now() + 1 * 60 * 60 * 1000), // 유효시간 1시간
        },
        { where: { email } }
      );
    } else {
      await verify_email.create({
        email: email,
        code: code,
        expiresIn: new Date(Date.now() + 1 * 60 * 60 * 1000),
      });
    }

    let emailTemplate;
    let emailTitle, emailContent;

    // 메일 템플릿 준비
    if (type === "register") {
      emailTitle = "[모구] 회원가입 인증메일입니다.";
      emailContent = "회원가입을 마쳐주세요!";
    } else if (type === "reset") {
      emailTitle = "[모구] 비밀번호를 재설정해주세요.";
      emailContent = "비밀번호를 변경해주세요!";
    } else {
      statusNo = 404;
      throw new Error("잘못된 접근입니다.");
    }

    ejs.renderFile(
      "./api/auth/mail.ejs",
      { content: emailContent, url: `${url}/account/join/${code}` },
      (err, data) => {
        if (err) console.error(err);
        emailTemplate = data;
      }
    );

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_CLIENT,
        pass: process.env.MAIL_CLIENT_PW,
      },
    });

    let mailOptions = {
      from: "모구<mogu.manager@gmail.com>",
      to: email,
      subject: emailTitle,
      html: emailTemplate,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        statusNo = 500;
        throw new Error("이메일 전송에 실패했습니다.");
      }
    });

    res.json({
      success: true,
    });
  } catch (err) {
    res.json({
      status: statusNo,
      success: false,
      error: err.message,
    });
  }
};

/**
 * 인증 링크가 유효한지 확인하고 해당 email을 반환한다.
 * @method GET /api/email/verify
 */
export const verifyEmail = async (req, res) => {
  const code = req.params.code;
  let statusNo = 404;

  try {
    const targetInfo = await verify_email.findOne({
      where: { code },
      attributes: ["email", "expiresIn"],
    });

    if (!targetInfo) throw new Error("잘못된 주소입니다.");

    let now = Date.now();
    let expireTime = targetInfo.expiresIn.getTime();

    if (now > expireTime) {
      statusNo = 403;
      throw new Error("인증 시간이 만료되었습니다.");
    }

    res.json({
      success: true,
      email: targetInfo.email,
    });
  } catch (err) {
    res.json({
      status: statusNo,
      success: false,
      error: err.message,
    });
  }
};
