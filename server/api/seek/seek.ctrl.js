import { db, sequelize } from "../../models/index.js";

const { seek, tag, category, user, rate } = db;

// literal query
const ratedAvg = `(SELECT AVG(total) FROM rate WHERE receiver_id=writer.id)`;
const ratedCount = `(SELECT COUNT(*) FROM rate WHERE receiver_id=writer.id)`;
const wantCount = `(SELECT COUNT(*) FROM want WHERE seek_id=seek.id)`;

/**
 * 총대찾아요 게시글 가져오기
 * @method GET /api/seek
 */
export const getSeeks = async (req, res) => {
  const size = parseInt(req.query.size) || 30;
  const page = parseInt(req.query.page) || 1;
  const { sort, category: _category } = req.query;

  let result = null;
  let where = { status: 0 }; // 삭제된 글 제외

  let order;

  if (sort === "views") {
    order = sequelize.literal(`view_count DESC`); // 조회수
  } else if (sort === "favorite") {
    order = sequelize.literal(`want_count DESC`); // 원해요 수
  } else if (sort === "random") {
    order = sequelize.literal(`rand()`); // 랜덤
  } else {
    order = sequelize.literal(`createdAt DESC`); // 최신순
  }

  try {
    if (_category) {
      const categoryId = await category.findOne({ where: { name: _category } });
      where = { ...where, category_id: categoryId.id }; // 카테고리 조건 추가
    }

    result = await seek.findAll({
      where,
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
      order: [order],
      limit: size,
      offset: size * (page - 1),
    });

    res.send(result);
  } catch (err) {
    res.json({
      status: "error",
      massage: `${err}`,
    });
  }
};

/**
 * 총대찾아요 게시글 (1개) 가져오기
 * @method GET /api/seek/{id}
 */
export const getSeek = async (req, res) => {
  const { id } = req.params;

  let result = null;

  try {
    result = await seek.findOne({
      where: { id },
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
    });

    res.send(result);
  } catch (err) {
    res.json({
      status: "error",
      massage: `${err}`,
    });
  }
};

/**
 * 태그 테이블에서 아이템을 검색하고 없으면 새 아이템으로 추가
 * @param {string} tag_name 태그명
 */
const findOrCreateTag = async (tag_name) => {
  try {
    await tag.findOrCreate({
      where: { name: tag_name },
    });
  } catch (err) {
    res.json({
      status: "error",
      massage: `${err}`,
    });
  }
};
