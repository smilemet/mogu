import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class order extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        status: {
          type: DataTypes.STRING(10),
          allowNull: false,
          defaultValue: "ORDERED",
        },
      },
      { sequelize, tableName: "order", timestamps: true, indexes: [] }
    );
  }
}
