import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class product extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        process: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        shipping: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        start_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        end_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        tag_array: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        view_count: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        favorite_count: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING(10),
          allowNull: false,
          defaultValue: "ACTIVE",
        },
      },
      { sequelize, tableName: "product", timestamps: true, indexes: [] }
    );
  }
}
