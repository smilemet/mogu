import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class product_qna extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.BIGINT(20),
          allowNull: false,
          primaryKey: true,
        },
        question: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        answer: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      { sequelize, tableName: "product_qna", timestamps: true, indexes: [] }
    );
  }
}
