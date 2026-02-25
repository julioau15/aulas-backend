/*****************************************************************************************
 * Objetivo: Arquivo responsavel pelas entradas de dados e saida de relatório no projeto
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ***************************************************************************************/

/**
 *  - Receber NomeAluno, NomeProfessor, SexoAluno, SexoProfessor, NomeCurso, NomeDiciplina, 4 notas
 *  - As notas devem ser entre 0 e 100
 *  - Tratar campos vazios
 *  - Calcular média
 *  - Status do aluno: 
 *      acima de 70 = Aprovado
 *      abaixo de 50 = Reprovado
 *      entre 50 e 69 = Exame
 *  - Solicitar Nota Exame
 *  - Se a nota do exame for acima de 60, aluno aprovado no exame
 *  - Relatório do Aluno:
 *  `O Aluno ${nomeAluno}` foi ${status} na diciplina ${nomeDiciplina}.
 *  `Curso: ${nomeCurso}`
 *  `Professor: ${nomeProfessor}`
 *  `Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`
 *  `Média Final: ${mediaFinal}`
 *  `Média final do exame: ${mediaFinalExame}`
 */


// Importando biblioteca para ler as linhas no console
const readline = require('readline')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Por favor, digite o nome do aluno: ', function(nomeA){
    let nomeAluno = nomeA
    entradaDeDados.question('Por favor, digite o sexo do aluno: ', function(sexoA){
        let sexoAluno = sexoA
        entradaDeDados.question('Por favor, digite o nome do professor: ', function(nomeP){
            let nomeProfessor = nomeP
            entradaDeDados.question('Por favor, digite o sexo do professor: ', function(nomeP){
                let nomeProfessor = nomeP
                entradaDeDados.question('Por favor, digite o nome do curso: ', function(nomeC){
                    let nomeCurso = nomeC
                    entradaDeDados.question('Por favor, digite o nome da diciplina: ', function(nomeD){
                        let nomeDiciplina = nomeD
                        entradaDeDados.question('Por favor, digite a nota 1: ', function(n1){
                            let nota1 = n1
                            entradaDeDados.question('Por favor, digite a nota 2: ', function(n2){
                                let nota2 = n2
                                entradaDeDados.question('Por favor, digite a nota 3: ', function(n3){
                                    let nota3 = n3
                                    entradaDeDados.question('Por favor, digite a nota 4: ', function(n4){
                                        let nota4 = n4
                            
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})