/****************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calculo para este projeto
 * Data: 13/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************/

// modulo de tratamento
const tratamento = require('./tratamento')

// Função responsavel por definir a operação
function definirResultado(operacao, n1, n2){
    let numero1 = n1
    let numero2 = n2
    let operacaoMat = tratamento.validarOperacao(operacao)

    if(!operacaoMat){
        return false
    }else{
        switch(operacaoMat){
            case 'soma':
                return somar(numero1, numero2)
            case 'subtração':
                return subtrair(numero1, numero2)
            case 'divisão':
                return dividir(numero1, numero2)
            case 'multiplicação':
                return multiplicar(numero1, numero2)
        }
    }
    
}



// Função responsavel por calcular a soma
function somar(n1, n2){
    // garante que o valor decimal esteja no formato internacional
    let numero1 = String(n1).replace(/,/g, '.')
    let numero2 = String(n2).replace(/,/g, '.')

    // caso o valor esteja com dois ou mais '.' impossivel realizar o calculo
    if(!tratamento.isDecimalValido(numero1) || !tratamento.isDecimalValido(numero2)){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
        // validação dos valores
        if(tratamento.isEmpty(numero1) || tratamento.isEmpty(numero2)){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if(!tratamento.isNumero(numero1) || !tratamento.isNumero(numero2)){
            console.log('\n[ERRO]! Os valores devem ser númericos.')
            return false
        }else{
            // retorna a soma
            return (Number(numero1) + Number(numero2)).toFixed(2)
        }
    }
   
}

// Função responsavel por calcular a subtração
function subtrair(n1, n2){
    // garante que o valor decimal esteja no formato internacional
    let numero1 = String(n1).replace(/,/g, '.')
    let numero2 = String(n2).replace(/,/g, '.')

    // caso o valor esteja com dois ou mais '.' impossivel realizar o calculo
    if(!tratamento.isDecimalValido(numero1) || !tratamento.isDecimalValido(numero2)){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
        // validação dos valores
        if(tratamento.isEmpty(numero1) || tratamento.isEmpty(numero2)){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if (!tratamento.isNumero(numero1) || !tratamento.isNumero(numero2)){
            console.log('\n[ERRO]! Os valores devem ser númericos.')
            return false
        }else{
            // retorna a subtração
            return (Number(numero1) - Number(numero2)).toFixed(2)
        }
    }

    
}

// Função responsavel por calcular a divisão
function dividir(n1, n2){
    // garante que o valor decimal esteja no formato internacional
    let numero1 = String(n1).replace(/,/g, '.')
    let numero2 = String(n2).replace(/,/g, '.')

    // caso o valor esteja com dois ou mais '.' impossivel realizar o calculo
    if(!tratamento.isDecimalValido(numero1) || !tratamento.isDecimalValido(numero2)){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
         // validação dos valores
        if(tratamento.isEmpty(numero1) || tratamento.isEmpty(numero2)){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if(!tratamento.isNumero(numero1) || !tratamento.isNumero(numero2)){
            console.log('\n[ERRO]! Os valores devem ser númericos.')
            return false
        }else if(tratamento.isZero(numero2)){
            console.log('\n[ERRO]! Impossivel dividir por 0')
            return false
        }else{
            // retorna a subtração
            return (Number(numero1) / Number(numero2)).toFixed(2)
        }
    }

   
}

// Função responsavel por calcular a multiplicação
function multiplicar(n1, n2){
    // garante que o valor decimal esteja no formato internacional
    let numero1 = String(n1).replace(/,/g, '.')
    let numero2 = String(n2).replace(/,/g, '.')

    // caso o valor esteja com dois ou mais '.' impossivel realizar o calculo
    if(!tratamento.isDecimalValido(numero1) || !tratamento.isDecimalValido(numero2)){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
         // validação dos valores
        if(tratamento.isEmpty(numero1) || tratamento.isEmpty(numero2)){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if(!tratamento.isNumero(numero1) || !tratamento.isNumero(numero2)){
            console.log('\n[ERRO]! Os valores devem ser númericos.')
            return false
        }else{
            // retorna a subtração
            return (Number(numero1) * Number(numero2)).toFixed(2)
        } 
    }

   
}

// tornando a função publica para este projeto
module.exports = {
    definirResultado
}