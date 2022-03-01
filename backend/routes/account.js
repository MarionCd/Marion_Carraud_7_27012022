const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const accountCtrl = require('../controllers/account');
 
// router.get("/:userId", auth, accountCtrl.getUserProfile);
// router.delete("/:userId", auth, accountCtrl.deleteUserProfile);

module.exports = router;