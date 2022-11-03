import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;

import _user from "./user/user.js";
import _user_address from "./user/user_address.js";
import _user_account from "./user/user_account.js";
import _user_role from "./user/user_role.js";
import _role from "./user/role.js";
import _follow from "./user/follow.js";
import _rate from "./user/rate.js";
import _report from "./user/report.js";
import _verify_email from "./user/verify_email.js";

import _product from "./product/product.js";
import _product_image from "./product/product_image.js";
import _product_item from "./product/product_item.js";
import _product_qna from "./product/product_qna.js";
import _product_account from "./product/product_account.js";
import _product_tag from "./product/product_tag.js";
import _favorite from "./product/favorite.js";
import _comment from "./product/comment.js";

import _seek from "./seek/seek.js";
import _seek_tag from "./seek/seek_tag.js";
import _want from "./seek/want.js";

import _category from "./category/category.js";
import _tag from "./category/tag.js";

import _order from "./order/order.js";
import _order_item from "./order/order_item.js";
import _deposit from "./order/deposit.js";
import _address from "./order/address.js";

const initModel = (sequelize) => {
  const user = _user.init(sequelize, DataTypes);
  const user_address = _user_address.init(sequelize, DataTypes);
  const user_account = _user_account.init(sequelize, DataTypes);
  const user_role = _user_role.init(sequelize, DataTypes);
  const role = _role.init(sequelize, DataTypes);
  const follow = _follow.init(sequelize, DataTypes);
  const rate = _rate.init(sequelize, DataTypes);
  const report = _report.init(sequelize, DataTypes);
  const verify_email = _verify_email.init(sequelize, DataTypes);

  const product = _product.init(sequelize, DataTypes);
  const product_image = _product_image.init(sequelize, DataTypes);
  const product_item = _product_item.init(sequelize, DataTypes);
  const product_qna = _product_qna.init(sequelize, DataTypes);
  const product_account = _product_account.init(sequelize, DataTypes);
  const product_tag = _product_tag.init(sequelize, DataTypes);
  const favorite = _favorite.init(sequelize, DataTypes);
  const comment = _comment.init(sequelize, DataTypes);

  const seek = _seek.init(sequelize, DataTypes);
  const seek_tag = _seek_tag.init(sequelize, DataTypes);
  const want = _want.init(sequelize, DataTypes);

  const category = _category.init(sequelize, DataTypes);
  const tag = _tag.init(sequelize, DataTypes);

  const order = _order.init(sequelize, DataTypes);
  const order_item = _order_item.init(sequelize, DataTypes);
  const deposit = _deposit.init(sequelize, DataTypes);
  const address = _address.init(sequelize, DataTypes);

  user_address.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(user_address, { as: "user_address", foreignKey: "user_id" });

  user_account.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(user_account, { as: "user_account", foreignKey: "user_id" });

  user.belongsToMany(role, { through: user_role, foreignKey: "user_id" });
  role.belongsToMany(user, { through: user_role, foreignKey: "role_id" });

  follow.belongsTo(user, { as: "follower", foreignKey: "follower_id" });
  user.hasMany(follow, { as: "follow_follower", foreignKey: "follower_id" });
  follow.belongsTo(user, { as: "followee", foreignKey: "followee_id" });
  user.hasMany(follow, { as: "follow_followee", foreignKey: "followee_id" });

  rate.belongsTo(user, { as: "sender", foreignKey: "sender_id" });
  user.hasMany(rate, { as: "rating", foreignKey: "sender_id" });
  rate.belongsTo(user, { as: "receiver", foreignKey: "receiver_id" });
  user.hasMany(rate, { as: "rated", foreignKey: "receiver_id" });
  rate.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(rate, { as: "rate", foreignKey: "order_id" });

  verify_email.belongsTo(user, { as: "verify_email", foreignKey: "user_id" });
  user.hasMany(verify_email, { as: "verify_email", foreignKey: "user_id" });

  user.belongsToMany(user, { through: report, as: "reporter", foreignKey: "reporter_id" }); // 두 열이 모두 같은 값일 수 없도록 제약하는 방법 찾아보기
  user.belongsToMany(user, { through: report, as: "reportee", foreignKey: "reportee_id" });

  user.belongsToMany(report, { through: favorite, foreignKey: "user_id" });
  product.belongsToMany(user, { through: favorite, foreignKey: "product_id" });

  product.belongsTo(user, { as: "writer", foreignKey: "user_id" });
  user.hasMany(product, { as: "product", foreignKey: "user_id" });
  product.belongsTo(category, { as: "category", foreignKey: "category_id" });
  category.hasMany(product, { as: "product", foreignKey: "category_id" });
  product.belongsTo(tag, { as: "tag", foreignKey: "tag_id" });
  tag.hasMany(product, { as: "product", foreignKey: "tag_id" });

  product_image.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(product_image, { as: "images", foreignKey: "product_id" });

  product_item.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(product_item, { as: "product_item", foreignKey: "product_id" });

  product_qna.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(product_qna, { as: "product_qna", foreignKey: "product_id" });

  product_account.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(product_account, { as: "product_account", foreignKey: "product_id" });

  tag.belongsToMany(product, { as: "products", through: product_tag, foreignKey: "tag_id" });
  product.belongsToMany(tag, { as: "tags", through: product_tag, foreignKey: "product_id" });

  user.belongsToMany(seek, { through: want, foreignKey: "user_id" });
  seek.belongsToMany(user, { through: want, foreignKey: "seek_id" });

  seek.belongsTo(user, { as: "writer", foreignKey: "user_id" });
  user.hasMany(seek, { as: "seek", foreignKey: "user_id" });
  seek.belongsTo(category, { as: "category", foreignKey: "category_id" });
  category.hasMany(seek, { as: "seek", foreignKey: "category_id" });
  seek.belongsTo(tag, { as: "tag", foreignKey: "tag_id" });
  tag.hasMany(seek, { as: "seek", foreignKey: "tag_id" });

  tag.belongsToMany(seek, { through: seek_tag, foreignKey: "tag_id" });
  seek.belongsToMany(tag, { through: seek_tag, foreignKey: "seek_id" });

  comment.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(comment, { as: "comment", foreignKey: "user_id" });
  comment.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(comment, { as: "comment", foreignKey: "product_id" });

  order.belongsTo(user, { as: "seller", foreignKey: "seller_id" });
  user.hasMany(order, { as: "order_sell", foreignKey: "seller_id" });
  order.belongsTo(user, { as: "buyer", foreignKey: "buyer_id" });
  user.hasMany(order, { as: "order_buy", foreignKey: "buyer_id" });
  order.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(order, { as: "ordered", foreignKey: "product_id" });

  order_item.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(order_item, { as: "order_item", foreignKey: "order_id" });
  order_item.belongsTo(product_item, { as: "product_item", foreignKey: "item_id" });
  product_item.hasMany(order_item, { as: "order_item", foreignKey: "item_id" });

  deposit.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(deposit, { as: "deposit", foreignKey: "order_id" });

  address.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(address, { as: "address", foreignKey: "order_id" });

  return {
    role,
    user,
    user_address,
    user_account,
    user_role,
    follow,
    report,
    verify_email,
    product,
    product_image,
    product_item,
    product_qna,
    product_tag,
    product_account,
    seek,
    seek_tag,
    favorite,
    want,
    category,
    tag,
    comment,
    rate,
    order,
    order_item,
    deposit,
    address,
  };
};

export default initModel;
