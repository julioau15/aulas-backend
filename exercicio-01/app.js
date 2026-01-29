let readline = require('readline')

let entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Qual o seu nome? ', function(nomeUsuario){
    entradaDeDados.question('Digite o primeiro valor: ', function(primeiroValor){
        entradaDeDados.question('Digite o segundo valor: ', function(segundoValor){
            entradaDeDados.question('digite o terceiro valor: ', function(terceiroValor){
                let somaValores = Number(primeiroValor) + Number(segundoValor) + Number(terceiroValor)

                console.log(`O nome do usuário é: ${nomeUsuario}`)
                console.log(`Primeiro valor: ${primeiroValor}`)
                console.log(`Segundo valor: ${segundoValor}`)
                console.log(`Terceiro valor: ${terceiroValor}`)
                console.log(`A soma dos valores é: ${somaValores}`)
            })
        })
    })
})