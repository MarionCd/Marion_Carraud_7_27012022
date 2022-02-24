const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/signup");

router.post("/", userCtrl.signup);

module.exports = router;