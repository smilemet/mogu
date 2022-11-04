import { db, sequelize } from "../../models/index.js";
import { createHashedPassword } from "../../utils/Encrypto.js";

import RegexHelper from "../../utils/RegexHelper.js";

import dotenv from "dotenv";
import { join, resolve } from "path";

dotenv.config({ path: join(resolve(), "../config.env") });

const { user, user_account, user_address, product, seek, rate, product_image, category, tag } = db;

/**
 * user 목록 가져오기
 * @method GET /api/user
 */
export const getUsers = async (req, res) => {
  try {
    const allUsers = await user.findAll({
      attributes: [
        "id",
        "email",
        "nickname",
        "user_icon",
        "platform",
        "banned",
        "auth",
        "withdraw",
        "createdAt",
        "updatedAt",
      ],
    });

    res.json({
      sucess: true,
      allUsers,
    });
  } catch (err) {
    res.status().json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * body에 정보를 받아 새로운 user를 생성
 * @method POST /api/user
 */
export const createUser = async (req, res) => {
  const { email, password, nickname } = req.body;

  try {
    RegexHelper.value(password, "비밀번호를 입력하세요.");
    RegexHelper.password(
      password,
      "비밀번호는 영문자, 특수문자 및 숫자가 포함된 8~16자로 입력해주세요."
    );
    RegexHelper.value(nickname, "닉네임을 입력해주세요.");
    RegexHelper.maxLength(nickname, 15, "닉네임은 15글자 이하로 입력해주세요.");
    RegexHelper.value(platform, "플랫폼 입력 오류입니다.");

    let signedUser = null;
    signedUser = await user.findOne({ where: { email } });

    if (signedUser) throw new Error("이미 등록된 email 입니다.");

    const { salt, hashedPassword } = await createHashedPassword(password);

    const newUser = await user.create({
      email,
      password: hashedPassword,
      salt,
      nickname,
      platform: "local",
    });

    res.json({
      success: true,
      newUser,
    });
  } catch (err) {
    res.status(403).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * id가 {id}인 user 한 명 가져오기 (본인 제외)
 * @method GET /api/user/:id
 */
export const getUser = async (req, res) => {
  const id = req.params.id;

  const ratedAvg = `(SELECT AVG(total) FROM rate WHERE receiver_id=id)`;
  const ratedCount = `(SELECT COUNT(*) FROM rate WHERE receiver_id=id)`;

  try {
    await isExistUser(id);

    const userInfo = await user.findOne({
      where: { id },
      attributes: [
        "nickname",
        "user_icon",
        "banned",
        [sequelize.literal(ratedAvg), "rated_score"],
        [sequelize.literal(ratedCount), "rated_count"],
      ],
    });

    if (userInfo === null) throw new Error("존재하지 않는 유저입니다.");

    if (userInfo.banned) throw new Error("신고로 인해 이용이 제한된 유저입니다.");

    res.json({
      sucess: true,
      userInfo,
    });
  } catch (err) {
    res.status(403).json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * body에 정보를 받아 id가 {id}인 user를 수정하기
 * @method PATCH /api/user/:id
 */
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { password, bank, holder, accountno, name, address1, address2, postcode } = req.body;

  try {
    // 토큰 유효성 검사 로직 넣을 것
    await isExistUser(id);

    let accountInfo = null;
    let shippingInfo = null;
    let updatedUser = null;
    let updatedAccount = null;
    let updatedShipping = null;

    // 비밀번호 변경
    if (password) {
      RegexHelper.password(
        password,
        "비밀번호는 영문자, 특수문자 및 숫자가 포함된 8~16자로 입력해주세요."
      );

      const { salt, hashedPassword } = await createHashedPassword(password);

      await user.update({ password: hashedPassword, salt }, { where: { id } });

      updatedUser = await user.findOne({ where: { id }, attributes: ["id", "email"] });
    }

    // 계좌정보 추가 & 변경
    if (bank && holder && accountno) {
      RegexHelper.maxLength(bank, 10, "은행명은 최대 10자 내에서 입력해주세요.");
      RegexHelper.engKor(bank, "은행명은 영문 혹은 한글로 입력해주세요.");
      RegexHelper.maxLength(holder, 20, "예금주명은 최대 20자 내에서 입력해주세요.");
      RegexHelper.engKor(holder, "예금주명은 영문 혹은 한글로 입력해주세요.");
      RegexHelper.maxLength(accountno, 20, "계좌번호는 최대 20자 내에서 입력해주세요.");
      RegexHelper.num(accountno, "계좌번호는 숫자로 입력해주세요.");

      accountInfo = await user_account.findOne({
        where: { user_id: id },
      });

      if (accountInfo) {
        let newAccountInfo = {};

        if (bank !== accountInfo.bank) newAccountInfo.bank = bank;
        if (holder !== accountInfo.holder) newAccountInfo.holder = holder;
        if (accountno !== accountInfo.accountno) newAccountInfo.accountno = accountno;

        await user_account.update(newAccountInfo, { where: { user_id: id } });
        updatedAccount = await user_account.findOne({ where: { user_id: id } });
      } else {
        updatedAccount = await user_account.create({
          bank,
          holder,
          accountno,
          user_id: id,
        });
      }
    }

    // 배송정보 추가 & 변경
    if (name && address1 && address2 && postcode) {
      RegexHelper.maxLength(name, 20, "이름은 최대 20자 내에서 입력해주세요.");
      RegexHelper.engKor(name, "이름은 영문 혹은 한글로 입력해주세요.");
      RegexHelper.maxLength(address1, 50, "주소는 최대 50자 내에서 입력해주세요.");
      RegexHelper.engKor(address1, "주소는 영문 혹은 한글로 입력해주세요.");
      RegexHelper.maxLength(address2, 50, "주소는 최대 50자 내에서 입력해주세요.");
      RegexHelper.engKor(address2, "주소는 영문 혹은 한글로 입력해주세요.");
      RegexHelper.maxLength(postcode, 5, "도로명 우편번호 5자리를 입력해주세요.");
      RegexHelper.minLength(postcode, 5, "도로명 우편번호 5자리를 입력해주세요.");
      RegexHelper.num(postcode, "우편번호는 숫자로 입력해주세요.");

      shippingInfo = await user_address.findOne({
        where: { user_id: id },
      });

      if (shippingInfo) {
        let newShippingInfo = {};

        if (name !== shippingInfo.name) newShippingInfo.name = name;
        if (address1 !== shippingInfo.address1) newShippingInfo.address1 = address1;
        if (address2 !== shippingInfo.address2) newShippingInfo.address2 = address2;
        if (postcode !== shippingInfo.postcode) newShippingInfo.postcode = postcode;

        await user_address.update(newShippingInfo, { where: { user_id: id } });
        updatedShipping = await user_address.findOne(newShippingInfo, { where: { user_id: id } });
      } else {
        updatedShipping = await user_address.create({
          name,
          address1,
          address2,
          postcode,
          user_id: id,
        });
      }
    }

    res.json({
      sucess: true,
      updatedUser,
      updatedAccount,
      updatedShipping,
    });
  } catch (err) {
    res.status(403).json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * id가 {id}인 user를 삭제하기
 * @method DELETE /api/user/:id
 */
export const removeUser = async (req, res) => {
  const id = req.params.id;

  try {
    await isExistUser(id);

    // 회원 정보에 탈퇴 표시
    await user.update({ withdraw: true }, { where: { id } });

    // 아이콘 이미지 삭제
    const { user_icon: prevIcon } = await user.findOne({
      where: { id },
      attributes: ["user_icon"],
    });

    if (prevIcon) {
      if (existsSync(prevIcon)) unlinkSync(prevIcon);
    }

    await user.update({ user_icon: null }, { where: { id } });

    // 개인정보 삭제
    let targetAccount = await user_account.findOne({ where: { user_id: id } });
    if (targetAccount) await user_account.destroy({ where: { user_id: id } });

    let targetAddress = await user_address.findOne({ where: { user_id: id } });
    if (targetAddress) await user_address.destroy({ where: { user_id: id } });

    res.json({
      sucess: true,
    });
  } catch (err) {
    res.status(403).json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * id가 {id}인 user의 공구글 가져오기
 * @method Get /api/user/:id/product
 */
export const getUserProduct = async (req, res) => {
  const id = req.params.id;
  let result = null;

  const size = parseInt(req.query.size) || 30;
  const page = parseInt(req.query.page) || 1;

  const ratedAvg = `(SELECT AVG(total) FROM rate WHERE receiver_id=writer.id)`;
  const ratedCount = `(SELECT COUNT(*) FROM rate WHERE receiver_id=writer.id)`;
  const favoriteCount = `(SELECT COUNT(*) FROM favorite WHERE product_id=product.id)`;
  const orderCount = `(SELECT COUNT(*) FROM \`order\` WHERE product_id=product.id)`;

  try {
    await isExistUser(id);

    result = await product.findAll({
      where: { user_id: id },
      attributes: {
        exclude: ["user_id", "tag_id", "category_id"],
        include: [
          [sequelize.literal(orderCount), "order_count"],
          [sequelize.literal(favoriteCount), "favorite_count"],
        ],
      },
      include: [
        {
          model: product_image,
          as: "images",
          attributes: ["url"],
          where: { order: 1 },
          required: false,
        },
        {
          model: user,
          as: "writer",
          attributes: [
            "id",
            "nickname",
            "user_icon",
            [sequelize.literal(ratedAvg), "rated_score"],
            [sequelize.literal(ratedCount), "rated_count"],
          ],
        },
        { model: category, as: "category", attributes: ["name"] },
        { model: tag, as: "tags", attributes: ["name"], through: { attributes: [] } },
      ],
      order: [["createdAt", "DESC"]],
      limit: size,
      offset: size * (page - 1),
    });

    res.json({
      sucess: true,
      result,
    });
  } catch (err) {
    res.status(403).json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * id가 {id}인 user의 총대글 가져오기
 * @method Get /api/user/:id/seek
 */
export const getUserSeek = async (req, res) => {
  const id = req.params.id;
  let result = null;

  const size = parseInt(req.query.size) || 30;
  const page = parseInt(req.query.page) || 1;

  const ratedAvg = `(SELECT AVG(total) FROM rate WHERE receiver_id=writer.id)`;
  const ratedCount = `(SELECT COUNT(*) FROM rate WHERE receiver_id=writer.id)`;
  const wantCount = `(SELECT COUNT(*) FROM want WHERE seek_id=seek.id)`;

  try {
    await isExistUser(id);

    result = await seek.findAll({
      where: { user_id: id },
      attributes: {
        exclude: ["user_id", "tag_id", "category_id"],
        include: [[sequelize.literal(wantCount), "want_count"]],
      },
      include: [
        {
          model: user,
          as: "writer",
          attributes: [
            "id",
            "nickname",
            "user_icon",
            [sequelize.literal(ratedAvg), "rated_score"],
            [sequelize.literal(ratedCount), "rated_count"],
          ],
        },
        { model: category, as: "category", attributes: ["name"] },
        { model: tag, as: "tags", attributes: ["name"], through: { attributes: [] } },
      ],
      order: [["createdAt", "DESC"]],
      limit: size,
      offset: size * (page - 1),
    });

    res.json({
      sucess: true,
      result,
    });
  } catch (err) {
    res.status().json({
      sucess: false,
      message: err.message,
    });
  }
};

/**
 * id가 {id}인 user에 대한 후기글 가져오기
 * @method Get /api/user/:id/review
 */
export const getUserReview = async (req, res) => {
  const id = req.params.id;
  let result = null;

  const size = parseInt(req.query.size) || 5;
  const page = parseInt(req.query.page) || 1;

  try {
    await isExistUser(id);

    result = await rate.findAll({
      where: { receiver_id: id },
      attributes: ["response", "kindness", "time", "comment", "createdAt", "updatedAt"],
      order: [["createdAt", "DESC"]],
      limit: size,
      offset: size * (page - 1),
    });

    res.json({
      sucess: true,
      result,
    });
  } catch (err) {
    res.status(403).json({
      sucess: false,
      message: err.message,
    });
  }
};

// ------------------------------------
// 기타 함수
// ------------------------------------

/**
 * param로 아이디가 전달되었는지, 실제 존재하는 유저인지 체크
 * @param {*} id
 */
const isExistUser = async (id) => {
  if (!id) throw new Error("아이디가 없습니다.");

  const targetUser = await user.findOne({ where: { id } });

  if (!targetUser) throw new Error("존재하지 않는 유저입니다.");
  if (targetUser.withdraw) throw new Error("이미 탈퇴한 유저입니다.");
};
