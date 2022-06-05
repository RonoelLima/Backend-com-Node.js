const Sequelize = require('sequelize');
const connection = require('./database');

//Criando as tabelas e colunas no banco de dados
const Resposta = connection.define("respostas" ,{
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false // não permite que o campo fique vazio
    },
    perguntaId: {
        type: Sequelize.INTEGER,//tipo de dado
        allowNull: false // não permite
    }
})

Resposta.sync({force: false})// comando para não criar a tabela novamente caso já exista

module.exports = Resposta;