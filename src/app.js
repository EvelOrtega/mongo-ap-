const express = require("express");
const app = express();
const router = express.Router();
const Database = require("./database");
const index = require("./routes/index");
const userRoute = require("./routes/index");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const password = "123456";

const salt1 = bcrypt.genSaltSync();
const pwdHash1 = bcrypt.hashSync(password, salt1);
console.log(`Hash 1 ${pwdHash1}`);
const verified1 = bcrypt.compareSync("123456", pwdHash1);
console.log(`Hash 1 verified ${verified1}`);

const salt2 = bcrypt.genSaltSync();
const pwdHash2 = bcrypt.hashSync(password, salt2);
console.log(`Hash 1 ${pwdHash2}`);
const verified2 = bcrypt.compareSync("123456", pwdHash2);
console.log(`Hash 2 verified ${verified2}`);

app.use(express.json());
app.use(cors());

/*app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  app.use(cors());
  next();
});*/

app.use("/", index);
app.use("/user", userRoute);

module.exports = app;
