const sequelize = require('sequelize');
const db = require('../db/db');

const {DataTypes} = sequelize;

const User = db.define('user', {
  email: { 
    type: DataTypes.STRING, 
    required: true, 
    unique: true
  },
  password: { 
    type: DataTypes.STRING, 
    required: true 
  },
  name: { 
    type: DataTypes.STRING, 
    required: true, 
  },
  lastname: { 
    type: DataTypes.STRING, 
    required: true, 
  }
  
});

module.exports = User;
