'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('budgets', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('(UUID())')
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      category_id: {
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCADE',
        type: Sequelize.UUID
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('budgets');
  }
};