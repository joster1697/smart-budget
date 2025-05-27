'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.User, { foreignKey: 'user_id' }),

      // Una cuenta tiene muchas transacciones
      Account.hasMany(models.Transaction, {
        foreignKey: "account_id",
        as: "transactions",
      });
    }
  }
  Account.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: DataTypes.UUID,
    balance: DataTypes.DECIMAL,
    account_linked: DataTypes.UUID,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts',
  });
  return Account;
};