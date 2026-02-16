/****************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de tratamento no projeto
 * Data: 15/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************/

// Função responsavel por validar a operação
function validarOperacao(operacao){
    let operacaoMat = String(operacao)

    // Validação da operação de soma
    if(operacaoMat.toLowerCase() == 'somar' || operacaoMat.toLowerCase() == 'soma'){
        return 'soma'

    // Validação da operação de subtração
    }else if(operacaoMat.toLowerCase() == 'subtração' || operacaoMat.toLowerCase() == 'subtrair'){
        return 'subtração'

    // Validação da operação de divisão
    }else if(operacaoMat.toLowerCase() == 'divisão' || operacaoMat.toLowerCase() == 'dividir'){
        return 'divisão'

    // Validação da operação de multiplicação
    }else if(operacaoMat.toLowerCase() == 'multiplicação' || operacaoMat.toLowerCase() == 'multiplicar'){
        return 'multiplicação'

    // erro de operação invalida
    }else{
        console.log('\n[ERRO]! Digite uma operação valida.')
        return false
    }
}

// função para verificar se o valor n é um número
function isNumero(n){
    let numero = n
    if(isNaN(numero)){
        return false
    }else{
        return true
    }
}

// função para verificar se o valor n esta vazio
function isEmpty(n){
    let numero = String(n)
    if(numero == ''){
        return true
    }else{
        return false
    }
}

// função para verificar se o valor n é igual a zero
function isZero(n){
    let numero = n
    if(numero == 0){
        return true
    }else{
        return false
    }
}

// função para verificar se o valor é um decimal valido
function isDecimalValido(n){
    let numero = String(n)
    if(numero.split('.').length - 1 > 1){
        return false
    }else{
        return true
    }
}

// tornando as funções publicas para este projeto
module.exports = {
    isDecimalValido,
    isEmpty,
    isNumero,
    isZero,
    validarOperacao
}