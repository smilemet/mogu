import { db, sequelize } from "../../models/index.js";
import { Op } from "sequelize";

const { product, product_image, product_item, product_qna, tag, category, user, rate, order } = db;

// literal query
const ratedAvg = `(SELECT AVG(total) FROM rate WHERE receiver_id=writer.id)`;
const ratedCount = `(SELECT COUNT(*) FROM rate WHERE receiver_id=writer.id)`;
const favoriteCount = `(SELECT COUNT(*) FROM favorite WHERE product_id=product.id)`;
const orderCount = `(SELECT COUNT(*) FROM \`order\` WHERE product_id=product.id)`;

/**
 * 공구모아요 게시글 가져오기
 * @method GET /api/product
 */
export const getProducts = async (req, res) => {
  const size = parseInt(req.query.size) || 30;
  const page = parseInt(req.query.page) || 1;
  const { sort, category: _category, ongoing } = req.query;

  let result = null;
  let where = { status: 0 }; // 삭제된 글 제외

  let order;

  if (sort === "views") {
    order = sequelize.literal(`view_count DESC`); // 조회수
  } else if (sort === "favorite") {
    order = sequelize.literal(`favorite_count DESC`); // 즐겨찾기수
  } else if (sort === "ordered") {
    order = sequelize.literal(`order_count DESC`); // 주문수
  } else {
    order = sequelize.literal(`createdAt DESC`); // 최신순
  }

  try {
    if (_category) {
      const categoryId = await category.findOne({ where: { name: _category } });
      where = { ...where, category_id: categoryId.id }; // 카테고리 조건 추가
    }

    if (ongoing) {
      where = {
        ...where,
        end_date: {
          [Op.lte]: new Date("2022-10-02T08:00:22.000Z"),
        },
      };
    }

    result = await product.findAll({
      where,
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
      order: [order],
      limit: size,
      offset: size * (page - 1),
    });

    res.send(result);
  } catch (err) {
    res.json({
      success: "false",
      massage: `${err}`,
    });
  }
};

/**
 * 공구모아요 새 게시글 추가하기
 * @method POST /api/product
 */
export const addProduct = async (req, res) => {
  const newProduct = req.body;
  const tagList = newProduct.tagList;
  const qnaList = newProduct.qnaList;

  // qna 추가
  // 판매상품 정보 추가
  // 입금정보

  try {
    tagList.forEach((tag_name) => findOrCreateTag(tag_name)); // 새 태그 추가

    // product 테이블에 데이터 추가하기
    const newpost = await product.create({
      title: newProduct.title,
      content: newProduct.content,
      process: newProduct.process,
      shipping: newProduct.shipping,
      start_date: newProduct.start_date,
      end_date: newProduct.end_date,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: newProduct.user_id,
      category_id: newProduct.category_id,
      tag_id: newProduct.tag_id,
    });

    qnaList.forEach((qnaSet) => addQna(qnaSet, newpost.id)); // 새 qna 추가

    await res.json({
      success: "true",
    });
  } catch (err) {
    res.json({
      success: "false",
      massage: `${err}`,
    });
  }
};

/**
 * 공구모아요 게시글 (1개) 가져오기
 * @method GET /api/product/{id}
 */
export const getProduct = async (req, res) => {
  const { id } = req.params;

  let result = null;

  try {
    result = await product.findOne({
      where: { id },
      attributes: {
        exclude: ["user_id", "tag_id", "category_id"],
        include: [[sequelize.literal(orderCount), "order_count"]],
      },
      include: [
        {
          model: product_image,
          as: "images",
          attributes: ["url"],
          order: ["order"],
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
    });

    res.send(result);
  } catch (err) {
    res.json({
      success: "false",
      massage: `${err}`,
    });
  }
};

export const getQna = async (req, res, next) => {};

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
      success: "false",
      massage: `${err}`,
    });
  }
};

/**
 * qna 테이블에 새 데이터 추가
 * @param {object} qnaSet 질답묶음
 * @param {number} product_id 게시글 id
 */
const addQna = async (qnaSet, product_id) => {
  try {
    await qna.create({
      question: qnaSet.question,
      answer: qnaSet.answer,
    });
  } catch (err) {
    res.json({
      success: "false",
      massage: `${err}`,
    });
  }
};
