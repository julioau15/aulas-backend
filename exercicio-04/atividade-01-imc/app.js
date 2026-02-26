/***********************************************************************
 * Objetivo: Arquivo responsavel por receber os dados para calcular imc
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

/**
 *  Receber Nome, Peso(Kg), Altura(M)
 *  Realizar o Calculo: 
 *      IMC = peso / (altura ** 2)
 *  Exibir resultado
 *  'O IMC do(a) Senhor(a) é xxx, CLASSIFICAÇÂO'
 */


// Importando biblioteca para ler as linhas no console
const readline = require('readline')

// Importando biblioteca para calculos
const calcular = require('../module/calculos')

// Importando biblioteca para classificação do imc
const classificar = require('../module/imc')

// Importando biblioteca para tratamento
const tratamento = require('../module/tratamento')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Por favor digite o nome do paciente: ', function(nome){
    let nomePaciente = nome
    entradaDeDados.question('Por favor digite o peso em quilos do paciente: ', function(peso){
        let pesoPaciente = peso
        entradaDeDados.question('Por favor digite a altura em metros do paciente: ', function(altura){
            let alturaPaciente = altura

            // calcula o imc
            let imc = calcular.calcularImc(pesoPaciente, alturaPaciente)

            // se o imc for valido e o nome for preenchido o programa continua
            if(!imc || tratamento.isEmpty(nome)){
                console.log('ERRO ao calcular imc. Por favor verifique os dados.')
                entradaDeDados.close()
            }else{
                // classifica o imc
                let classificacao = classificar.classificarImc(imc)

                console.log(`O IMC do(a) Senhor(a) ${nomePaciente} é ${imc}, ${classificacao}`)

                entradaDeDados.close()
            }
        
        })
    })
})