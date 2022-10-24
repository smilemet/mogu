import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class rate extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
        },
        response: {
          type: DataTypes.TINYINT,
          allowNull: true,
        },
        kindness: {
          type: DataTypes.TINYINT,
          allowNull: true,
        },
        time: {
          type: DataTypes.TINYINT,
          allowNull: true,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      { sequelize, tableName: "rate", timestamps: true, indexes: [] }
    );
  }
}
