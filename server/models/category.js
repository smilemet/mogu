import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class category extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      { sequelize, tableName: "category", timestamps: true, updatedAt: false, indexes: [] }
    );
  }
}
