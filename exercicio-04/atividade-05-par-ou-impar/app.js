/***********************************************************************
 * Objetivo: Arquivo responsavel pelas entradas de dados para o sistema
 * de gerenciamento de numeros pares e impares
 * Data: 27/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

/**
 * - Receber numeroInicial, numeroFinal
 * - validações:
 *      Validar entradas vazias e caracteres invalidos
 *      O numero inicial deve estar no limite (0 - 500)
 *      O numero final deve estar no limite (100 - 1000)
 *      O numero inicial deve ser menor que o final
 *      Os numeros não podem ser iguais
 * 
 * - Calcular a quantidade de números pares e impares encontrados
 *   entre o numero inicial e final
 * 
 * - saída:
 *     `Lista de Números pares: `
 *     `x`
 *     `x`
 *      `Quantidade de números encontrados: x`
 * 
 *     `Lista de Números impares: `
 *     `x`
 *     `x`
 *     `Quantidade de números encontrados: x`
 * 
 * - O usuario deve escolher qual lista imprimir
 */


// Importando biblioteca para ler as linhas no console
const readline = require('readline')

// Importando biblioteca para validar
const validar = require('../module/tratamento')

// Importando biblioteca para separar e imprimir os numeros
const imparOuPar = require('../module/imparOuPar')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Por favor digite o número inicial: ', function(numeroI){
    let numeroInicial = numeroI
    entradaDeDados.question('Por favor digite o número final: ', function(numeroF){
        let numeroFinal = numeroF
        entradaDeDados.question('Qual(is) tabela(s) deseja visualizar [par, impar ou ambas]? ', function(opt){
            let opcao = opt
            let quantidadeImpar
            let quantidadePar

            // validar campos vazios
            if(validar.isEmpty(numeroInicial, numeroFinal, opcao)){
                console.log('ERRO, os campos não podem estar vazios.')
                entradaDeDados.close()
            }else{
                let numerosImpares = imparOuPar.separarImpar(numeroInicial, numeroFinal)
                let numerosPares = imparOuPar.separarPar(numeroInicial, numeroFinal)

                // validação
                if(!numerosPares){
                    console.log('ERRO, por favor verfique os dados.')
                    entradaDeDados.close()
                }else{
                    // faz uma ação conforme a opção escolhida
                    switch (opcao.toLowerCase()){
                        case 'par':
                            quantidadePar = imparOuPar.consultarQuantidade(numerosPares)
                            imparOuPar.imprimirNumeros(numerosPares, 'pares', quantidadePar)
                            break
                        case 'impar':
                            quantidadeImpar = imparOuPar.consultarQuantidade(numerosImpares)
                            imparOuPar.imprimirNumeros(numerosImpares, 'impares', quantidadeImpar)
                            break
                        case 'ambas':
                            quantidadePar = imparOuPar.consultarQuantidade(numerosPares)
                            imparOuPar.imprimirNumeros(numerosPares, 'pares', quantidadePar)
                            quantidadeImpar = imparOuPar.consultarQuantidade(numerosImpares)
                            imparOuPar.imprimirNumeros(numerosImpares, 'impares', quantidadeImpar)
                            break
                        default:
                            console.log('ERRO, por favor digite uma opção valida.')
                            break
                    }

                    entradaDeDados.close()
                }   
            }
        })
    })
})