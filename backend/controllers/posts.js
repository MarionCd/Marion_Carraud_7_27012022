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

};

exports.deletePost = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    Post.findOne({
        where: { _id: userId }
    })
        .then(post => {
            // if (post.UserId === userId) {
                return post.destroy()
                    .then(() => res.status(200).json({ message: "Le post a été bien supprimé"}))
                    .catch(error => res.status(400).json({error: "Impossible de supprimer le post !"}));
            // }

        })
        .catch(error => res.status(404).json({error: "Le post n'a pas été trouvé !"}));
}



// exports.deletePost = (req, res, next) => {

//     const token = req.headers.authorization.replace("Bearer ", "");
//     const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
//     const userId = decodedToken.userId;

//     models.Post.findOne({
//         where: {id: req.params.id}
//     })
//         .then(post => {
//             if (post.UserId === userId) {
//                 return post.destroy()
//                     .then(() => res.status(200).json({id: post.id, message: "Le post a été bien  supprimé !"}))
//                     .catch(error => res.status(400).json({error: "Impossible de supprimer le post !"}));
//             }

//         })
//         .catch(error => res.status(404).json({error: "Le post n'a pas été  trouvé !"}));
// }
