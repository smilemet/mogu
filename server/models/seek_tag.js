import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class seek_tag extends Model {
  static init(sequelize, DataTypes) {
    return super.init({}, { sequelize, tableName: "seek_tag", timestamps: false });
  }
}
