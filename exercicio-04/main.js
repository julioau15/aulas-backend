/***********************************************************************
 * Objetivo: Arquivo responsavel por gerenciar todos arquivos do projeto
 * Data: 27/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

// Importando biblioteca para ler as linhas no console
const readline = require('readline')

// Importando biblioteca para validar
const validar = require('./module/tratamento')

// Importando imc app
const imc = require('./atividade-01-imc/app')

// Importando media escolar app
const mediaEscolar = require('./atividade-02-media-escolar/app')

// Importando tabuada app
const tabuada = require('./atividade-03-tabuada/app')

// Importando fatorial app
const fatorial = require('./atividade-04-fatorial/app')

// Importando impar ou par app
const imparOuPar = require('./atividade-05-par-ou-impar/app')


let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('-------------------------------------')
console.log('[1] - Calcular IMC')
console.log('[2] - Calcular Média escolar')
console.log('[3] - Calcular tabuada')
console.log('[4] - Calcular fatorial')
console.log('[5] - Consultar números impares os pares')
console.log('-------------------------------------')


// entrada de dados
entradaDeDados.question('O que deseja fazer? : ', function(opt){
    let opcao = opt

    // validações
    if(!validar.validarNumero(opcao) || !validar.isLimit(1,5,opcao)){
        console.log('Por favor, digite um número valido.')
        entradaDeDados.close()
    }else{
        // cada opção executa uma aplicação
        switch (Number(opt)){
            case 1:
                imc.imcApp(entradaDeDados)
                break
            case 2:
                mediaEscolar.mediaEscolarApp(entradaDeDados)
                break
            case 3:
                tabuada.tabuadaApp(entradaDeDados)
                break
            case 4:
                fatorial.fatorialApp(entradaDeDados)
                break
            case 5:
                imparOuPar.imparOuParApp(entradaDeDados)
                break
        }
    }
})