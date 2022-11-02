import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class product_tag extends Model {
  static init(sequelize, DataTypes) {
    return super.init({}, { sequelize, tableName: "product_tag", timestamps: false });
  }
}
