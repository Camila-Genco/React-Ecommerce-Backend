const passport = require("passport");

const JwtStrategy = require("./strategies/jwtStrategy");

passport.use(JwtStrategy);

