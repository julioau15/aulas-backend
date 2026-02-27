/***********************************************************************
 * Objetivo: Arquivo responsavel por tratamento de dados no projeto
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

// faz todas validações de numeros
    // as reticências deixam a função receber um ou mais valores no atributo 'n'
    //o metodo 'every' valida todos numeros informados
const validarNumero = (...n) => n.every(numero => !isEmpty(String(numero)) && !Number.isNaN(Number(numero)) && isDecimalValido(Number(numero)))

// valida se um dado está vazio
    // as reticências deixam a função receber um ou mais valores no atributo 'd'
    //o metodo 'some' valida todos dados informados
const isEmpty = (...d) => d.some(dado => String(dado).trim() == '' || dado == null || dado == undefined)


// valida se um numero é par
    // as reticências deixam a função receber um ou mais valores no atributo 'n'
    //o metodo 'every' valida todos numeros informados
const isPar = (...n) => n.every(numero =>Number(numero) % 2 == 0)

// valida se um numero esta no limite definido
    // as reticências deixam a função receber um ou mais valores no atributo 'n'
    //o metodo 'every' valida todos numeros informados
const isLimit = (min, max, ...n)=> n.every(numero => Number(numero) <= Number(max) && Number(numero) >= Number(min))

// faz o tratamento de ',' em um numero decimal
const tratarDecimal = (n) => String(n).replace(/,/g, '.')

// valida se um numero é decimal
const isDecimal = (...n) => n.some(numero => tratarDecimal(numero).split('.').length > 1)

// valida se um numero decimal é valido
 // as reticências deixam a função receber um ou mais valores no atributo 'n'
    //o metodo 'every' valida todos numeros informados
const isDecimalValido = (...n) => n.every(numero => tratarDecimal(numero).split('.').length - 1 <= 1)


// exporta funções
module.exports = {
    isEmpty,
    isPar,
    isLimit,
    isDecimalValido,
    tratarDecimal,
    validarNumero,
    isDecimal
}