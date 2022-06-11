const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('index', {})
})

//View engine
app.set('view engine', 'ejs')

app.listen(8080, (req, res) => {
    console.log("O servidor está rodando na porta 8080!")
})