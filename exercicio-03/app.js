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

// Importando biblioteca para ler as linhas no console
const readline = require('readline')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados pelo console
entradaDeDados.question('Por favor, digite o primeiro número: ', function(n1){
    let numero1 = n1
    entradaDeDados.question('Por favor, digite o segundo número: ', function(n2){
        let numero2 = n2
        entradaDeDados.question('Por favor, digite a operação (soma, subtração, divisão ou multiplicação): ', function(operacao){
            let operacaoMat = operacao
            
            // Validação da operação de soma
            if(operacaoMat.toLowerCase() == 'somar' || operacaoMat.toLowerCase() == 'soma'){
                // função somar
                let soma = calculo.somar(numero1, numero2)

                // validação somar
                if(soma){
                    console.log(`\nA soma dos números ${numero1} e ${numero2} é: ${soma}`)
                    entradaDeDados.close()
                }else{
                    console.log('[ERRO]! Digite um numero valido.')
                    entradaDeDados.close()
                }

            // Validação da operação de subtração
            }else if(operacaoMat.toLowerCase() == 'subtração' || operacaoMat.toLowerCase() == 'subtrair'){
                // função subtrair
                let subtracao = calculo.subtrair(numero1, numero2)

                // validação subtrair
                if(subtracao){
                    console.log(`\nA subtração dos números ${numero1} e ${numero2} é: ${subtracao}`)
                    entradaDeDados.close()
                }else{
                    console.log('[ERRO]! Digite um numero valido.')
                    entradaDeDados.close()
                }

            // Validação da operação de divisão
            }else if(operacaoMat.toLowerCase() == 'divisão' || operacaoMat.toLowerCase() == 'dividir'){
                // função dividir
                let divisao = calculo.dividir(numero1, numero2)

                // validação dividir
                if(divisao){
                    console.log(`\nA divisão dos números ${numero1} e ${numero2} é: ${divisao}`)
                    entradaDeDados.close()
                }else{
                    console.log('[ERRO]! Digite um numero valido.')
                    entradaDeDados.close()
                }

            // Validação da operação de multiplicação
            }else if(operacaoMat.toLowerCase() == 'multiplicação' || operacaoMat.toLowerCase() == 'multiplicar'){
                // função multiplicar
                let multiplicacao = calculo.multiplicar(numero1,numero2)

                // validação multiplicar
                if(multiplicacao){
                    console.log(`\nA multiplicação dos números ${numero1} e ${numero2} é: ${multiplicacao}`)
                    entradaDeDados.close()
                }else{
                    console.log('[ERRO]! Digite um numero valido.')
                    entradaDeDados.close()
                }

            // erro de operação invalida
            }else{
                console.log('\n[ERRO]! Digite uma operação valida.')
                entradaDeDados.close()
            }
        })
    })
})
