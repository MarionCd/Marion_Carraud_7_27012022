const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const db = require('../db/db');

exports.getAccount = (req, res, next) =>{
  const token = req.headers.authorization.split(' ')[1]
  const decodedToken = jwt.verify(token, CLEF_SECRETE)
  const userId = decodedToken.userId
  const author = req.body.author;
  const content = req.body.content;
  // const postId = req.params.postId;
  User.findOne({
    where: { _id: userId }
  })
    .then((account) => {
        res.status(200).json(account);
    })
    .catch(error => res.status(400).json({error: error}))

};

exports.deleteAccount = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
  const userId = decodedToken.userId;
  
  User.findOne({
    where: { _id: userId }
  })

  .then(account => {

        return account.destroy()
            .then(() => res.status(200).json({ message: "Le post a été bien supprimé"}))
            .catch(error => res.status(400).json({error: "Impossible de supprimer le post !"}));
  })
  .catch(error => res.status(404).json({error: "Le post n'a pas été trouvé !"}));

};

exports.updateAccount = (req, res, next) => {
  //Params
  const userId = req.params.userId;
  // const email = req.body.email;
  const userName = req.body.username;
  const userLastname = req.body.userlastname;

  User.findOne({
     
      where: {_id: userId}
  })
      .then(user => {

          if (user.id == userId) {
              return user.update({username: userName, userlastname: userLastname})
                  .then(() => res.status(200).json({ message: "Les données ont a été modifiées avec succès !"}))
                  .catch(error => res.status(500).json({error: "Impossible de mettre à jour les informations !"}));
          }
      })
      .catch(error => res.status(500).json({error: "Utilisateur introuvable"}));
}
