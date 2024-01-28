const Joi = require("joi");

const userSchema = Joi.object({
  id: Joi.number().integer().required(),
});

const productSchema = Joi.object({
  productId: Joi.number().integer().required(),
  amount: Joi.number().integer().min(1).required(),
});

const id = Joi.number().integer();

const getOrderSchema = Joi.object({
  id: id.required()
})

const createOrderSchema = Joi.object({
  user: userSchema.required(),
  products: Joi.array().items(productSchema).min(1).required(),
})

module.exports = {getOrderSchema, createOrderSchema}
