import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class role extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        authority: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
      },
      { sequelize, tableName: "role", timestamps: false, indexes: [] }
    );
  }
}
