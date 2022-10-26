import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class user_role extends Model {
  static init(sequelize, DataTypes) {
    return super.init({}, { sequelize, tableName: "user_role", timestamps: false });
  }
}
