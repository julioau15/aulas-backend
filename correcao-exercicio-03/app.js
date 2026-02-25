/*****************************************************************************
 * Objetivo: Arquivo responsavel pelas entradas e saída de dados da aplicação
 * Data: 20/02/2026
 * Autor: Julio
 * Versão: 1.0
 * **************************************************************************/

// Importando biblioteca para ler as linhas no console
const readline = require('readline')

// Importando biblioteca para calculos
const calcular = require('./modulo/calcular')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('primeiro valor: ', function(n1){
    let numero1 = n1
    entradaDeDados.question('segundo valor: ', function(n2){
        let numero2 = n2
        entradaDeDados.question('operação: ', function(op){
            let operacao = op

            let resultado = calcular.calcular(numero1, numero2, operacao)
            console.log('\n----------------------------\n')
            console.log(`O resultado é: ${resultado}`)
            console.log('\n----------------------------\n')

            entradaDeDados.close()
        })
    })
})