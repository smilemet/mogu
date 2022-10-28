import { db } from "../../models/index.js";
import { Op } from "sequelize";

const { product, product_img, seek, user } = db;

/**
 * 검색 결과 가져오기
 * GET /api/search?query=''
 *
 */
export const getSearchResult = async (req, res) => {
  let result = "hello";

  try {
    const size = parseInt(req.query.size) || 30;
    const page = parseInt(req.query.page) || 1;
    const searchType = req.query.type || "product";

    // 공구모아요 검색
    if (searchType === "product") {
      result = await product.findAll({
        where: {
          title: {
            [Op.substring]: req.query.query,
          },
        },
        limit: size,
        offset: size * (page - 1),
      });
    }
    // 총대찾아요 검색
    else if (searchType === "seek") {
      result = await seek.findAll({
        where: {
          title: {
            [Op.substring]: req.query.query,
          },
        },
        limit: size,
        offset: size * (page - 1),
      });
    }

    res.send(result);
  } catch (err) {
    console.error(err);
  }
};
