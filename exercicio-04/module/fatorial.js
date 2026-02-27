/****************************************************************************
 * Objetivo: Arquivo responsavel por regras de negócio para fatorial
 * Data: 27/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************/

// imprime a saida
const imprimirResultado = (n, r) => {
    let numero = Number(n)
    let resultado = Number(r)
    let resultadoFatorial = `\nFatorial de ${numero} é ${numero}`
    
    // fatorial de 1 é igual a 1
    if(resultado == 1){
        resultadoFatorial = `\nFatorial de 1`
    
    }else{
        // repetição para calcular o fatorial
        for (let i = numero - 1; i >= 1; i--)
            resultadoFatorial += ` X ${i}`
     }

     resultadoFatorial += ` = ${resultado}\n`
     return resultadoFatorial
}

// exportando a função
module.exports = {
imprimirResultado
}