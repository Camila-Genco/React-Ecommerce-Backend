const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(1).max(20);
const lastName = Joi.string().min(1).max(20);
const email = Joi.string().email();
const password = Joi.string().min(8);
const city = Joi.string();
const address = Joi.string();
const zip = Joi.number().integer();

const getUserSchema = Joi.object({
  id: id.required()
})

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  city: city.required(),
  address: address.required(),
  zip: zip.required(),
})

const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  password: password,
  city: city,
  address: address,
  zip: zip
})

module.exports = {getUserSchema, createUserSchema, updateUserSchema}
