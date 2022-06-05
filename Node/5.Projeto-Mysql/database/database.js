const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas','root','lucas2022',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;