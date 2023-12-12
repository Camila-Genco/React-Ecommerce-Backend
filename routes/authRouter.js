const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthService = require("./../services/authService");
const service = new AuthService();

router.post("/login",
  passport.authenticate("local", {session:false}),
  async (req, res, next)=>{
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error)
    }
});

module.exports = router;
