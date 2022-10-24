import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class seek extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
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
        tag_array: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        view_count: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        img_url: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        status: {
          type: DataTypes.STRING(10),
          allowNull: false,
          defaultValue: "ACTIVE",
        },
      },
      { sequelize, tableName: "seek", timestamps: true, indexes: [] }
    );
  }
}
