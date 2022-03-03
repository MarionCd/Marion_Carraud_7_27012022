const express = require("express");
const router = express.Router(); 
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const postCtrl = require("../controllers/posts");

router.post("/:id", auth, postCtrl.addComment);
router.get("/", auth, postCtrl.getAllComment);
router.delete("/:id", auth, postCtrl.deleteComment);

module.exports = router;