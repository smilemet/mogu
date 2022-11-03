import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class verify_email extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING(45),
          allowNull: false,
          unique: true,
        },
        code: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        expiresIn: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      { sequelize, tableName: "verify_email", timestamps: false, indexes: [] }
    );
  }
}
