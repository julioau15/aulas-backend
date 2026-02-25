/***********************************************************************
 * Objetivo: Arquivo responsavel por tratamento de dados no projeto
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

// valida se um dado está vazio
const isEmpty = (dado) =>{
    if(dado == '')
        return true
    else
        return false
    
}

// valida se um numero é par
const isPar = (n)=>{
    let numero = Number(n)
    if(numero % 2 == 0)
        return true
    else
        return false
}

// valida se um numero esta no limite definido
const isLimit = (min, max, n)=>{
    let numeroMin = Number(min)
    let numeroMax = Number(max)
    let numero = Number(n)

    if(n <= numeroMax && n >= numeroMin)
        return true
    else
        return false
}

// faz o tratamento de ',' em um numero decimal
const tratarDecimal = (n) => String(n).replace(/,/g, '.')

// valida se um numero decimal é valido
const isDecimalValido = (n) =>{
    let numero = tratarDecimal(n)
    if(numero.split('.').length - 1 > 1){
        return false
    }else{
        return true
    }
}

// exporta funções
module.exports = {
    isEmpty,
    isPar,
    isLimit,
    isDecimalValido,
    tratarDecimal
}