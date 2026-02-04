/***********************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 29/01/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

/*
    * Existem 3 formas de criação de variaveis

        *  var -> Permite a criação de um espaço na memória do
                  tipo variavel. Foi utilizado em projetos antigos.
                  Recomendação: Caso queira utilizar, recomenda-se
                  na criação de variaveis globais. (inicio do código)

        * let -> Permite a criação de um espaço na memória do
                  tipo variavel. A utilização deste padrão é para a
                  criação dentro de blocos de programação { }.
                  Essa variavel nasce e morre dentro deste bloco.
                  Não é recomendado a sua utilização em escopo global.

        * const -> Permite a criação de um espaço na memória do
                  tipo constante. Não sofre alterações durante o código.
                  A const pode ser utilizada dentro e fora de bloco { }.
                  Recomendação: Caso queira diferenciar uma const, um var
                  ou um let. A const pode ser criada com letras MAIÚSCULAS. 
*/

/**
 * Operadores de Comparação
 *  == -> Permite comparar a igualdade de dois valores
 *  < -> Permite comparar valores Menores
 *  > ->  Permite comparar valores Maiores
 *  >= -> Permite comparar valores menores  ou iguais
 *  <= -> Permite comparar valores maiores ou iguais
 *  != -> permite comparar a diferença entre dois conteúdos
 *  === -> permite comparar a igualdade de conteúdos
            e a igualdade de tipos de dados
 *  !== -> permite comparar a diferença de conteúdos
            e a diferença de tipos de dados
 *  ==! -> Permite comparar a igualdade de conteudos
            e a diferença de tipos de dados
*   ==! -> Permite comparar a diferença de conteudos
            e a diferença de tipos de dados
 */

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("****************************")

entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    let nomeAluno = nome 
    entradaDeDados.question('Digite a primeira nota: ', function(valor1){
        let nota1 = valor1
        entradaDeDados.question('Digite a segunda nota: ', function(valor2){
            let nota2 = valor2
            entradaDeDados.question('Digite a terceira nota: ', function(valor3){
                let nota3 = valor3
                entradaDeDados.question('Digite a quarta nota: ', function(valor4){
                    let nota4 = valor4
                    
                    if(isVazio(nomeAluno, nota1, nota2, nota3, nota4)){
                        console.log('[ERRO] está vazio')
                    }else if(!isLimite(nota1, nota2, nota3, nota4)){
                        console.log('[ERRO] as notas estão fora do limite (0 - 100)')  
                    }else if(!isNumero(nota1, nota2, nota3, nota4)){
                        console.log('[ERRO] as notas precisam ser números')  
                    }else{
                        let mediaAluno = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        console.log(`--------------------`)
                        console.log(`Aluno: ${nomeAluno}`)
                        console.log(`Média: ${mediaAluno.toFixed(2)}`)
                        console.log(`Situação: ${verificarSituacao(mediaAluno)}`)
                        console.log(`--------------------`)
                    }  
                })
            })
        })
    })
})

function isVazio(nomeAluno, nota1, nota2, nota3, nota4){
    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        return true
    }else{
        return false
    }
}

function isLimite(nota1, nota2, nota3, nota4){
    if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100){
        return false
    }else{
        return true
    }
}

function isNumero(nota1, nota2, nota3, nota4){
    if(!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)){
        return true
    }else{
        return false
    }
}

function verificarSituacao(media){
    if(media >= 70){
        return 'APROVADO'
    }else if(media < 70 && media >= 50){
        return 'RECUPERAÇÃO'
    }else{
        return 'REPROVADO'
    }
}