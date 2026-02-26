/***********************************************************************
 * Objetivo: Arquivo responsavel por realizar calculos no projeto
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

// import da biblioteca de tratamento
const tratamento = require('./tratamento')

// calcula o imc
const calcularImc = (peso, altura) =>{
    let pesokg = Number(tratamento.tratarDecimal(peso))
    let alturaM = Number(tratamento.tratarDecimal(altura))

    // validação
    if(!tratamento.validarNumero(pesokg, alturaM))
        return false
    else
        return (pesokg / (alturaM ** 2)).toFixed(2)
}

// calcula a media com 4 valores
const calcularMedia = (n1, n2, n3, n4) => {
    let numero1 = Number(tratamento.tratarDecimal(n1))
    let numero2 = Number(tratamento.tratarDecimal(n2))
    let numero3 = Number(tratamento.tratarDecimal(n3))
    let numero4 = Number(tratamento.tratarDecimal(n4))

    // validações
    if(!tratamento.validarNumero(numero1, numero2, numero3, numero4)|| !tratamento.isLimit(0,100,numero1,numero2,numero3,numero4))
        return false
    else
        // retorna a media
        return (numero1 + numero2 + numero3 + numero4) / 4
}

// calcula a media com 2 valores
const calcularMedia2 = (n1, n2) => {
    let numero1 = Number(tratamento.tratarDecimal(n1))
    let numero2 = Number(tratamento.tratarDecimal(n2))

    // validações
     if(!tratamento.validarNumero(numero1, numero2) ||  !tratamento.isLimit(0,100,numero1, numero2))
        return false
    else
        // retorna a media
        return (numero1 + numero2) / 2
}   

// exporta função
module.exports = {
    calcularImc,
    calcularMedia,
    calcularMedia2
}