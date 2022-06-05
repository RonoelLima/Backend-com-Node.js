var calculadoraName = " minha calculadora versão 1"

let divisao = require('./divisao')
let soma = require('./soma')
let sub = require('./sub')
let mult = require('./mult')


console.log(soma(10,20))
let resultado  = mult(10,10)
let resultadosub = sub(20,40)
console.log(divisao(10,2))
console.log(resultado)
console.log(resultadosub)

module.exports = {
    calculadoraName,
}