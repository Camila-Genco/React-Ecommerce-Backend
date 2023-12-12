const express = require("express");
const router = express.Router();

const OrderService = require("./../services/orderService");
const service = new OrderService();

router.get("/", async(req, res, next)=>{
  try {
    const order = await service.findAll();
    res.json(order);
  } catch (error) {
   next(error);
  }
});

router.get("/:id",
  async(req, res, next)=>{
    try {
    const {id} = req.params;
    const order = await service.findOne(+id);
    res.json(order);
    } catch (error) {
      next(error);
    }
});

router.post("/",
  async(req, res)=>{
  const body = req.body;
  const newOrder = await service.create(body);
  res.status(201).json(newOrder)
});

router.post("/add-item",
  async(req, res)=>{
  const body = req.body;
  const newItem = await service.addItem(body);
  res.status(201).json(newItem)
});

router.patch("/:id", async(req, res, next)=>{
  try {
    const body = req.body;
    const {id} = req.params;
    const changedOrder = await service.update(+id, body);
    res.json(changedOrder)
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
