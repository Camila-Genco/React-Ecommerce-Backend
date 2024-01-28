const express = require("express");

const OrderService = require("./../services/orderService");
const validatorHandler = require("../middlewares/validatorHandler");
const { getOrderSchema, createOrderSchema } = require("../schemas/orderSchema");

const router = express.Router();
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
  validatorHandler(getOrderSchema, 'params'),
  async(req, res, next)=>{
    try {
      const {id} = req.params;
      const order = await service.findOne(+id);
      res.json(order);
    } catch (error) {
      next(error);
    }
  });

router.get("/my-orders/:id",
  validatorHandler(getOrderSchema, 'params'),
  async(req, res, next)=>{
    try {
      const {id} = req.params;
      const order = await service.findbyUser(+id);
      res.json(order);
    } catch (error) {
      next(error);
    }
});

router.post("/",
  validatorHandler(createOrderSchema, 'body'),
  async(req, res)=>{
    const {user, products} = req.body;
    try {
      const newOrder = await service.create({
        userId: user.id});
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

router.delete("/:id",
  validatorHandler(getOrderSchema, 'params'),
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
