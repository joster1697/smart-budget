'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.belongsTo(models.User, { foreignKey: 'user_id' }),

      // Una categoría tiene muchos presupuestos
      Category.hasMany(models.Budget, {
        foreignKey: "category_id",
        as: "budgets",
      });

      // Una categoría tiene muchas transacciones
      Category.hasMany(models.Transaction, {
        foreignKey: "category_id",
        as: "transactions",
      });
    }
  }
  Category.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    user_id: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories',
  });
  return Category;
};