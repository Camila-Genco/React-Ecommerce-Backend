const {Model, DataTypes, Sequelize} = require("sequelize");

const ORDER_PRODUCT_TABLE = "orders_products";

const OrderProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: "order_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: "orders",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
  },
  productId: {
    field: "product_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: "products",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
  }
}

class OrderProduct extends Model {
  static associate(){}

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE,
      modelName: "OrderProduct",
      timestamps: false
    }
  }
}

module.exports = {ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct}
