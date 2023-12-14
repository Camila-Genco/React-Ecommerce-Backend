'use strict';
const {ORDER_PRODUCT_TABLE} = require("./../models/order-productModel");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(ORDER_PRODUCT_TABLE, 'product_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(ORDER_PRODUCT_TABLE, 'product_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    })
  }
};
