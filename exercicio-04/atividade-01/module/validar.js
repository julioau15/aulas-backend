/***********************************************************************
 * Objetivo: Arquivo responsavel por validar dados no projeto
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

const isEmpty = (dado) =>{
    if(dado == '')
        return true
    else
        return false
    
}

const isPar = (n)=>{
    let numero = Number(n)
    if(numero % 2 == 0)
        return true
    else
        return false
}

const isLimit = (min, max, n)=>{
    let numeroMin = Number(min)
    let numeroMax = Number(max)
    let numero = Number(n)

    if(n <= numeroMax && n >= numeroMin)
        return true
    else
        return false
}

module.exports = {
    isEmpty,
    isPar,
    isLimit
}