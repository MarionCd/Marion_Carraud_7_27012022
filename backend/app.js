const express = require('express');
const path = require('path');

// const mongoose = require('mongoose');

// routes

const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

// const sauce = require('./models/Sauce');

var helmet = require('helmet'); // sécurité

const app = express();

// mongoose.connect(process.env.TOP_SECRET, //dotenv
//     { useNewUrlParser: true,
//         useUnifiedTopology: true })
//     .then(() => console.log('Connexion à MongoDB réussie '))
//     .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); 
app.use(express.static('images'));

app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
  );


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/account', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;