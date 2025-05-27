'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Budget.belongsTo(models.User, { foreignKey: 'user_id' }),
      Budget.belongsTo(models.Category, { foreignKey: 'category_id' })
    }
  }
  Budget.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: DataTypes.UUID,
    category_id: DataTypes.UUID,
    amount: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Budget',
    tableName: 'budgets',
  });
  return Budget;
};