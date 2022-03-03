const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const accountCtrl = require('../controllers/account');
 
router.get("/account/:id", auth, accountCtrl.getAccount);
router.delete("/account/:id", auth, accountCtrl.deleteAccount);

module.exports = router;  