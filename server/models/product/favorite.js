import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class favorite extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {},
      { sequelize, tableName: "favorite", timestamps: true, updatedAt: false, indexes: [] }
    );
  }
}
