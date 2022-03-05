const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const accountCtrl = require('../controllers/account');
 
// router.get("/:id", auth, accountCtrl.getAccount);
router.delete("/:id", auth, accountCtrl.deleteAccount);
router.put("/:id", auth, accountCtrl.updateAccount);

module.exports = router;  