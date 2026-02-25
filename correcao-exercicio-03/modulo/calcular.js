/****************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular (somar, subtrair, multiplicar e dividir)
 * Data: 20/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************************************/

// Função anonima
// Calcular as quatro operações matemáticas
const calcular = function(n1, n2, operador){
    // entrada
    let numero1 = Number(n1)
    let numero2 = Number(n2)
    let operacao = String(operador).toLowerCase()
    let resultado
     
    // validações das operações
        // A ausência da {} na condicional é porque qualquer condicional que tenha uma linha
        // de processamento a {} torna-se opcional

    // processamento
        //   if(operacao == 'somar')
        //       resultado = numero1 + numero2
        //  else if(operacao == 'subtrair')
        //       resultado = numero1 - numero2
        //  else if(operacao == 'dividir')
        //       resultado = numero1 / numero2
        //  else if(operacao == 'multiplicar')
        //       resultado = numero1 * numero2

    // switch case:
        // estrutura de condições
        // obrigatório uso de break
    switch (operacao){
        case 'somar':
            resultado = somar(numero1, numero2)
            break
        case 'subtrair':
            resultado = subtrair(numero1, numero2)
            break
        case 'dividir':
            resultado = dividir(numero1, numero2)
            break
        case 'multiplicar':
            resultado = multiplicar(numero1, numero2)
            break
    }
    
   // saida
   if(resultado != undefined) 
        return Number(resultado).toFixed(2)
    else
        return false
}

// Exemplos de arrow function:
    // Esconde a palavra funtion
    // Esconde o return
    // Se tiver uma linha não precisa de { }
const somar       = (n1, n2) => Number(n1) + Number(n2) // somar
const subtrair    = (n1, n2) => Number(n1) - Number(n2) // subtrair
const dividir     = (n1, n2) => Number(n1) / Number(n2) // dividir
const multiplicar = (n1, n2) => Number(n1) * Number(n2) // multiplicar

module.exports = {
    calcular
}