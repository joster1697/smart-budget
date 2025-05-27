"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        type: Sequelize.UUID,
      },
      balance: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      account_linked: {
        allowNull: true,
        references: {
          model: 'accounts',
          key: 'id'
        },
        type: Sequelize.UUID,
      },
      type: {
        allowNull: false,
        validate: {
          isIn: [["cash", "bank", "credit_card", "debit_card"]],
        },
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Accounts");
  },
};
