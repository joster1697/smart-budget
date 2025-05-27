'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('(UUID())')
      },
      user_id: {
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        type: Sequelize.UUID
      },
      account_id: {
        references: {
          model: 'accounts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        type: Sequelize.UUID
      },
      category_id: {
        references: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'SET NULL',
        type: Sequelize.UUID
      },
      amount: {
        type: Sequelize.DECIMAL
      },
      type: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('transactions');
  }
};