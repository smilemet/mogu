import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class favorite extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
      },
      { sequelize, tableName: "favorite", timestamps: true, updatedAt: false, indexes: [] }
    );
  }
}
