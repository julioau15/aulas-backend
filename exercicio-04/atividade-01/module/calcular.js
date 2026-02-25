/***********************************************************************
 * Objetivo: Arquivo responsavel por calcular o imc
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

const validacao = require('./validar')

const calcularImc = (peso, altura) =>{
    let pesokg = Number(peso)
    let alturaM = Number(altura)

    if(validacao.isEmpty(peso) || isNaN(peso) || validacao.isEmpty(altura) || isNaN(altura))
        return false
    else
        return (peso / (altura ** 2)).toFixed(2)
}

module.exports = {
    calcularImc
}