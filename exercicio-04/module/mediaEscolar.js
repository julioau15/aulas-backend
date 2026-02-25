/****************************************************************************
 * Objetivo: Arquivo responsavel por regras de negócio para media escolar
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************/

// define o status da media geral
const definirStatus = (media) => {
    let mediaFinal = Number(media)

    if(mediaFinal > 70)
        return 'Aprovado'
    else if(mediaFinal < 50)
        return 'Reprovado'
    else
        return 'recuperação'
}

// define o status da media final do exame
const definirStatusExame = (media) => {
    let mediaFinalExame = Number(media)

    if(mediaFinalExame){
        if(mediaFinalExame > 60)
        return 'Aprovado'
    else
        return 'Reprovado'
    }else
        return false
}

// verifica se o status é recuperação 
const isRecuperacao = (status) => status.toLowerCase() == 'recuperação' ? true : false 

// escreve o relatório
const escreverMensagem = (nomeA, nomeP, sexoA, sexoP, nomeD, nomeC, n1, n2, n3, n4, media, status, nExame = 'Não realizou exame', mediaExame = 'Não realizou exame') => {
    let nomeAluno = nomeA
    let nomeProfessor = nomeP
    let nomeCurso = nomeC
    let nomeDiciplina = nomeD
    let sexoAluno = String(sexoA)
    let sexoProfessor = String(sexoP)
    let nota1 = String(n1)
    let nota2 = String(n2)
    let nota3 = String(n3)
    let nota4 = String(n4)
    let mediaFinal = media
    let notaExame = nExame
    let mediaFinalExame = mediaExame
    let statusFinal = status
    let professor
    let aluno

    // muda o pronome conforme o sexo
    if(sexoAluno.toLowerCase() == 'feminino' || sexoAluno.toLowerCase() == 'f' || sexoAluno.toLowerCase() == 'mulher')
        aluno = 'aluna'
    else
        aluno = 'aluno'

     if(sexoProfessor.toLowerCase() == 'feminino' || sexoProfessor.toLowerCase() == 'f' || sexoAluno.toLowerCase() == 'homem')
        professor = 'Professora'
    else
        professor = 'Professor'

    // imprime a mensagem
    console.log('\n---------------------------------------------------------------------------------')
    console.log(`${aluno} ${nomeAluno} foi ${statusFinal} na diciplina ${nomeDiciplina}.`)
    console.log(`Curso: ${nomeCurso}`)
    console.log(`${professor}: ${nomeProfessor}`)
    console.log(`Notas ${aluno}: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`)
    console.log(`Média Final: ${mediaFinal}`)
    console.log(`Média final do exame: ${mediaFinalExame}`)
    console.log('---------------------------------------------------------------------------------\n')
}

// exporta as funções
module.exports = {
    definirStatus,
    definirStatusExame,
    escreverMensagem,
    isRecuperacao
}