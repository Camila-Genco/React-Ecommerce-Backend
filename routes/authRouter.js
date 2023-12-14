const express = require("express");
const router = express.Router();

const AuthService = require("./../services/authService");
const service = new AuthService();

router.post("/login",
  async (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await service.getUser(email, password)
      const token = service.signToken(user);

      res.cookie("accessToken", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      }).status(200).json({token})

    } catch (error) {
      next(error)
    }
});

module.exports = router;
