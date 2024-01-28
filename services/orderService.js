const {models} = require("../libs/sequelize")
const boom = require("@hapi/boom");

class OrderService {

  create(data){
    const newOrder = models.Order.create(data);
    return newOrder;
  };

  async addItem(data){
    const newItem = models.OrderProduct.create(data);
    return newItem;
  };

  async findAll(){
    const rta = await models.Order.findAll({
      include: ["user", "items"]
    });
    return rta;
  };

  async findbyUser(userId){
    const orders = await models.Order.findAll({
      where: {
        "$user.id$": userId
      },
      include: [{
        association: "user",
      }]
    });
    return orders;
  };

  async findOne(id){
    const order = await models.Order.findByPk(id, {
      include: ["user", "items"]
    });
    if (!order){
      throw boom.notFound("order not found");
    }
    return order;
  };

  async delete(id){
    const order = await this.findOne(id);
    await models.OrderProduct.destroy({ where: { orderId: id } });
    await order.destroy();
    return {id};
  };
}

module.exports = OrderService;
