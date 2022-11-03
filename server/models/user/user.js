import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
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
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        salt: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        nickname: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        user_icon: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        auth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        platform: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        refresh_token: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "user",
        timestamps: true,
        indexes: [],
      }
    );
  }
}
