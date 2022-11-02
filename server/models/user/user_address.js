import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class user_address extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        address1: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        address2: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        postcode: {
          type: DataTypes.CHAR(5),
          allowNull: false,
        },
      },
      { sequelize, tableName: "user_address", timestamps: true, indexes: [] }
    );
  }
}
