const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const img = Joi.string().uri();
const price = Joi.number().integer();
const description = Joi.string().min(10);
const rating = Joi.number().integer().max(5);
const quantity = Joi.number().integer();
const categoryId = Joi.number().integer();

const getProductSchema = Joi.object({
  id: id.required()
})

const createProductSchema = Joi.object({
  name: name.required(),
  img: img.required(),
  price: price.required(),
  description: description.required(),
  rating: rating.required(),
  quantity: quantity,
  categoryId: categoryId.required(),
})

const updateProductSchema = Joi.object({
  name: name,
  img: img,
  price: price,
  description: description,
  rating: rating,
  quantity: quantity,
  categoryId: categoryId
})

module.exports = {getProductSchema, createProductSchema, updateProductSchema}
