const bcrypt = require ('bcrypt');
const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const CLEF_SECRETE = process.env.CLEF_SECRETE;
 
/*************** Connexion client ****************/
exports.login = (req, res, next) => {
  User
    .findOne({where: {email:req.body.email} })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Nom d\'utilisateur ou mot de passe incorrect !' });
        }
      bcrypt
        .compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Nom d\'utilisateur ou mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              CLEF_SECRETE,
              { expiresIn: '24h' } // l'utilisateur devra se reconnecter au bout de 24h
            )
          });
        })  
    .catch(error => res.status(500).json({ error }));
    })
};