/****************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calculo para este projeto
 * Data: 13/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************/

// Função responsavel por calcular a soma
function somar(n1, n2){
    // garante que o valor decimal esteja no formato internacional
    let numero1 = String(n1).replace(/,/g, '.')
    let numero2 = String(n2).replace(/,/g, '.')

    // caso o valor esteja com dois ou mais '.' impossivel realizar o calculo
    if(numero1.split('.').length - 1 > 1 || numero2.split('.').length - 1 > 1){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
        // validação dos valores
        if(numero1 == '' || numero2 == ''){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if(isNaN(numero1) || isNaN(numero2)){
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
    if(numero1.split('.').length - 1 > 1 || numero2.split('.').length - 1 > 1){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
        // validação dos valores
        if(numero1 == '' || numero2 == ''){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if (isNaN(numero1) || isNaN(numero2)){
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
    if(numero1.split('.').length - 1 > 1 || numero2.split('.').length - 1 > 1){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
         // validação dos valores
        if(numero1 == '' || numero2 == ''){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if(isNaN(numero1) || isNaN(numero2)){
            console.log('\n[ERRO]! Os valores devem ser númericos.')
            return false
        }else if(numero2 == '0'){
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
    if(numero1.split('.').length - 1 > 1 || numero2.split('.').length - 1 > 1){
        console.log('\n[ERRO]! os valores não podem conter duas ou mais \',\' ou \'.\'')
        return false
    }else{
         // validação dos valores
        if(numero1 == '' || numero2 == ''){
            console.log('\n[ERRO]! Os campos não podem estar vazios.')
            return false
        }else if(isNaN(numero1) || isNaN(numero2)){
            console.log('\n[ERRO]! Os valores devem ser númericos.')
            return false
        }else{
            // retorna a subtração
            return (Number(numero1) * Number(numero2)).toFixed(2)
        } 
    }

   
}

// tornando as funções publicas para este projeto
module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}