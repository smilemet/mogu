import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;

import _user from "./user.js";
import _user_address from "./user_address.js";
import _user_account from "./user_account.js";
import _follow from "./follow.js";
import _product from "./product.js";
import _product_img from "./product_img.js";
import _product_item from "./product_item.js";
import _seek from "./seek.js";
import _favorite from "./favorite.js";
import _want from "./want.js";
import _category from "./category.js";
import _comment from "./comment.js";
import _rate from "./rate.js";
import _order from "./order.js";
import _order_item from "./order_item.js";
import _deposit from "./deposit.js";
import _address from "./address.js";

const initModel = (sequelize) => {
  const user = _user.init(sequelize, DataTypes);
  const user_address = _user_address.init(sequelize, DataTypes);
  const user_account = _user_account.init(sequelize, DataTypes);
  const follow = _follow.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const product_img = _product_img.init(sequelize, DataTypes);
  const product_item = _product_item.init(sequelize, DataTypes);
  const seek = _seek.init(sequelize, DataTypes);
  const favorite = _favorite.init(sequelize, DataTypes);
  const want = _want.init(sequelize, DataTypes);
  const category = _category.init(sequelize, DataTypes);
  const comment = _comment.init(sequelize, DataTypes);
  const rate = _rate.init(sequelize, DataTypes);
  const order = _order.init(sequelize, DataTypes);
  const order_item = _order_item.init(sequelize, DataTypes);
  const deposit = _deposit.init(sequelize, DataTypes);
  const address = _address.init(sequelize, DataTypes);

  user_address.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(user_address, { as: "user_address", foreignKey: "user_id" });

  user_account.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(user_account, { as: "user_account", foreignKey: "user_id" });

  follow.belongsTo(user, { as: "follower", foreignKey: "follower_id" });
  user.hasMany(follow, { as: "follow_follower", foreignKey: "follower_id" });
  follow.belongsTo(user, { as: "followee", foreignKey: "followee_id" });
  user.hasMany(follow, { as: "follow_followee", foreignKey: "followee_id" });

  product.belongsTo(user, { as: "writer", foreignKey: "user_id" });
  user.hasMany(product, { as: "product", foreignKey: "user_id" });
  product.belongsTo(category, { as: "category", foreignKey: "category_id" });
  category.hasMany(product, { as: "product", foreignKey: "category_id" });

  product_img.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(product_img, { as: "product_img", foreignKey: "product_id" });

  product_item.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(product_item, { as: "product_item", foreignKey: "product_id" });

  seek.belongsTo(user, { as: "writer", foreignKey: "user_id" });
  user.hasMany(seek, { as: "seek", foreignKey: "user_id" });
  seek.belongsTo(category, { as: "category", foreignKey: "category_id" });
  category.hasMany(seek, { as: "seek", foreignKey: "category_id" });

  favorite.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(favorite, { as: "favorite", foreignKey: "user_id" });
  favorite.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(favorite, { as: "favorite", foreignKey: "product_id" });

  want.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(want, { as: "want", foreignKey: "user_id" });
  want.belongsTo(seek, { as: "seek", foreignKey: "seek_id" });
  seek.hasMany(want, { as: "want", foreignKey: "seek_id" });

  comment.belongsTo(user, { as: "user", foreignKey: "user_id" });
  user.hasMany(comment, { as: "comment", foreignKey: "user_id" });
  comment.belongsTo(product, { as: "product", foreignKey: "product_id" });
  product.hasMany(comment, { as: "comment", foreignKey: "product_id" });

  rate.belongsTo(user, { as: "sender", foreignKey: "sender_id" });
  user.hasMany(rate, { as: "rate_send", foreignKey: "sender_id" });
  rate.belongsTo(user, { as: "receiver", foreignKey: "receiver_id" });
  user.hasMany(rate, { as: "rate_receive", foreignKey: "receiver_id" });
  rate.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(rate, { as: "rate", foreignKey: "order_id" });

  order.belongsTo(user, { as: "seller", foreignKey: "seller_id" });
  user.hasMany(order, { as: "order_sell", foreignKey: "seller_id" });
  order.belongsTo(user, { as: "buyer", foreignKey: "buyer_id" });
  user.hasMany(order, { as: "order_buy", foreignKey: "buyer_id" });

  order_item.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(order_item, { as: "order_item", foreignKey: "order_id" });
  order_item.belongsTo(product_item, { as: "product_item", foreignKey: "item_id" });
  product_item.hasMany(order_item, { as: "order_item", foreignKey: "item_id" });

  deposit.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(deposit, { as: "deposit", foreignKey: "order_id" });

  address.belongsTo(order, { as: "order", foreignKey: "order_id" });
  order.hasMany(address, { as: "address", foreignKey: "order_id" });

  return {
    user,
    user_address,
    user_account,
    follow,
    product,
    product_img,
    product_item,
    seek,
    favorite,
    want,
    category,
    comment,
    rate,
    order,
    order_item,
    deposit,
    address,
  };
};

export default initModel;
