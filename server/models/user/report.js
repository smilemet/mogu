import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class report extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {},
      { sequelize, tableName: "report", timestamps: true, updatedAt: false, indexes: [] }
    );
  }
}
