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

    // Permite adicionar novo elemento em um determidado lugar do array
        // sploce(indice, 0, -> siginifica que não sera removido ninguem
        
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
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

// Verifica a quantidade de um determinado conteudo em um array 
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

// Cria um objeto JSON
const criandoDadosJSON = () => {
    let aluno = {
        "nome": "Julio da Silva",
        "data_nascimento": "2007-10-15",
        "ra": 123456,
        "telefone": "973496065863",
        "email": "julio@gmail.com"
    }

    // Exibindo o objeto JSON completo
    console.log(aluno)

    // Exibindo apenas um atributo do jSON
    console.log(aluno.nome)

    // Adiciona um novo atributo no JSON
    aluno.sexo = "M"
    console.log(aluno)

    // Deleta um atributo no JSON
    delete aluno.telefone
    console.log(aluno)
}

const cadastroDeProdutos = () => {
    let marcas = [
        {"id": 1, "marca": "Lg",         "telefone": "9493694598", "email": "lg@gmail.com"},         // indice 0
        {"id": 2, "marca": "Lenovo",     "telefone": "9493694598", "email": "lenovo@gmail.com"},     // indice 1
        {"id": 3, "marca": "Intel",      "telefone": "9493694598", "email": "intel@gmail.com"},      // indice 2
        {"id": 4, "marca": "Apple",      "telefone": "9493694598", "email": "apple@gmail.com"},      // indice 3
        {"id": 5, "marca": "Samsung",    "telefone": "9493694598", "email": "samsung@gmail.com"},    // indice 4
        {"id": 6, "marca": "Rayzer",     "telefone": "9493694598", "email": "rayzer@gmail.com"},     // indice 5
        {"id": 7, "marca": "Logitec",    "telefone": "9493694598", "email": "logitec@gmail.com"},    // indice 6
        {"id": 8, "marca": "Dell",       "telefone": "9493694598", "email": "dell@gmail.com"},       // indice 7
        {"id": 9, "marca": "Multilazer", "telefone": "9493694598", "email": "multilazer@gmail.com"}, // indice 8
    ]

    let cores = [
        {"id": 1, "cor": "Branco"},   // indice 0
        {"id": 2, "cor": "Preto"},    // indice 1
        {"id": 3, "cor": "Azul"},     // indice 2
        {"id": 4, "cor": "Rosa"},     // indice 3
        {"id": 5, "cor": "Cinza"},    // indice 4
        {"id": 6, "cor": "Amarelo"},  // indice 5
        {"id": 7, "cor": "Verde"},    // indice 6
        {"id": 8, "cor": "Marrom"},   // indice 7
        {"id": 9, "cor": "Vermelho"}, // indice 8
    ]

    let produtos = 
    [
        {
            "id": 1,
            "nome": "Monitor",
            "descricao": "27 polegadas",
            "marca": [marcas[7].marca],
            "quantidade": 20,
            "cor": [cores[4], cores[1]],
            "valor": 800.50
        },
        {
            "id": 2,
            "nome": "Teclado",
            "descricao": "Teclado Mecânico rgb",
            "marca": [marcas[6].marca],
            "quantidade": 15,
            "cor": cores,
            "valor": 174.98
        },
        {
            "id": 3,
            "nome": "Mouse",
            "descricao": "Mouse com fio",
            "marca": [marcas[0].marca, marcas[7].marca, marcas[6].marca],
            "quantidade": 476,
            "cor": [cores[4], cores[1], cores[0]],
            "valor": 278.54
        }
    ]

    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].cor)

    // produtos[0].cor.forEach(cor => console.log(`A cor do produto é: ${cor.cor}`))

    return produtos
}

const exibirProdutos = (produtos) => {
    produtos.forEach(produto => {
        console.log("-------------------------")
        console.log(`\nProduto: ${produto.nome}`)
        console.log(`Descrição: ${produto.descricao}`)
        console.log(`Quantidade: ${produto.quantidade}`)
        console.log(`Valor: R\$${produto.valor}`)

        console.log('\nCor(es):')
        produto.cor.forEach(cor => console.log(cor.cor))
        
        console.log('\nMarca(s):')
        produto.marca.forEach(marca => console.log(marca))
    })
    console.log('-------------------------')
}

const produtos = cadastroDeProdutos()
exibirProdutos(produtos)