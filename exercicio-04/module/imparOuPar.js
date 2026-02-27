/************************************************************************************************
 * Objetivo: Arquivo responsavel por regras de negócio para separação de numeros pares e impares
 * Data: 27/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *********************************************************************************************/

// importando biblioteca para validações
const validar = require('./tratamento')

// separa os numeros pares
const separarPar = (numeroI, numeroF) => {
    let numeroInicial = Number(numeroI)
    let numeroFinal = Number(numeroF)
    let numerosPares = [] // array que recebe os valores 

    // validações
    if(!validar.validarNumero(numeroInicial, numeroFinal) || !validar.isLimit(0, 500, numeroInicial) || !validar.isLimit(100, 1000, numeroFinal)){
        return false
    }else{

        // todos numeros Pares são adicionados ao array
        for(numeroInicial; numeroInicial <= numeroFinal; numeroInicial++){
            // separa os numeros pares
            if(validar.isPar(numeroInicial))
                numerosPares.push(numeroInicial)
        }

        return numerosPares
    }
}


// separa os numeros impares
const separarImpar = (numeroI, numeroF) => {
    let numeroInicial = Number(numeroI)
    let numeroFinal = Number(numeroF)
    let numerosImpares = [] // array que recebe os valores 

    // validações
    if(!validar.validarNumero(numeroInicial, numeroFinal) || !validar.isLimit(0, 500, numeroInicial) || !validar.isLimit(100, 1000, numeroFinal)){
        return false
    }else{

        // todos numeros impares são adicionados ao array
        for(numeroInicial; numeroInicial <= numeroFinal; numeroInicial++){
            // separa os numeros impares
            if(!validar.isPar(numeroInicial))
                numerosImpares.push(numeroInicial)
        }

        return numerosImpares
    }
}

// imprime os numeros
const imprimirNumeros = (n, opt, quant) => {
    let numeros = n
    let opcao = opt
    let quantidade = quant

    console.log(`\nNúmeros ${opcao}:`)
    
    // imprime todos numeros
    numeros.forEach(numero => {console.log(numero)})

    console.log(`Quantidade de números encontrados: ${quantidade}\n`)
} 

// retorna o tamnho de uma array
const consultarQuantidade = (n) => n.length

module.exports = {
    separarImpar,
    separarPar,
    imprimirNumeros,
    consultarQuantidade
}