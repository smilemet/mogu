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
        nickname: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        user_icon: {
          type: DataTypes.STRING(2083),
          allowNull: true,
          defaultValue: "기본 아이콘 url",
        },
        status: {
          type: DataTypes.STRING(10),
          allowNull: false,
          defaultValue: "ACTIVE",
        },
        report: {
          type: DataTypes.TINYINT(30),
          allowNull: false,
        },
        auth: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
        manager: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: 0,
        },
      },
      { sequelize, tableName: "user", timestamps: true, indexes: [] }
    );
  }
}
