/***********************************************************************
 * Objetivo: Arquivo responsavel pelas entradas de dados da tabuada
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

/**
 * - Solicitar: tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal
 * - tratar campos vazios
 * - as tabuadas devem estar no limite 2 e 100
 * - os contadores devem estar no limite 1 e 50
 * 
 * - saida:
 *      `Tabuada do [${tabuadaInicial}]`
 *       # X # = #
 *      `Tabuada do [${tabuadaInicial}]`
 *       # X # = #
 */


// Importando biblioteca para ler as linhas no console
const readline = require('readline')

// Importando biblioteca para validação
const validar = require('../module/tratamento')

// Importando biblioteca para calculos
const calcular = require('../module/calculos')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Por favor, digite a tabuada inicial: ', function(tabuadaI){
    let tabuadaInicial = tabuadaI
    entradaDeDados.question('Por favor, digite a tabuada final: ', function(tabuadaF){
        let tabuadaFinal = tabuadaF
        entradaDeDados.question('Por favor, digite o contador inicial: ', function(contadorI){
            let contadorInicial = contadorI
            entradaDeDados.question('Por favor, digite o contador inicial: ', function(contadorF){
                let contadorFinal = contadorF

                // valida os campos
                if(!validar.validarNumero(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal)){
                    console.log('ERRO ao calcular tabuada, por favor verifique os dados.')
                    entradaDeDados.close()

                }else{

                    if(!validar.isLimit(2,100, tabuadaInicial, tabuadaFinal)||!validar.isLimit(1,50,contadorInicial,contadorFinal)){
                         console.log('ERRO a tabuada precisa estar entre (2 - 100) e o contador entre (1 - 50).')
                        entradaDeDados.close()
                    }else{
                         // calcular tabuada inicial
                        console.log(`\nTabuada do [${tabuadaInicial}]`)
                        calcular.calcularTabuada(tabuadaInicial, contadorInicial, contadorFinal)

                        // calcular tabuada final
                        console.log(`\nTabuada do [${tabuadaFinal}]`)
                        calcular.calcularTabuada(tabuadaFinal, contadorInicial, contadorFinal)

                        entradaDeDados.close()
                    }
                   
                                       
                }
            })
        })
    })
})