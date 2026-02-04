/***********************************************************************
 * Objetivo: Calcular Juros Compostos
 * Data: 04/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

/*
 * SOLICITAR: nomeCliente, nomeProduto, valorCompra, taxaJuros e tempoPagamento. 
 * 
 * M -> montante final
 * C -> Capital inicial
 * I -> Taxa de Juros
 * N -> Tempo de Pagamento em MESES
 * CALCULAR: M = C * (1+i)^N
 * 
 * VALIDAR ENTRADAS E CONVERTER
 * 
 * SAÍDA DE DADOS:
 * ********************** [Nome da Empresa] **********************
 * Muito obrigado por realizar a sua compra conosco Sr(a) xxxxxxxxx.
 * A compra do produto xxxxxxxxx, tem um valor de: xxxxxxxxx.
 * A sua compra será parcelada em xx vezes e o Sr(a) pagará: xxxxxx.
 * O acréscimo realizado ao valor de: xxxxxxxx será de xxxxxxxxxx.
 * Muito obrigado por escolher a [Nome da Empresa].
 * ***************************************************************
 */

let readline = require('readline')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('Por favor, digite o nome do cliente: ', function(cliente){
    let nomeCliente = cliente
    entradaDeDados.question('Por favor, digite o nome do produto: ', function(produto){
        let nomeProduto = produto
        entradaDeDados.question('Por favor, digite o valor do produto: ', function(valor){
            let valorCompra = valor
            entradaDeDados.question('Por favor, digite a taxa de juros: ', function(taxa){
                let taxaJuros = taxa
                entradaDeDados.question('O tempo de pagamento será em Meses ou Anos? ', function(tipo){
                    let tipoTempo = tipo
                    entradaDeDados.question('Por favor, digite o tempo de pagamento: ', function(tempo){
                        let tempoPagamento = tempo
                        let montanteFinal

                        if(!isEmpty(nomeCliente, nomeProduto, valorCompra, taxaJuros, tipoTempo, tempoPagamento)){
                            console.log('[ERRO] Os campos devem ser preenchidos.')
                        }else if(!isNumber(valorCompra, taxaJuros, tempoPagamento)){
                            console.log('[ERRO] o Valor de compra, a taxa de juros e o tempo de pagamento devem ser números.')
                        }else{
                            if(tipoTempo.toLowerCase == 'meses' || tipoTempo.toLowerCase == 'mes' || tipoTempo.toLowerCase == 'mês'){
                                taxaJuros = taxa
                                montanteFinal = calcularMontanteFinal(valorCompra, taxaJuros, tempoPagamento)
                                montarMensagem(nomeCliente, nomeProduto, valorCompra, taxaJuros, tipoTempo, tempoPagamento, montanteFinal)

                            }else if(tipoTempo.toLowerCase == 'anos' || tipoTempo.toLowerCase == 'ano'){
                                taxaJuros = Number(taxa)/12
                                montanteFinal = calcularMontanteFinal(valorCompra, taxaJuros, tempoPagamento)
                                montarMensagem(nomeCliente, nomeProduto, valorCompra, taxaJuros, tipoTempo, tempoPagamento, montanteFinal)
                            }else{
                                console.log('[ERRO] Informe um valor valido')
                            }
                        }

                        
                        
                    })
                    
                })
                
            })
            
        })
    })
})

function isEmpty(nomeCliente, nomeProduto, valorCompra, taxaJuros, tipoTempo, tempoPagamento){
    if(nomeCliente == '' || nomeProduto == '' || valorCompra == '' || taxaJuros == '' || tipoTempo == '' || tempoPagamento == ''){
        return true
    }else{
        return false
    }
}

function isNumber(valorCompra, taxaJuros, tempoPagamento){
    if(isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(tempoPagamento)){
        return false
    }else{
        return true
    }
}

function calcularMontanteFinal(valorCompra, taxaJuros, tempoPagamento){
    return valorCompra * (1 + taxaJuros) ** tempoPagamento 
}

function montarMensagem(nomeCliente, nomeProduto, valorCompra, taxaJuros, tipoTempo, tempoPagamento, montanteFinal){
    console.log(`******************* [Viva Moda] *******************`)
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}`)
    console.log(`A compra do produto ${nomeProduto}, tem um valor de: ${valorCompra}`)
    console.log(`A sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: ${montanteFinal}.`)
    console.log(`O acréscimo realizado ao valor de: ${valorCompra} será de ${}.\n`)
    console.log(`Muito obrigado por escolher a [Viva Moda].`)
    console.log(`*******************************************************`)
}