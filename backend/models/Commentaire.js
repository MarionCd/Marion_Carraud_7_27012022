const sequelize = require('sequelize');
const db = require('../db/db');
 
const {DataTypes} = sequelize;

const Commentaire = db.define('comment', {
    // id: {
    //     type: DataTypes.STRING,
    //     required:true
    // },
    author: {
        type:DataTypes.STRING,
        required:true
    },
    contenu: {
        type: DataTypes.STRING,
        required:true
    }
  
});

module.exports = Commentaire;
