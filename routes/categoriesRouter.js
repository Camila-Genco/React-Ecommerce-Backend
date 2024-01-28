const express = require("express");

const CategoryService = require("./../services/categoryService");
const validatorHandler = require("../middlewares/validatorHandler");
const { getCategorySchema, createCategorySchema, updateCategorySchema } = require("../schemas/categorySchema");

const router = express.Router();
const service = new CategoryService();

router.get("/", async(req, res, next)=>{
  try {
    const category = await service.findAll();
    res.json(category);
  } catch (error) {
   next(error);
  }
});

router.get("/:id",
  validatorHandler(getCategorySchema, 'params'),
  async(req, res, next)=>{
    try {
      const {id} = req.params;
      const category = await service.findOne(+id);
      res.json(category);
    } catch (error) {
      next(error);
    }
});

router.post("/",
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }

});

router.patch("/:id",
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const {id} = req.params;
      const changedCategory = await service.update(+id, body);
      res.json(changedCategory)
    } catch (error) {
      next(error);
    }
});

router.delete("/:id",
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const rta = await service.delete(+id)
      res.json(rta)
    } catch (error) {
      next(error)
    }
});

module.exports = router;
