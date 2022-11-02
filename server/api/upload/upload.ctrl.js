import { db } from "../../models/index.js";
const { user } = db;

/**
 * 유저 아이콘 이미지 업로드
 * @method POST /api/upload/icon
 */
export const uploadUserIcon = async (req, res, next) => {
  // 이미지 업로드
  // const { id } = req.body.id;
  const id = 1;

  try {
    // if (!id) throw new Error("아이디가 없습니다.");

    const { user_icon: prevImg } = await user.findOne({
      where: { id },
      attributes: ["user_icon"],
    });

    // if (prevImg) {
    //   const url =
    // }

    await user.update(
      {
        user_icon: req.file.path,
      },
      { where: { id } }
    );

    res.send(req.file.path);
  } catch (err) {
    res.json({
      status: "error : ",
      massage: `${err}`,
    });
  }
};
