const jwt = require("jsonwebtoken");
const Post = require('../models/Post'); 
// const Commentaire = require ('../models/Commentaire')
const CLEF_SECRETE = process.env.CLEF_SECRETE;

exports.addPost = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, CLEF_SECRETE)
    const userId = decodedToken.userId
    // const content = req.body.contenu; 
    const author = req.body.author;
    const content = req.body.content;
    
    Post.create({
            _id: userId,
            author: author,
            contenu: content
        })
        .then(() => res.status(201).json({ success : 'Post publié !' }))
        .catch(error => res.status(400).json({ error }));
    
  
};

// exports.addPost = (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1]
//     const decodedToken = jwt.verify(token, CLEF_SECRETE)
//     const userId = decodedToken.userId
//     // const content = req.body.contenu; 
//     const author = req.body.author;
//     const content = req.body.content;

//     const newPost = async () => { 
//         await Post
//             .create({
//                 _id: userId,
//                 author: author,
//                 contenu: content
//             })
//             .then(() => res.status(201).json({ success : 'Post publié !' }))
//             .catch(error => res.status(400).json({ error }));
//     }
  
// };


// exports.addPost = (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1];
//     const decodedToken = jwt.verify(token, CLEF_SECRETE);
//     const userId = decodedToken.userId; 
//     const author = req.body.author;
//     const content = req.body.contenu;
   
//     const newPost = async () => {
//         await Post.create({
//                 _id: userId,
//                 author: author,
//                 contenu: content
//             })
//             .then(() => res.status(201).json({ success : 'Post publié !' }))
//             .catch(error => res.status(400).json({ error : "loupé"}));
//         }
//     console.log("peut-être")
// };

// exports.signup = async (req, res, next) => {
//     bcrypt
//       .hash(req.body.password, 10)
//       .then((hash) => {
//         const newUser = User.create({
//           email: req.body.email,
//           password: hash, 
//           name: req.body.name,
//           lastname: req.body.lastname
//         })
  
//         // user
//         //   .create()
//           .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
//           .catch(() => res.status(400).json({ message: error }));
//       })
//       .catch((error) => res.status(500).json({ message: error }));
//   }

// exports.addPost = (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1]
//     const decodedToken = jwt.verify(token, CLEF_SECRETE)
//     const userId = decodedToken.userId
//     // const content = req.body.contenu; 
//     const author = req.body.author;
//     const content = req.body.contenu;
    
//     const newPost = async () => { 
//         await Post
//             .create({
//                 _id: userId,
//                 author: author,
//                 contenu: content
//             })
//             .then(() => res.status(201).json({ success : 'Post publié !' }))
//             .catch(error => res.status(400).json({ error }));
//     }
  
// };

/************************* */
// exports.addPost = async (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1]
//     const decodedToken = jwt.verify(token, CLEF_SECRETE)
//     const userId = decodedToken.userId
//     // const content = req.body.contenu; 
//     const author = req.body.author;
//     const content = req.body.content;

//     const newPost = Post
//         .create({
//             _id: userId,
//             author: author,
//             contenu: content
//         })
//         .then(() => res.status(201).json({ success : 'Post publié !' }))
//         .catch(error => res.status(400).json({ error }));
//     };




/***** ajout d'une publication  */


// exports.addPost = async (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1]
//     const decodedToken = jwt.verify(token, CLEF_SECRETE)
//     const userId = decodedToken.userId
//     // const content = req.body.contenu; 
//     const author = req.body.author;
//     const content = req.body.content;

//     const newPost = Post
//         .create({
//                 _id: userId,
//                 author: author,
//                 contenu: content
//         })
//         .then(() => res.status(201).json({ success : 'Post publié !' }))
//         .catch(error => res.status(400).json({ error }));
//     };

// exports.addPost = (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1]
//     const decodedToken = jwt.verify(token, CLEF_SECRETE)
//     const userId = decodedToken.userId
//     // const content = req.body.contenu; 
//     const author = req.body.author;
//     const content = req.body.content;

//     const newPost = async () => { 
//         await Post
//             .create({
//                 _id: userId,
//                 author: author,
//                 contenu: content
//             })
//             .then(() => res.status(201).json({ success : 'Post publié !' }))
//             .catch(error => res.status(400).json({ error }));
//     }
  
// };

/******** ajout d'un commentaire **** */

// exports.addComment = (req, res, next) => {
    
//     const token = req.headers.authorization.replace("Bearer", "").trim();
//     const decodedToken = jwt.verify(token, CLEF_SECRETE);
//     const userId = decodedToken.userId;
//     const comment = req.body.commentaire;
//     const postId = req.params.postId;

//     const newCommentaire = async () => { 
//         await Commentaire
//             .create({
//                 _id: userId,
//                 PostId: postId,
//                 contenu: comment
//             })
//             .then((comment) => res.status(201).json({ message : 'Le commentaire a bien été créé !', comment }))
//             .catch(error => res.status(500).json({ error }));
//     }
  
// };


// /***************suppression d'une publication */
// exports.deletePost = (req, res, next) => {
//     const token = req.headers.authorization.replace("Bearer ", "");
//     const decodedToken = jwt.verify(token, CLEF_SECRETE);
//     const userId = decodedToken.userId;

//     Post
//         .findOne({where: {id: req.params.id}
//         })
//         .then(post => {
//             if(post.UserId === userId){
//                 return post
//                     .destroy()
//                     .then(() => res.status(200).json({id: post.id, message : "publication supprimée"}))
//                     .catch(error => res.status(400).json({error: "vous ne pouvez pas supprimer la publication"}));

//             }
//         })
//         .catch(error => res.status(404).json({error: "La publication est introuvable"}));
// };


// /***************suppression d'un commentaire */

// exports.deleteComment = (req, res, next) => {

//     const token = req.headers.authorization.replace("Bearer ", "");
//     const decodedToken = jwt.verify(token, CLEF_SECRETE);
//     const userId = decodedToken.userId;

//     Commentaire
//         .findOne({where: {id: commentId}
//         })
//         .then(commentaire => {
//             if(commentaire.UserId === userId){
//                 return commentaire
//                     .destroy()
//                     .then(() => res.status(200).json({id: commentaire.id, message : "commentaire supprimé"}))
//                     .catch(error => res.status(400).json({error: "vous ne pouvez pas supprimer le commentaire"}));

//             }
//         })
//         .catch(error => res.status(404).json({error: "Le commentaire est introuvable"}))
    
// };