const {models} = require("../libs/sequelize")
const boom = require("@hapi/boom");

class CustomerService {

  create(data){
    const newCustomer = models.Customer.create(data);
    return newCustomer;
  };

  async findAll(){
    const rta = await models.Customer.findAll({
      include: ["user"]
    });
    return rta;
  };

  async findOne(id){
    const customer = await models.Customer.findByPk(id, {
      include: ["user"]
    });
    if (!customer){
      throw boom.notFound("user nor found");
    }
    return customer;
  };

  async update(id, data){
    const customer = await this.findOne(id);
    const rta = await customer.update(data);
    return rta;
  };

  async delete(id){
    const customer = await this.findOne(id);
    await customer.destroy();
    return {id};
  };
}

module.exports = CustomerService;
