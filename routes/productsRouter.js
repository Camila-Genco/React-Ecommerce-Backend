const express = require("express");

const ProductsService = require("./../services/productService");
const validatorHandler = require("../middlewares/validatorHandler");
const {createProductSchema, getProductSchema, updateProductSchema, deleteProductSchema} = require("../schemas/productSchema");

const router = express.Router();
const service = new ProductsService();

router.get("/", async(req, res, next)=>{
  try {
    const products = await service.findAll(req.query);
    res.json(products);
  } catch (error) {
   next(error);
  }
});

router.get("/:id",
  validatorHandler(getProductSchema, 'params'),
  async(req, res, next)=>{
    try {
    const {id} = req.params;
    const product = await service.findOne(+id);
    res.json(product);
    } catch (error) {
      next(error);
    }
});

router.post("/",
  validatorHandler(createProductSchema, 'body'),
  async(req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct)
});

router.patch("/:id",
  validatorHandler(updateProductSchema, 'body'),
  async(req, res, next)=>{
  try {
    const body = req.body;
    const {id} = req.params;
    const changedProduct = await service.update(+id, body);
    res.json(changedProduct)
  } catch (error) {
    next(error);
  }
});

router.delete("/:id",
  validatorHandler(deleteProductSchema, 'params'),
  async(req, res)=>{
  const {id} = req.params;
  const rta = await service.delete(+id)
  res.json(rta)
});

module.exports = router;
