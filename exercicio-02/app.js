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

// Importando biblioteca para ler as linhas no console
let readline = require('readline')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados pelo console
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

                        // ---------- Chamando Validações -------------
                        //validação de campo vazio
                        if(isEmpty(nomeCliente, nomeProduto, valorCompra, taxaJuros, tipoTempo, tempoPagamento)){
                            console.log('[ERRO] Os campos devem ser preenchidos!')
                            entradaDeDados.close()
                            //validação para verificar se os valores são números
                        }else if(!isNumber(valorCompra, taxaJuros, tempoPagamento)){
                            console.log('[ERRO] o Valor de compra, a taxa de juros e o tempo de pagamento devem ser números!')
                            entradaDeDados.close()
                            //validação de valores negativos
                        }else if(valorCompra < 0 || taxaJuros < 0 || tempoPagamento < 0){
                            console.log('[ERRO] Os valores ser positivos!')
                            entradaDeDados.close()
                        }else{
                            // Validando qual o tipo de tempo (mes ou ano) 
                            if(tipoTempo.toLowerCase() == 'meses' || tipoTempo.toLowerCase() == 'mes' || tipoTempo.toLowerCase() == 'mês'){
                                // Chamando funções de calculo e mensagem
                                montanteFinal = calcularMontanteFinal(valorCompra, taxaJuros, tempoPagamento)
                                montarMensagem(nomeCliente, nomeProduto, valorCompra, tempoPagamento, montanteFinal)
                                entradaDeDados.close()

                            }else if(tipoTempo.toLowerCase() == 'anos' || tipoTempo.toLowerCase() == 'ano'){
                                // Caso o tipo de tempo for ANOS tranforma em MESES
                                let taxaJurosMes = Number(taxaJuros)/12
                                let tempoPagamentoMes = (Number(tempoPagamento) * 12)

                                montanteFinal = calcularMontanteFinal(valorCompra, taxaJurosMes, tempoPagamentoMes)
                                montarMensagem(nomeCliente, nomeProduto, valorCompra, tempoPagamentoMes, montanteFinal)
                                entradaDeDados.close()
                            }else{
                                console.log('[ERRO] o tempo de pagamento deve ser meses ou anos!')
                                entradaDeDados.close()
                            }
                        }
                    })                 
                })         
            })         
        })
    })
})

// Função para validar campos vazios
function isEmpty(nomeCliente, nomeProduto, valorCompra, taxaJuros, tipoTempo, tempoPagamento){
    if(nomeCliente == '' || nomeProduto == '' || valorCompra == '' || taxaJuros == '' || tipoTempo == '' || tempoPagamento == ''){
        return true
    }else{
        return false
    }
}

// Função para validar se os valores são números
function isNumber(valorCompra, taxaJuros, tempoPagamento){
    if(isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(tempoPagamento)){
        return false
    }else{
        return true
    }
}

// Função para calcular o montante final
function calcularMontanteFinal(valorCompra, taxaJuros, tempoPagamento){
    let i = Number(taxaJuros) / 100
    let c = Number(valorCompra)
    let n = Number(tempoPagamento)
    return c * (1 + i) ** n 
}

// Função para montar a mensagem
function montarMensagem(nomeCliente, nomeProduto, valorCompra,tempoPagamento, montanteFinal){
    console.log(`***************************** [Viva Moda] *****************************`)
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}!`)
    console.log(`A compra do produto ${nomeProduto}, tem um valor de: R\$${Number(valorCompra).toFixed(2)}.`)
    console.log(`A sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: R\$${Number(montanteFinal).toFixed(2)}.`)
    console.log(`O acréscimo realizado ao valor de: R\$${Number(valorCompra).toFixed(2)} será de R\$${(Number(montanteFinal) - Number(valorCompra)).toFixed(2)}.\n`)
    console.log(`Muito obrigado por escolher a Viva Moda!`)
    console.log(`***********************************************************************`)
}