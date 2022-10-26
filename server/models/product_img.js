import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class product_img extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        img_url: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        order: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 1,
        },
      },
      { sequelize, tableName: "product_img", timestamps: false, indexes: [] }
    );
  }
}
