const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const db = require('../db/db');
const CLEF_SECRETE = process.env.CLEF_SECRETE;

// exports.getAccount = (req, res, next) =>{
//   const token = req.headers.authorization.split(' ')[1]
//   const decodedToken = jwt.verify(token, CLEF_SECRETE)
//   const userId = decodedToken.userId
//   const author = req.body.author;
//   const content = req.body.content;
//   //const postId = req.params.postId;

//   User.findOne({
//     where: { id: req.params.userId },
//     attributes: ["id", "email", "name", "lastname"],
//   })
//     .then((account) => {
//         res.status(200).json(account);
//     })
//     .catch(error => res.status(400).json({error: error}))

// };


exports.deleteAccount = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const decodedToken = jwt.verify(token, CLEF_SECRETE);
  const userId = decodedToken.userId;
  console.log(req.params.id)

  User.findOne({
    //where: { _id: userId }
    where: { id: req.params.id }
  })

  .then(account => {

        return account.destroy()
            .then(() => res.status(200).json({ message: "Le compte a été bien supprimé"}))
            .catch(error => res.status(400).json({error: "Impossible de supprimer le compte !"}));
  })
  .catch(error => res.status(404).json({error: "Le compte n'a pas été trouvé !"}));

};

exports.updateAccount = (req, res, next) => {
  //Params
  const userId = req.params.userId;
  // const email = req.body.email;
  const username = req.body.username;
  const userlastname = req.body.userlastname;

  User.findOne({ 
      where: {id: req.params.id}
  })
      .then(user => {
              return user.update({name: username, lastname: userlastname})
                  .then(() => res.status(200).json({ user, message: "Les données ont a été modifiées avec succès !"}))
                  .catch(error => res.status(500).json({error: "Impossible de mettre à jour les informations !"}));  
      })
      .catch(error => res.status(500).json({error: "Utilisateur introuvable"}));
}
