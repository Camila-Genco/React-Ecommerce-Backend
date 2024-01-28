'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.removeConstraint('orders_products', 'orders_products_product_id_key')
    await queryInterface.removeConstraint('orders_products', 'orders_products_order_id_key')

  },

  async down (queryInterface) {
    await queryInterface.addConstraint('orders_products', {
      type: 'unique',
      fields: ['product_id'],
      name: 'orders_products_product_id_key'
    });
    await queryInterface.addConstraint('orders_products', {
      type: 'unique',
      fields: ['order_id'],
      name: 'orders_products_order_id_key'
    })
  }
};
