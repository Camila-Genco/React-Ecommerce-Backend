const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userService = require("./../services/userService");
const service = new userService();
const {config} = require("./../config/config");

class AuthService {

  async getUser(email, password){
    const user = await service.findByEmail(email);
    if(!user){
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user){
    const payload = {
      sub: user.id,
    }
    const token = jwt.sign(payload, config.jwtSecret);

    return{
      user,
      token
    }
  }
}

module.exports = AuthService;
