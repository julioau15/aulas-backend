/*
console.log('hello, world')
let variavel = [1,2]
variavel.push(3)
console.log(`a variavel tem ${variavel.length} valores.`)
console.log(`O primeiro é ${variavel[0]}.`)
console.log(`o ultimo é o ${variavel[2]}.`)
*/

/*
// imprime no terminal o conteúdo
console.log('testando o print do console')

//cria uma variavel
var nome = 'Julio Augusto'

console.log(nome)

// Formas de concatenar variaveis
console.log(`O nome do usuario é: ` + nome)
console.log(`O nome do usuario é: ${nome}`)
*/

// import da biblioteca para captar entrada de dados via terminal
var readline = require('readline')

//Cria uma interface para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Função para retornar nome digitado no terminal
    // O metodo 'question' após a digitação chama sua função 'call-back'
    // para entregar o que foi digitado no terminal, através do argumento
    // 'nomeUsuario'
entradaDeDados.question('Favor digitar seu nome: ', function(nomeUsuario){
    console.log(`O nome do usuário é: ${nomeUsuario}`)
    // Entrada de dados para o email
    entradaDeDados.question('Favor digitar seu email: ', function(emailUsuario){
        console.log(`O email do usuário é: ${emailUsuario}`)
    })
})