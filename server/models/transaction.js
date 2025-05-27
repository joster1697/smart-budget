'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, { foreignKey: 'user_id' }),
      Transaction.belongsTo(models.Category, { foreignKey: 'category_id' })
      Transaction.belongsTo(models.Account, { foreignKey: 'account_id' })
    }
  }
  Transaction.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: DataTypes.UUID,
    account_id: DataTypes.UUID,
    category_id: DataTypes.UUID,
    amount: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'transactions',
  });
  return Transaction;
};