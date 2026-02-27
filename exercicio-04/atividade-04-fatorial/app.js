/*********************************************************************************
 * Objetivo: Arquivo responsavel pelas entradas de dados para calculo de fatorial
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ******************************************************************************/

/**
 * - Receber um número para calcular fatorial
 * - Calcular
 * 
 * - Saída:
 *      `Fatorial de ${`numero} é #X#X# = ${resultado}`
 */


// Importando biblioteca para ler as linhas no console
const readline = require('readline')

// Importando biblioteca para calcular fatorial
const calcular = require('../module/calculos')

// Importando biblioteca imprimir resultado
const imprimir = require('../module/fatorial')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Por favor digite um número: ', function(n){
    let numero = n

    // calcula fatorial
    let resultado = calcular.calcularFatorial(n)

    // confirma se o resultado é valido
    if(resultado){
        // imprime resultado
        console.log(imprimir.imprimirResultado(numero, resultado))
        entradaDeDados.close()
    }else{
        console.log('ERRO, por favor digite um numero valido.')
        entradaDeDados.close()
    }
})