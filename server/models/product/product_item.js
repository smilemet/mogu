import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class product_item extends Model {
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
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        limit: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
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
