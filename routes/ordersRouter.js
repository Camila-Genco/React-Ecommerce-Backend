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
  const {user, products} = req.body;
  try {
    const newOrder = await service.create({
      userId: user.id});
    res.json(newOrder)

    for (const product of products) {
      await service.addItem({
        orderId: newOrder.id,
        productId: product.productId,
        amount: product.amount
      });
    }

    res.status(200).json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order' });
  }
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
