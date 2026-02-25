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

const calcular = require('./module/calcular')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Por favor digite o nome do paciente: ', function(nome){
    let nomePaciente = nome
    entradaDeDados.question('Por favor digite o peso em Kg do paciente: ', function(peso){
        let pesoPaciente = peso
        entradaDeDados.question('Por favor digite a altura do paciente: ', function(altura){
            let alturaPaciente = altura

            let imc = calcular.calcularImc(pesoPaciente, alturaPaciente)

            if(!imc){
                console.log('ERRO ao calcular imc')
            }else{
                
            }
        
        })
    })
})