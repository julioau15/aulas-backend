/****************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calculo para este projeto
 * Data: 11/02/2026
 * Autor: Julio
 * Versão: 1.0
 * *************************************************************************/

// Método tradicional de criar uma função
function calcularMontante(valorCompra, taxaJuros, tempoPagamento){
    let capital = Number(valorCompra)
    let juros = taxaJuros
    let tempo = Number(tempoPagamento)
    let taxa

    // Validação para entradas vazias ou de caracteres invalidos
    if(valorCompra == '' || isNaN(valorCompra) || tempoPagamento == '' || isNaN(tempoPagamento)){
        console.log('[ERRO] Valores de compra e/ou tempo de pagamento estão incorretos!')
        return false
    }else{
        // chama função para calcular percentual
        taxa = calcularPercentual(juros)
        // Validação para erro do percentual
        if(!taxa){
            console.log('[ERRO] Valor da taxa de juros está incorreto!')
            return false
        }else{
            // calcula montante e retorna
            return Number((capital * ((1 + taxa) ** tempo)).toFixed(2))
        }
    }

    
}

// Função para calcular percentual
function calcularPercentual(valor){
    let numero = Number(valor)
    if(valor == '' || valor <= 0 || isNaN(valor)){
        return false
    }else{
        return Number((numero/100).toFixed(2))
    }
}

// tornando as duas funções publicas para este projeto
module.exports = {
    calcularMontante,
    calcularPercentual
}