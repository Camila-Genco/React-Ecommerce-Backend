const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");

const {config} = require("./../config/config");

const verifyToken = (req, res, next)=>{
    const token = req.cookies.accesstoken
    if(!token){
        throw boom.unauthorized()
    }
    jwt.verify(token, config.jwtSecret, (err, user)=>{
        if(err){
            return res.status(401).json({success:false, message:"Token is invalid"})
        }
        req.user = user
        next()
    })
}

module.exports = {verifyToken}
