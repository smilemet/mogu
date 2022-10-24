import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class product_item extends Model {
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
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        stuck: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        img_url: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      { sequelize, tableName: "product_item", timestamps: true, indexes: [] }
    );
  }
}
