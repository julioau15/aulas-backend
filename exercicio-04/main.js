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

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('-------------------------------------')
console.log('[1] - Calcular IMC')
console.log('[2] - Calcular Média escolar')
console.log('[3] - Calcular tabela')
console.log('[4] - Calcular fatorial')
console.log('[5] - Consultar números impares os pares')
console.log('-------------------------------------')


// entrada de dados
entradaDeDados.question('O que deseja fazer? : ', function(opt){
    let opcao = opt

    if(!validar.validarNumero(opcao) || !validar.isLimit(1,5,opcao)){
        console.log('Por favor, digite um número valido.')
        entradaDeDados.close()
    }else{
        switch (Number(opt)){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
        }
    }

})