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
    if(tratamento.isEmpty(pesokg) || isNaN(pesokg) || tratamento.isEmpty(alturaM) || isNaN(alturaM) || !tratamento.isDecimalValido(pesokg) || !tratamento.isDecimalValido(alturaM))
        return false
    else
        return (pesokg / (alturaM ** 2)).toFixed(2)
}

// exporta função
module.exports = {
    calcularImc
}