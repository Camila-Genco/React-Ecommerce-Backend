const express = require("express");

const UserService = require("./../services/userService");
const validatorHandler = require("./../middlewares/validatorHandler")
const {getUserSchema, createUserSchema, updateUserSchema} = require("./../schemas/userSchema")

const router = express.Router();
const service = new UserService();

router.get("/", async(req, res, next)=>{
  try {
    const users = await service.findAll();
    res.json(users);
  } catch (error) {
   next(error);
  }
});

router.get("/:id",
  validatorHandler(getUserSchema, 'params'),
  async(req, res, next)=>{
    try {
      const {id} = req.params;
      const user = await service.findOne(+id);
      res.json(user);
    } catch (error) {
      next(error);
    }
});

router.post("/",
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser)
    } catch (error) {
      next(error)
    }
});

router.patch("/:id",
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const {id} = req.params;
      const changedUser = await service.update(+id, body);
      res.json(changedUser)
    } catch (error) {
      next(error);
    }
});

router.delete("/:id",
  validatorHandler(getUserSchema, 'params'),
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
