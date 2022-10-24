import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;

import _user from "./user.js";
import _user_address from "./user_address.js";

const initModel = (sequelize) => {
  const user = _user.init(sequelize, DataTypes);
  const user_address = _user_address.init(sequelize, DataTypes);

  user.hasMany(user_address, { as: "user", foreignKey: "user_id" });
  user_address.belongsTo(user, { as: "user", foreignKey: "user_id" });

  return {
    user,
  };
};

export default initModel;
