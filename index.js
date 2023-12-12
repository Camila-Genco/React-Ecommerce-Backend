const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
//const {checkApiKey} = require("./middlewares/authHandler")

const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/errorHandler")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ["http://localhost:3000"];
const options = {
  origin: (origin, callback) =>{
    if(whitelist.includes(origin) !==1){
      callback(null, true);
    }else{
      callback(new Error("not allowed"));
    }
  }
}

app.use(cors(options));

//require("./utils/auth");

app.get("/", (req, res)=>{
  res.send("Server en Express");
});

app.get("/nueva-ruta", (req, res)=>{
  res.send("Nueva Ruta");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log("Puerto: " + port);
})
