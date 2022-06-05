comandos
mysql -h localhost -u root -p
password: Lucas2022
user: ronoel
senha: lucas2022

Comandos do MYSQL
SHOW DATABASES; // mostra os bancos de dados existentes
CREATE DATABASE " nome do banco"; // cria um novo banco de dados
USE "nome do banco"; // seleciona o banco de dados para operar

Tipos de dados MYSQL

texto - texto
int - numberos
char - caracteres
float - numeros decimais
date - datas
blob - arquivos

SHOW TABLES: // comando para mostra as tabelas do banco

CREATE TABLE usuarios(
    nome VARCHAR(50) // nomes com até 50 caracteres,
    email VARCHAR(100),// emails com até 100 caracters,
    idade INT()// numeros inteiros
);
comando para inserir no cmd abaixo
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

DESCRIBE usuarios; / comando para descrever uma tabela criada

comando para inserir um dados 
INSERT INTO usuarios(nome, email, idade) VALUES (
    "gabriele Lima",
    "gabriele@gmail.com",
     32
);

Comando para listar os dados de uma tabela
SELECT * FROM usuarios // SELECIONA TODOS OS DADOS DATABLE USUÁRIO

WHERE - palavra chave para fazer consulta no banco de dados

SELECT * FROM usuarios WHERE idade = 8
SELECT * FROM usuarios WHERE idade >= 32;
SELECT * FROM usuarios WHERE nome = "Ronoel"

comando para deletar uma mensagem

DELETE FROM usuarios - este comando deleta toda sua tabela de dados

DELETE FROM usuarios WHERE nome="Ronoel Lima";

UPDATE usuarios SET nome="Nome de Teste"// este comando altera todos os campos do item nome

UPDATE usuarios SET nome = "Nome de Teste" WHERE NOME="Victor Lima";
