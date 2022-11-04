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
        platform: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        banned: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        auth: {
          // 본인인증여부
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        withdraw: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
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
