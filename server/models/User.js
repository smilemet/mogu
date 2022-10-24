import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
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
        nickname: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        user_icon: {
          type: DataTypes.STRING(2083),
          allowNull: false,
          defaultValue: "기본 아이콘 url",
        },
        status: {
          type: DataTypes.CHAR(1),
          allowNull: false,
        },
        report: {
          type: DataTypes.TINYINT(30),
          allowNull: false,
        },
        auth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      { sequelize, tableName: "User", timestamps: true, indexes: [] }
    );
  }
}
