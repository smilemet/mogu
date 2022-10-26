import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class order_item extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        count: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { sequelize, tableName: "order_item", timestamps: true, indexes: [] }
    );
  }
}
