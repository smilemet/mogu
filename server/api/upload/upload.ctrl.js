import { existsSync, unlinkSync } from "fs";

import { db } from "../../models/index.js";
const { user } = db;

/**
 * 유저 아이콘 이미지 업로드
 * @method POST /api/upload/icon
 */
export const uploadUserIcon = async (req, res, next) => {
  const { id } = req.body;

  try {
    if (!id) throw new Error("아이디가 없습니다.");

    const { user_icon: prevIcon } = await user.findOne({
      where: { id },
      attributes: ["user_icon"],
    });

    // 기존에 등록된 이미지 삭제
    if (prevIcon) {
      if (existsSync(prevIcon)) unlinkSync(prevIcon);
    }

    await user.update({ user_icon: req.file.path }, { where: { id } });

    res.json({
      success: true,
      path: req.file.path,
    });
  } catch (err) {
    res.json({
      status: 401,
      massage: `${err}`,
    });
  }
};
