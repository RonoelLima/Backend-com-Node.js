const express = require("express") //Importando o express
const app = express(); // Iniciando o express





app.get("/", function(requisicao, resposta){
    resposta.send("Bem vindo ao guia do programador")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog")
})

// Rota com parâmetro opicional representado pelo simbolo de ?
app.get("/blog/:artigo?", function(req, res){
    let artigo = req.params.artigo;

    if(artigo) {
        res.send('<h2> pegando os dados passados na url' + artigo + '</h2>')
    } else {
        res.send("<h3>Bem vindo ao meu blog! www.guiadoprogramador.com</h3>")
    }
})

//rota tradicional obrigatória
app.get("/canal/youtube", function(req, res){
    let canal = req.query["canal"]
    res.send(canal)
})

app.get("/ola/:nome/:empresa", (req, res)=> {
    //REQ =: São os dados enviados pelo usuário
    //RES => É a resposta que vai ser enviada para o usuário
    res.send(`Oi ${nome}` + empresa)
    let nome = req.params.nome
    let empresa = req.params.empresa
})




app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso")
    }
})