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
const listaDeNomes = [
                    'josé',
                    'maria',
                    'joão',
                    'andre',
                    'alex',
                    'bruna',
                    'jake',
                    'carlos',
                    'josé',
                    'josé da silva'
                    ]
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

    // Permite adcionar novos valores sempre no inicio
    listaDeFornecedores.unshift('Ana Carolina')
    
    // Permite remover valores do final da lista e retorna ele
    listaDeFornecedores.pop()

    // Permite remover valores do inicio da lista e retorna ele
    listaDeFornecedores.shift()

    // Permite remover um valor baseado no indice da lista
        // splice(indece, quantidade de elementos)
    listaDeFornecedores.splice(2,1)

    console.log('\nFornecedores:')
    console.table(listaDeFornecedores)
}

const removerElemento = (dado, array) => {
    let elemento = String(dado).toLowerCase()
    let lista = array

    // Retorna o indice de um elemento fazendo a busca pelo valor
    let indice = lista.indexOf(elemento)

    // O indexOf retorna -1 quando não encontra o elemento
    if(indice != -1){
        lista.splice(indice,1)
        return true
    }else{
        return false
    }

    
    // for(indice in lista){
    //     if(lista[indice] == elemento){
    //         lista.splice(indice, 1)
    //     }
    // }
}

// Verifica a existencia de um elemento em uma lista
const isInList = (dado, array) =>  array.includes(String(dado).toLowerCase())

// if (isInList(dado, array)){
//     removerElemento(dado, array)
//     console.log('item removido com sucesso')
//     console.table(array)
// }else
//     console.log('item não encontrado')


const quantidadeItens = (dado, array) => {
    let elemento = String(dado).toLowerCase()
    let lista = array
    let cont = 0

    lista.forEach(element => {
        if(String(element).toLowerCase() == elemento)
            cont++
    })

    return cont
}
let dado = 'josé'
let array = listaDeNomes

// console.log(`Quantidade de itens: ` + quantidadeItens(dado,array))