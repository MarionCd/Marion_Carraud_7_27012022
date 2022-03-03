const jwt = require("jsonwebtoken");
const Post = require('../models/Post'); 
// const Commentaire = require ('../models/Commentaire')
const CLEF_SECRETE = process.env.CLEF_SECRETE;

exports.addPost = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, CLEF_SECRETE)
    const userId = decodedToken.userId
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
exports.getAllPost = (req, res, next) => {
    Post.findAll({
        order: [["updatedAt", "DESC"]],
        attributes: ["_id", "author", "contenu", "createdAt", "updatedAt"],
        include: [{
            model: models.Post,
            attributes: ["author"]
        }]

    })
    .then(post => {
        if (post === null) {
            return res.status(404).json({error: "Il n'y a aucun post !"})
        }
        res.status(200).json({post});
    })
    .catch(error => res.status(400).json({error: error}))
}

// exports.getAllPost = (req, res, next) => {
//     const token = req.headers.authorization.split(' ')[1]
//     const decodedToken = jwt.verify(token, CLEF_SECRETE)
//     const userId = decodedToken.userId
//     const author = req.body.author;
//     const content = req.body.content;

//     Post.findAll()
//         .then((post) => res.status(200).json(post))
//         .catch((error) => res.status(400).json(console.log(error)));
// }

// exports.getAllPost = (req, res, next) => {

//     Post.findAll({
//         order: [["createdAt"]],
//         attributes: ["_id", "author", "contenu"]
//     })
//         .then((post) => {
//             res.status(200).json(post);
//         })
//         .catch(error => res.status(400).json({error: error}))

// }

// exports.getAllPosts = (req, res, next) => {
//     postModel
//       .findAllPosts()
//       .then((posts) => res.status(200).json(posts))
//       .catch((error) => res.status(400).json({ error }));
//   };