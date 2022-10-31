import { db } from "../../models/index.js";

const { category } = db;

/**
 * 카테고리 목록 가져오기
 * GET /api/category
 */
export const getCategory = async (req, res) => {
  let result = null;

  try {
    result = await category.findAll({});

    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

/**
 * 새 카테고리 입력하기
 * POST /api/category
 */
export const addCategory = async (req, res) => {
  let result = null;
  const newCategory = req.body;

  try {
    result = await category.create({
      name: newCategory.name,
    });
    res.json({
      massage: "ok",
      category: newCategory.name,
    });
  } catch (err) {
    console.error(err);
  }
};
