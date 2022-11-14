import { db, sequelize } from "../../models/index.js";
import { Op } from "sequelize";

const { product, seek, user, category, tag } = db;

// literal query
const ratedAvg = `(SELECT AVG(total) FROM rate WHERE receiver_id=writer.id)`;
const ratedCount = `(SELECT COUNT(*) FROM rate WHERE receiver_id=writer.id)`;
const favoriteCount = `(SELECT COUNT(*) FROM favorite WHERE product_id=product.id)`;
const orderCount = `(SELECT COUNT(*) FROM \`order\` WHERE product_id=product.id)`;

/**
 * 검색 결과 가져오기
 * GET /api/search?query=''
 *
 */
export const getSearchResult = async (req, res) => {
  const size = parseInt(req.query.size) || 30;
  const page = parseInt(req.query.page) || 1;
  const searchType = req.query.type || "product";
  const { sort, query } = req.query;

  let result = null;
  let where = {
    status: 0,
    title: {
      [Op.substring]: query,
    },
  }; // 삭제된 글 제외

  let order = null;

  if (sort === "views") {
    order = sequelize.literal(`view_count DESC`); // 조회수
  } else if (sort === "favorite") {
    order = sequelize.literal(`favorite_count DESC`); // 즐겨찾기수
  } else if (sort === "ordered") {
    order = sequelize.literal(`order_count DESC`); // 주문수
  } else if (sort === "random") {
    order = sequelize.literal(`rand()`); // 랜덤
  } else {
    order = sequelize.literal(`createdAt DESC`); // 최신순
  }

  try {
    // 공구모아요 검색
    if (searchType === "product") {
      result = await product.findAll({
        where,
        attributes: {
          exclude: ["content", "user_id", "tag_id", "category_id"],
          include: [
            [sequelize.literal(orderCount), "order_count"],
            [sequelize.literal(favoriteCount), "favorite_count"],
          ],
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
    }
    // 총대찾아요 검색
    else if (searchType === "seek") {
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
    }

    res.send(result);
  } catch (err) {
    res.json({
      status: 403,
      success: "false",
      massage: err,
    });
  }
};
