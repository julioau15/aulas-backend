/***********************************************************************
 * Objetivo: Manipular dados utilizando Arrays e Json
 * Data: 05/03/2026
 * Autor: Julio
 * Versão: 1.0
 **********************************************************************/

/*
    [ ] -> Representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    Array -> é um objeto na memória que permite trabalhar com varios valores
    em um unico objeto.
    Exemplo:
    
        Indice:    0        1        2
    let nomes = ['jose', 'maria', 'joão']

    Json -> É um objeto na memória que permite trabalhar com chave e valor.
    Exemplo:

    let cliente = {
    "nome": "José",
    "email": "jose@gmail.com",
    "telefone": "123456789"
    }
*/

// formas de criar um array
const listaDeNomes = ['josé','maria','joão', 'andre', 'alex']
const listaDeClientes = []
const listaDeFornecedores = []

const exibirDados = () => {
    // Exibe o objeto array e seu conteúdo
    console.log(listaDeNomes)

    // Exibe o objeto array em formato de tabela com seus indices
    console.table(listaDeNomes)

    // Exibe apenas o valor do respectivo indice do array
    console.log(listaDeNomes[3])

    // Exibe o tipo de dados do respectivo indice do array
    console.log(typeof(listaDeNomes[2]))

    // Estruturas de repetição
    let cont = 0
    // while
    console.log('\nUtilizando While:')
    while (cont < listaDeNomes.length){
        console.log(`O nome do cliente é: ${listaDeNomes[cont]}`)
        cont++
    }

    // for
    console.log('\nUtilizando For:')
    for(let i = 0; i < listaDeNomes.length; i++)
        console.log(`O nome do cliente é: ${listaDeNomes[i]}`)

    // ForEach
    console.log('\nUtilizando ForEach:')
    listaDeNomes.forEach(cliente => console.log(`O nome do cliente é: ${cliente}`))

    // ForIn
    console.log('\nUtilizando ForIn:')
    for(indice in listaDeNomes)
        console.log(`O nome do cliente é: ${listaDeNomes[indice]}`)

    // ForOf
    console.log('\nUtilizando ForOf:')
    for(cliente of listaDeNomes)
        console.log(`O nome do cliente é: ${cliente}`)    
}

const manipularDados = () => {
    listaDeClientes[0] = 'rafael'
    listaDeClientes[1] = 'felipe'
    listaDeClientes[2] = 'ronalda'
    listaDeClientes[4] = 'josefa'

    // Permite adcionar novos valores sempre no final da lista
    listaDeFornecedores.push('josé da silva','maria da silva','joão da silva', 'carlos da silva', 'andre sa silva', 'luiz da silva')
    
    console.log('\nClientes:')
    listaDeClientes.forEach(cliente => console.log(cliente))

    console.log('\nFornecedores:')
    listaDeFornecedores.forEach(fornecedor => console.log(fornecedor))
}

manipularDados()