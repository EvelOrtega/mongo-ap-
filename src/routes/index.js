const express = require("express");
const router = express.Router();
const users = require("../model/users.json")
const controller = require("../controller/user");


router.get("/", function (req, res, next) {
  res.status(200).send({
    title: "Api Meraki",
    version: "0.0.1",
  });
});
router.post("/users", controller.users);
router.post("/logon", controller.post);
router.post("/login", controller.login);
router.put("/desativar", controller.desativar);
router.put("/atualizar", controller.atualizar);


module.exports = router;
