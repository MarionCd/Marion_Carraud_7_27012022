//comme fichier sauce

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const postCtrl = require("../controllers/posts");

router.post("/", auth, multer, postCtrl.createPost);
router.post("/comment", auth, postCtrl.postComment);

router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);

router.delete("/comment/:id", auth, postCtrl.deleteComment);
router.delete("/:id", auth, postCtrl.deletePost);

module.exports = router;