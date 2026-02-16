/***********************************************************************
 * Objetivo: Sistema de calculos matemáticos
 * Data: 13/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

/*
 * Calcular Soma, Subtração, Divisão e Multiplicação 
 * Solicitar primeiro número
 * Solicitar segundo número
 * Solicitar a operação
 * Tratar dados (dados vazios, somente números, operações)
 * Calcular valor final
 * Exibir resultado
 * 
 * DESAFIO:
 * modularizar o projeto
 * tratar divisões por 0
 * Tratar entradas de dois ou mais ',' ou '.'
 * converter ',' para '.'
*/

// Importando biblioteca para realizar os calculos
const calculo = require('./modulo/calculos')

// Importando biblioteca para validar operação
const tratamento = require('./modulo/tratamento') 

// Importando biblioteca para ler as linhas no console
const readline = require('readline')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('----------------------------------------------------------------------------------')
console.log('--------------------------------- CALCULADORA ------------------------------------')
console.log('----------------------------------------------------------------------------------\n')



// entrada de dados pelo console
entradaDeDados.question('Por favor, digite o primeiro número: ', function(n1){
    let numero1 = n1
    entradaDeDados.question('Por favor, digite o segundo número: ', function(n2){
        let numero2 = n2
        entradaDeDados.question('Por favor, digite a operação (soma, subtração, divisão ou multiplicação): ', function(operacao){
            let operacaoMat = operacao

            // tratando a operação para ser possivel uma mensagem personalizada
            let operacaoVal = tratamento.validarOperacao(operacaoMat)

            if(operacaoVal){
                let resultado = calculo.definirResultado(operacaoMat, numero1, numero2)

                if(resultado){
                    // mensagem personalizada para cada operação
                    console.log(`\nA ${operacaoVal} dos números ${numero1} e ${numero2} é igual a: ${resultado}\n`)
                    console.log('----------------------------------------------------------------------------------\n')
                    entradaDeDados.close()
                }else{
                    console.log('----------------------------------------------------------------------------------\n')
                    entradaDeDados.close()
                }
            }         
        })
    })
})
