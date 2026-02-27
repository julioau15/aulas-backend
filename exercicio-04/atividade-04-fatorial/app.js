/*********************************************************************************
 * Objetivo: Arquivo responsavel pelas entradas de dados para calculo de fatorial
 * Data: 27/02/2026
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

// função geral do app
const fatorialApp = (entradaExterna) => {
    let entradaDeDados = entradaExterna ?? readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    // entrada de dados
    entradaDeDados.question('\nPor favor digite um número: ', function(n){
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
}

// permite a execução sem passar pelo main
if(require.main == module){
    fatorialApp()
}

// exportando app
module.exports = {fatorialApp}