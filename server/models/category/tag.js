import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class tag extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(45),
          allowNull: false,
        },
      },
      { sequelize, tableName: "tag", timestamps: true, updatedAt: false, indexes: [] }
    );
  }
}
