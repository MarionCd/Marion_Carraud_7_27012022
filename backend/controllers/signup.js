const bcrypt = require ('bcrypt');
// const jwt = require('jsonwebtoken');
const User = require('../models/User');
// const db = require('../db/db');
 
// /***************** Inscription utilisateur ********* */

exports.signup = async (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const newUser = User.create({
        email: req.body.email,
        password: hash, 
        name: req.body.name,
        lastname: req.body.lastname
      })

      // user
      //   .create()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch(() => res.status(400).json({ message: error }));
    })
    .catch((error) => res.status(500).json({ message: error }));
}

// bcrypt
//     .hash(req.body.password, 10)
//     .then((hash) => {
//       const user = new User({
//         firstname: firstname,
//         name: name,
//         email: email,
//         password: hash,
//         isAdmin: 0
//       });
//       user
//         .save()
//         .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
//         .catch(() => res.status(500).json({ message: "error" }));
//     })
//     .catch((error) => res.status(500).json({ message: error }));
// };

// exports.signup = async (req, res, next) => {
//   bcrypt
//   .hash(req.body.password,10)
//   .then(hash => {
//     const user =  User
//       .create({
//         email: req.body.email,
//         password: hash, 
//         name: req.body.name,
//         lastname: req.body.lastname
//       })
//       .then(user => {
//         res.status(201).json({message: "utilisateur crée !"});
//       })
//       .catch(error => res.status(400).json({error}));
//       })
//   .catch(error => {res.status(500).json({error})});
// };

// bcrypt.hash(password, 10)
// .then(hash => {
//     const user = models.User.create({
//         email: email,
//         username: username,
//         password: hash,
//         bio: bio
//     })
//         .then(user => {
//             res.status(201).json({message: "utilisateur crée !"});
//         })
//         .catch(error => res.status(400).json({error}));
// })

// exports.signup = async (req, res, next) => {
//   bcrypt
//     .hash(req.body.password,10, (err, hash) => { 
    
//       .then(hash => {
//       const user =  User.create({
//         email: req.body.email,
//         password: hash, 
//         name: req.body.name,
//         lastname: req.body.lastname
//       })
//       res.status(201).json({ message: 'Utilisateur créé !' })})
//     .catch(error => res.status(500).json({ error }))
//   })
// };


// exports.signup = async (req, res, next) => {
//   bcrypt
//     .hash(req.body.password,10, (err, hash) => { console.log("encore échec hash :", err)})
//     .then(hash => {
//       const user =  User.create({
//         email: req.body.email,
//         password: hash, 
//         name: req.body.name,
//         lastname: req.body.lastname
//       })
//       res.status(201).json({ message: 'Utilisateur créé !' })})
//     .catch(error => res.status(500).json({ error }))
// };




// exports.signup = async (req, res, next) => {
//   const hash = bcrypt.hash(req.body.password, 10, (err, hash) => { console.log("encore échec hash :", err)} );
  

//   .then(hash => {
//     const newUser = await User({
//       email: req.body.email,
//       password: hash, 
//       name: req.body.name,
//       lastname: req.body.lastname
//     })

//     user.create()
//       .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//       .catch(error => res.status(400).json({ error }));
//   })
//   .catch(error => res.status(500).json({ error }));


//   const newUser = await User.create({
//     email: req.body.email,
//     password: hash, 
//     name: req.body.name,
//     lastname: req.body.lastname
//   })
//   .then(() => res.status(201).json({ success : 'Utilisateur créé !' }))
//   .catch(error => res.status(400).json({ error }));
        
// };



// const bcrypt = require ('bcrypt');
// // const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// // const db = require('../db/db');

// /***************** Inscription utilisateur ********* */
// exports.signup = async (req, res, next) => {
//   // const hash = bcrypt.hash(req.body.password, 10, (err, hash) => { console.log("encore échec hash :", err)} );
//   // bcrypt.hash(req.body.password, 10)
//   // .then(hash => {
//   //   const user = new User({
//   //     email: req.body.email,
//   //     password: hash
//   //   });

//   bcrypt.hash(req.body.password, 10, (err, hash) => { console.log("encore échec hash :", err)})
//     .then(hash => {
//       const newUser = User.create({
//         email: req.body.email,
//         password: hash, 
//         name: req.body.name,
//         lastname: req.body.lastname
//       })
//       res.status(201).json({ success : 'Utilisateur créé !' })
//     })
//       // .then(() => res.status(201).json({ success : 'Utilisateur créé !' }))
//       // .catch(error => res.status(400).json({ error }))
    
//     .catch(error => res.status(500).json({ error }))
        
// };

// const bcrypt = require ('bcrypt');
// // const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// // const db = require('../db/db');

/***************** Inscription utilisateur ********* */
// exports.signup = async (req, res, next) => {
//   // const hash = bcrypt.hash(req.body.password, 10, (err, hash) => { console.log("encore échec hash :", err)} );
  
//   const newUser = await User.create({
//     email: req.body.email,
//     password: hash, 
//     name: req.body.name,
//     lastname: req.body.lastname
//   })
//   .then(() => res.status(201).json({ success : 'Utilisateur créé !' }))
//   .catch(error => res.status(400).json({ error }));
        
// };

// exports.signup = async (req, res, next) => {
//   bcrypt
//     .hash(req.body.password,10, (err, hash) => { console.log("encore échec hash :", err)})
//     .then(hash => {
//       const user = new User({
//         email: req.body.email,
//         password: hash, 
//         name: req.body.name,
//         lastname: req.body.lastname
//       })

//       User.create({})
//     })

// }

// exports.signup = (req, res, next) => {
//   //console.log("signup", req.body);
//   bcrypt.hash(req.body.password, 10)
//     .then(hash => {
//       const user = new User({
//         email: req.body.email,
//         password: hash
//       });
//       user.save()
//         .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//         .catch(error => res.status(400).json({ error }));
//     })
//     .catch(error => res.status(500).json({ error }));
// };




// const bcrypt = require ('bcrypt');
// // const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// // const db = require('../db/db');

// /***************** Inscription utilisateur ********* */
// exports.signup = async (req, res, next) => {
//   // const hash = bcrypt.hash(req.body.password, 10, (err, hash) => { console.log("encore échec hash :", err)} );
//   // bcrypt.hash(req.body.password, 10)
//   // .then(hash => {
//   //   const user = new User({
//   //     email: req.body.email,
//   //     password: hash
//   //   });

//   bcrypt.hash(req.body.password, 10, (err, hash) => { console.log("encore échec hash :", err)})
//     .then(hash => {
//       const newUser = User.create({
//         email: req.body.email,
//         password: hash, 
//         name: req.body.name,
//         lastname: req.body.lastname
//       })
//       res.status(201).json({ success : 'Utilisateur créé !' })
//     })
//       // .then(() => res.status(201).json({ success : 'Utilisateur créé !' }))
//       // .catch(error => res.status(400).json({ error }))
    
//     .catch(error => res.status(500).json({ error }))
        
// };