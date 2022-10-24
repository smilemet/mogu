import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class comment extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        hidden: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
      },
      { sequelize, tableName: "comment", timestamps: true, indexes: [] }
    );
  }
}
