const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const db = require('../db/db');


/***************** Inscription utilisateur ********* */
exports.signup = async (req, res, next) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const newUser = await User.create({
    email: req.body.email,
    password: hash,
    name: req.body.name,
    lastname: req.body.lastname
  })
  .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
  .catch(error => res.status(400).json({ error }));
        
};


// /********** Inscription client ********/
// exports.signup = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10)
//       .then(hash => {
//         const user = new User({
//           email: req.body.email,
//           password: hash
//         });
//         user.save()
//           .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//           .catch(error => res.status(400).json({ error }));
//       })
//       .catch(error => res.status(500).json({ error }));
//   };

// /***************** Inscription utilisateur ********* */
// exports.signup = async (req, res, next) => {
//   // const {body} = req
  
//   console.log("données", req.body)
//     try {
//     const hash = await bcrypt.hash(req.body.password, 10)
          
//     const newUser = await User.create({ 
//       password: hash,
//       name: req.body.name,
//       lastname: req.body.lastname
//     }) 
//   return res.status(200).send({ success : "utilisateur créé" })
//   } catch(error){console.log(error)}
// };


/***********ce que j'ai essayé */
// exports.signup = async (req, res, next) => {
//   const hash = await bcrypt.hash(req.body.password, 10)
//         .then(hash => {
//           const user = ({
//             email : req.body.email,
//             password: hash,
//             name: req.body.name,
//             lastname: req.body.lastname
//           });
//           User.create() 
//             .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//             .catch(error => res.status(400).json({ error }));
//         })
//         .catch(error => res.status(500).json({ error }));
//     };

/*
exports.signup = async (req, res, next) => {
  const hash = await bcrypt.hash(req.body.password, 10)
        // .then(hash => {
        //   const user = ({
        //     email : req.body.email,
        //     password: hash,
        //     name: req.body.name,
        //     lastname: req.body.lastname
        //   });
        //   User.create() 
        //     .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        //     .catch(error => res.status(400).json({ error }));
        // })
        // .catch(error => res.status(500).json({ error }));
};

*/