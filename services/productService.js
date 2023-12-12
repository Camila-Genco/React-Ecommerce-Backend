const boom = require("@hapi/boom");
const {Op} = require("sequelize");

const {models} = require("../libs/sequelize")

class ProductsService {

  create(data){
    const newProduct = models.Product.create(data);
    return newProduct;
  };

  async findAll(query){
    const options = {
      include: ["category"],
      where: {}
    }
    const {limit, offset, price} = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    if (price){
      options.where.price = {
        [Op.lte]: price
      }
    }
    const rta = await models.Product.findAll(options);
    return rta;
  };

  async findOne(id){
    const product = await models.Product.findByPk(id, {
      include: ["category"]
    });
    if (!product){
      throw boom.notFound("product not found");
    }
    return product;
  };

  async update(id, data){
    const product = await this.findOne(id);
    const rta = await product.update(data);
    return rta;
  };

  async delete(id){
    const product = await this.findOne(id);
    await product.destroy();
    return {id};
  };
}

module.exports = ProductsService;
