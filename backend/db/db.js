import {Sequelize} from "sequelize";

export default new Sequelize('crud', 'root', 'mdp', {dialect: 'mysql', host:'localhost'})