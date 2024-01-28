const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const cookieParser = require("cookie-parser");
//const {checkApiKey} = require("./middlewares/authHandler")

const {logErrors, boomErrorHandler} = require("./middlewares/errorHandler")

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const whitelist = ["http://localhost:4000", "http://localhost:3000"];
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

require("./utils/auth");

app.get("/", (req, res)=>{
  res.send("Server en Express");
});

app.get("/nueva-ruta", (req, res)=>{
  res.send("Nueva Ruta");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(cookieParser());

app.use((req, res) => {
  res.header('Access-Control-Allow-Credentials', 'true')})

app.listen(port, ()=>{
  console.log("Puerto: " + port);
})
