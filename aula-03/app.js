/***********************************************************************
 * Objetivo: Criar um sistema que permite o calculo de juros utilizando
 * boas praticas com funções
 * Data: 11/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

// importando da biblioteca que realiza calculos
let calculos = require('./modulo/calculo')

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
                entradaDeDados.question('Por favor, digite o tempo de pagamento: ', function(tempo){
                    let tempoPagamento = tempo
                        
                    let montante = calculos.calcularMontante(valorCompra, taxaJuros, tempoPagamento)

                    if(montante){
                        montarMensagem(nomeCliente, nomeProduto, valorCompra, tempoPagamento, montante)
                    }
                      
                    entradaDeDados.close()
                })                 
            })         
        })         
    })
})

// Função para montar a mensagem
function montarMensagem(nomeCliente, nomeProduto, valorCompra,tempoPagamento, montanteFinal){
    let diferenca = (Number(montanteFinal) - Number(valorCompra)).toFixed(2)
    console.log(`***************************** [Viva Moda] *****************************`)
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}!`)
    console.log(`A compra do produto ${nomeProduto}, tem um valor de: R\$${Number(valorCompra).toFixed(2)}.`)
    console.log(`A sua compra será parcelada em ${tempoPagamento} vezes e o Sr(a) pagará: R\$${montanteFinal()}.`)
    console.log(`O acréscimo realizado ao valor de: R\$${Number(valorCompra).toFixed(2)} será de R\$${diferenca}.\n`)
    console.log(`Muito obrigado por escolher a Viva Moda!`)
    console.log(`***********************************************************************`)
}