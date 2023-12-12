const express = require("express");
const router = express.Router();

const UserService = require("./../services/userService");
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
  async(req, res)=>{
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser)
});

router.patch("/:id", async(req, res, next)=>{
  try {
    const body = req.body;
    const {id} = req.params;
    const changedUser = await service.update(+id, body);
    res.json(changedUser)
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
