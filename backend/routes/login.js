const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/login");
 
router.post("/", userCtrl.login);

module.exports = router;