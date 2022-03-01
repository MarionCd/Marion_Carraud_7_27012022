const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const db = require('../db/db');

 
/*************** Suppression compte ****************/
exports.deleteAccount = (req, res, next) => {
    
  };



// const models = require('../models/');

// exports.getUserProfile = (req, res, next) => {
//     const userId = req.params.userId
 
//     models.User.findOne({
//         attributes: ["id", "email", "name", "lastname"],
//         where: {id: userId}
//     })
//         .then(user => {
//             if (user == null) {
//                 return res.status(404).json({error: "Utilisateur non trouvé !"})
//             }
//             res.status(200).json({user, message: "L'utilisateur a bien été supprimé"})
//         })
//         .catch(error => res.status(500).json({error: "Impossible de récupérer l'tilisateur !"}))
// }

// exports.deleteUserProfile = (req, res, next) => {
//     //Params
//     const userId = req.params.userId;

//     models.Comment.destroy({
//         where: {Userid: userId}
//     })

//     models.Like.destroy({
//         where: {Userid: userId}
//     })

//     models.User.findOne({
//         where: {id: userId}
//     })
//         .then(user => {
//             if (user.id == userId) {
//                 return user.destroy()
//                     .then(() => res.status(201).json({message: "L'uilisateur a bien été supprimé !"}))
//                     .catch(error => res.status(400).json({error: "Impossible de supprimer l'utilisateur !"}));
//             }
//             res.status(400).json({error: "Impossible de supprimer l'utilisateur !"});
//         })
//         .catch(error => res.status(404).json({error: "Utilisateur non trouvé !"}));
// }



// const bcrypt = require ('bcrypt');
// // const User = require('../models/User');  à remplacer par bdd ?
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const db = require('../db/db');

 
// /*************** Suppression compte ****************/
// exports.deleteAccount = (req, res, next) => {
    
//   };