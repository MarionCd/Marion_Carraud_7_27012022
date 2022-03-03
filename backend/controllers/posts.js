const jwt = require("jsonwebtoken");
const Post = require('../models/Post'); 
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
        limit:10,
        attributes: ["_id", "author", "contenu", "createdAt"]
    })
        .then((post) => {
            res.status(200).json(post);
        })
        .catch(error => res.status(400).json({error: error}))

}
