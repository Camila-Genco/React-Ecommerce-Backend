const express = require("express");
const router = express.Router();

const CustomerService = require("./../services/customerService");
const service = new CustomerService();

router.get("/", async(req, res, next)=>{
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
   next(error);
  }
});

router.get("/:id",
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
  async(req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct)
});

router.patch("/:id", async(req, res, next)=>{
  try {
    const body = req.body;
    const {id} = req.params;
    const changedProduct = await service.update(+id, body);
    res.json(changedProduct)
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
