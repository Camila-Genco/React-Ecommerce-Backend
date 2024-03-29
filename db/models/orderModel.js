const {Model, DataTypes, Sequelize} = require("sequelize");

const ORDER_TABLE = "orders";

const OrderSchema = {
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
  userId: {
    field: "user_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
  },
}

class Order extends Model {
  static associate(models){
    this.belongsTo(models.User, {as: "user"});
    this.belongsToMany(models.Product, {
      as: "items",
      through: models.OrderProduct,
      foreignKey: "orderId",
      otherKey: "productId"
    })
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
      timestamps: false
    }
  }
}

module.exports = {ORDER_TABLE, OrderSchema, Order}
