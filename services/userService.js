const {models} = require("../libs/sequelize")
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

class UserService {

  async create(data){
    const hash = await bcrypt.hash(data.password, 10)
    const newUser = models.User.create({
      ...data,
      password: hash
    });
    delete (await newUser).dataValues.password;
    return newUser;
  };

  async findAll(){
    const rta = await models.User.findAll();
    return rta;
  };

  async findByEmail(email){
    const rta = await models.User.findOne({
      where: {email}
    });
    return rta;
  };

  async findOne(id){
    const user = await models.User.findByPk(id);
    if (!user){
      throw boom.notFound("user not found");
    }
    return user;
  };

  async update(id, data){
    const user = await this.findOne(id);
    const rta = await user.update(data);
    return rta;
  };

  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return {id};
  };
}

module.exports = UserService;
