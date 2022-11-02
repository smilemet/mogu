import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class user_account extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        bank: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        holder: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        accountno: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      { sequelize, tableName: "user_account", timestamps: true, indexes: [] }
    );
  }
}
