/****************************************************************************************************
 * Objetivo: Arquivo responsavel por gerar a tubuada de um número
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************************************/

// import da biblioteca de calculos
const calcular = require('./calcular')

// função para gerar tabuada utilizando while
    // a declação de valores nos argumentos servem para
    // definir um valor padrão caso não for passado
const gerarTabuadaWhile = (n, minV = 0, maxV = 10) =>{
    let numero = Number(n)
    let minValor = Number(minV)
    let maxValor = Number(maxV)

    // inverte os valores caso o valor minimo seja maior que o maximo
    if(minValor > maxValor){
        let auxiliar = minValor
        minValor = maxValor
        maxValor = auxiliar
    }

    console.log('\nTabuada gerada por while: ')

    // repetição para gerar a tabuada
    while( minValor <= maxValor){
        // chama a função de multiplicar
        let resultado = calcular.multiplicar(numero, minValor)
        console.log(`${numero} x ${minValor} = ${resultado}`)
        minValor++
    }
}

// função para gerar tabuada utilizando for
const gerarTabuadaFor = (n, minV = 0, maxV = 10) =>{
    let numero = Number(n)
    let maxValor = Number(maxV)
    let minValor = Number(minV)

    // inverte os valores caso o valor minimo seja maior que o maximo
    if(minValor > maxValor){
        let auxiliar = minValor
        minValor = maxValor
        maxValor = auxiliar
    }

    console.log('\nTabuada gerada por for: ')

    // repetição para gerar a tabuada
    for(minValor; minValor <= maxValor; minValor++){
        // chama a função de multiplicar
        let resultado = calcular.multiplicar(numero, minValor)
        console.log(`${numero} x ${minValor} = ${resultado}`)
    }
}

const n = 11
const minV = 5
const maxV = 0

gerarTabuadaWhile(n, minV, maxV)
gerarTabuadaFor(n, minV, maxV)

