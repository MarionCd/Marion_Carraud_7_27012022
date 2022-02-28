const Sequelize = require('sequelize');
const TOP_SECRET = process.env.TOP_SECRET;

const sequelize = new Sequelize('groupomania', 'root', `${TOP_SECRET}`,
    {dialect: 'mysql', host:'localhost'}
); 

module.exports = sequelize;