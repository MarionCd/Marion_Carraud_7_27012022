const jwt = require("jsonwebtoken");
const Post = require('../models/Post'); 
const Commentaire = require ('../models/Commentaire')

/***** ajout d'une publication  */
 
exports.addPost = (req, res, next) => {
//   const newPost = await Post.create({
//     id: "test",
//     author: req.body.author,
//     contenu: req.body.contenu
//   })
//   .then(() => res.status(201).json({ success : 'Post publié !' }))
//   .catch(error => res.status(400).json({ error }));
        
};

/******** ajout d'un commentaire **** */
exports.addComment = (req, res, next) => {
    // const newCommentaire = await Commentaire.create({
    //     id: "test",
    //     author: req.body.author,
    //     contenu: req.body.commentaire
    //   })
    //   .then(() => res.status(201).json({ success : 'Commentaire publié !' }))
    //   .catch(error => res.status(400).json({ error }))
  
};


/***************suppression d'une publication */
exports.deletePost = (req, res, next) => {

};


/***************suppression d'un commentaire */

exports.deleteComment = (req, res, next) => {
    
};