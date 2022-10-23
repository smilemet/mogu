import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {},
      },
      { tableName: "users", timestamps: true, indexes: [] }
    );
  }
}
