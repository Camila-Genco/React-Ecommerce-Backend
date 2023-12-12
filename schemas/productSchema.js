const Joi = require("joi");

const id = Joi.string();
const name = Joi.string().min(3);
const img = Joi.string();
const price = Joi.number().integer().min(1);
const description = Joi.string();
const rating = Joi.number().integer();
const quantity = Joi.number().integer().min(1);
const categoryId = Joi.number();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  img: img.required(),
  description: description.required(),
  quantity: quantity,
  rating: rating.required(),
  categoryId: categoryId.required(),
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  img: img,
  description: description,
  quantity: quantity,
  rating: rating,
  categoryId: categoryId
})

const getProductSchema = Joi.object({
  id: id.required()
})

const deleteProductSchema = Joi.object({
  id: id.required()
})
module.exports = {createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema}
