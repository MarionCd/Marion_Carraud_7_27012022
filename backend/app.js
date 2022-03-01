const express = require('express');
const path = require('path');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const accountRoutes = require('./routes/account');
const postRoutes = require('./routes/post');
const bodyParser = require('body-parser');
var helmet = require('helmet'); // sécurité
const Db = require('./db/db');
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Params, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); 
app.use(express.static('images'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use( 
    helmet({
        crossOriginResourcePolicy: false,
    })
  );
 
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/posts', postRoutes);

Db.sync()
  .then(console.log("connexion à la bdd"))
  .catch(error => console.log(error))

module.exports = app;