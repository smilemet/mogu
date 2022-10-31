import { db, sequelize } from "../../models/index.js";

const { product, tag, category } = db;

/**
 * 공구모아요 게시글 가져오기
 * GET /api/product
 */
export const getProduct = async (req, res) => {
  let result = null;

  try {
    const size = parseInt(req.query.size) || 30;
    const page = parseInt(req.query.page) || 1;
    const order = req.query.order || ["createdAt", "DESC"];
    const categoryName = req.query.category || null;

    // 특정 카테고리 게시글 가져오기
    if (categoryName) {
      const categoryId = await category.findOne({
        where: {
          name: categoryName,
        },
      });

      result = await product.findAll({
        where: {
          category_id: categoryId.id,
        },
        order: [order],
        limit: size,
        offset: size * (page - 1),
      });
    }
    // 전체 게시글 가져오기
    else {
      result = await product.findAll({
        order: [order],
        limit: size,
        offset: size * (page - 1),
      });
    }

    // 결과 되돌리기 전에 href 등 추가속성 붙여줘야 함
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

/**
 * 공구모아요 새 게시글 추가하기
 * POST /api/product
 */
export const addProduct = async (req, res) => {
  let result = null;
  const newProduct = req.body;

  // 새 태그가 기존 데이터와 중복되는지 1억만개 중에서 검색하기

  // 새 태그를 map으로 돌기
  // 해당 태그가 기존에 존재하는지 검색하기
  // 검색결과 없으면 새 태그 추가하기

  newProduct.newTaglist.map((item) => {
    try {
      // let check = await tag.findOne({ where: { name: item } });
    } catch (err) {
      console.error(err);
    }
  });

  try {
    result = await product.create({
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

    res.json({
      massage: "ok",
    });
  } catch (err) {
    console.error(err);
  }
};
