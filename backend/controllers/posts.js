const jwt = require("jsonwebtoken");
const Post = require('../models/Post'); 
const Comment = require('../models/Commentaire')
const CLEF_SECRETE = process.env.CLEF_SECRETE;

exports.addPost = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, CLEF_SECRETE)
    const userId = decodedToken.userId
    const author = req.body.author;
    const content = req.body.contenu;
    
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
        attributes: ["id","_id", "author", "contenu", "createdAt"]
    })
        .then((post) => {
            res.status(200).json(post);
        })
        .catch(error => res.status(400).json({error: error}))

};

exports.deletePost = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, CLEF_SECRETE);
    const userId = decodedToken.userId;

    Post.findOne({
        where: { id: req.params.id }
    })
        .then(post => {
            if (post.UserId === userId) {
                return post.destroy()
                    .then(() => res.status(200).json({ 
                        id: post.id,
                        message: "Le post a été bien supprimé"}))
                    .catch(error => res.status(400).json({error: "Impossible de supprimer le post !"}));
            }

        })
        .catch(error => res.status(404).json({error: "Le post n'a pas été trouvé !"}));
}


exports.addComment = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, CLEF_SECRETE)
    const userId = decodedToken.userId
    const author = req.body.author;
    const content = req.body.contenu;
    
    Comment.create({
            _id: req.params.id,
            idUser: userId,
            author: author,
            contenu: content
        })
        .then(() => res.status(201).json({ success : 'Commentaire publié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllComment = (req, res, next) => {
    // const postId = req.params.postId;
    console.log(req.params.id)
    Comment.findAll({
        where: { _id: req.params.id },
        limit:10,
        attributes: ["_id", "author", "contenu", "createdAt", "id"]
    })
        .then((comment) => {
            res.status(200).json(comment);
        })
        .catch(error => res.status(400).json({error: error}))

};

exports.deleteComment = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, CLEF_SECRETE);
    const userId = decodedToken.userId;
    console.log(req.params)
    console.log(userId)

    Comment.findOne({
        where: { id: req.params.id }
    })
        .then(comment => {
            console.log(comment._id)
            if (comment.idUser == userId) {
                return comment.destroy()
                    .then(() => res.status(200).json({ message: "Le post a été bien supprimé"}))
                    .catch(error => res.status(400).json({error: "Impossible de supprimer le post !"}));
            }

        })
        .catch(error => res.status(404).json({error: "Le post n'a pas été trouvé !"}));
}