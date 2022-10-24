import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class follow extends Model {
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
      { sequelize, tableName: "follow", timestamps: true, updatedAt: false, indexes: [] }
    );
  }
}
