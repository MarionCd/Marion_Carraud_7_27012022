const bcrypt = require ('bcrypt');
// const User = require('../models/User');  à remplacer par bdd ?
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const db = require('../db/db');

 
/*************** Suppression compte ****************/
exports.deleteAccount = (req, res, next) => {
    
  };