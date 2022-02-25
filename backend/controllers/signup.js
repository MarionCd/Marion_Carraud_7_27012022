const bcrypt = require ('bcrypt');
// const jwt = require('jsonwebtoken');
const User = require('../models/User');
// const db = require('../db/db');

/***************** Inscription utilisateur ********* */
exports.signup = async (req, res, next) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const newUser = await User.create({
    email: req.body.email,
    password: hash,
    name: req.body.name,
    lastname: req.body.lastname
  })
  .then(() => res.status(201).json({ success : 'Utilisateur créé !' }))
  .catch(error => res.status(400).json({ error }));
        
};