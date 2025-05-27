"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un usuario tiene muchas cuentas
      User.hasMany(models.Account, { foreignKey: "user_id", as: "accounts" });

      // Un usuario tiene muchas categorías
      User.hasMany(models.Category, {
        foreignKey: "user_id",
        as: "categories",
      });

      // Un usuario tiene muchas transacciones
      User.hasMany(models.Transaction, {
        foreignKey: "user_id",
        as: "transactions",
      });

      // Un usuario tiene muchos presupuestos
      User.hasMany(models.Budget, {
        foreignKey: "user_id",
        as: "budgets",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );

  return User;
};
