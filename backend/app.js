const express = require('express');
const mongoose = require('mongoose');
const sauce = require('./models/Sauce');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser'); // c'est ce qui manquait : sa déclaration préalable !
const path = require('path');

var helmet = require('helmet'); // sécurité conseillé par express

const app = express();

mongoose.connect(process.env.TOP_SECRET, //dotenv
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie '))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json()); //c'est ce qu'il manquait
app.use(express.static('images'));

app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
  );


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;