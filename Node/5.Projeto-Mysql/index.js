const express = require('express');
const app = express();
const bodyParser = require('body-parser');// responsável por traduzir os dados enviados em um estrutura javascript
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require("./database/Resposta")

//EJS
app.use(express.static('public'))
app.set('view engine','ejs')
//Database
connection.authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados!')
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })


// BodyParser
app.use(bodyParser.urlencoded({extend: false}))// comando que vai traduzir os dados em uma estrutura javascript
app.use(bodyParser.json());// permite a leitura de formulários enviados via JSON

//Rotas


app.get('/', (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id','DESC'] // ASC = crescente || DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index", {
            perguntas});
    })
});

app.get('/perguntar',(req, res) => {
    res.render('perguntar');
})

app.post('/salvarpergunta',(req, res)=>{
    let title = req.body.title
    let description = req.body.description
    Pergunta.create({
        title,
        description})
        .then(()=> {
            res.redirect('/');
        })
})


app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: { id: id }
    }).then( pergunta => {
        if(pergunta != undefined){

            Resposta.findAll(({
                where: { perguntaId: pergunta.id},
                order: [['id', 'DESC']]
            })).then((respostas)=> {
                res.render('pergunta',{
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        }else{
            res.redirect('/')
        }
    })
})

app.post('/responder', (req, res) => {
    let corpo = req.body.corpo;
    let perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(()=> {
            res.redirect('/pergunta/'+perguntaId);
        })
});

app.listen('8080', (req, res) => {
    console.log("App rodando! na porta 8080")
})