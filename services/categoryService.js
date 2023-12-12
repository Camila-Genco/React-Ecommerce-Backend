const {models} = require("../libs/sequelize")
const boom = require("@hapi/boom");

class CategoryService {

  create(data){
    const newCategory = models.Category.create(data);
    return newCategory;
  };

  async findAll(){
    const rta = await models.Category.findAll({
      include: ["products"]
    });
    return rta;
  };

  async findOne(id){
    const category = await models.Category.findByPk(id, {
      include: ["products"]
    });
    if (!category){
      throw boom.notFound("category not found");
    }
    return category;
  };

  async update(id, data){
    const category = await this.findOne(id);
    const rta = await category.update(data);
    return rta;
  };

  async delete(id){
    const category = await this.findOne(id);
    await category.destroy();
    return {id};
  };
}

module.exports = CategoryService;
