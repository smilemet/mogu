import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class deposit extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT,
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
        deposit_time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      { sequelize, tableName: "deposit", timestamps: true, indexes: [] }
    );
  }
}
