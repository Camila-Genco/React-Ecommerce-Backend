const express = require("express");
const router = express.Router();

const CategoryService = require("./../services/categoryService");
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
  async(req, res)=>{
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory)
});

router.patch("/:id", async(req, res, next)=>{
  try {
    const body = req.body;
    const {id} = req.params;
    const changedCategory = await service.update(+id, body);
    res.json(changedCategory)
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async(req, res)=>{
  const {id} = req.params;
  const rta = await service.delete(+id)
  res.json(rta)
});

module.exports = router;
