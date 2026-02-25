/***********************************************************************
 * Objetivo: Arquivo responsavel por classificar o IMC no projeto
 * Data: 25/02/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

// classifica o imc
const classificarImc = (n) => {
    let imc = Number(n)

    if (imc < 18.5)
        return 'Abaixo do Peso'
    else if (imc >= 18.5 && imc <= 24.9)
        return 'Peso Normal'
    else if (imc > 24.9 && imc <= 29.9)
        return 'Acima do Peso (Sobrepeso)'
    else if (imc > 29.9 && imc <= 34.9)
        return 'Obesidade I'
    else if (imc > 34.9 && imc <= 39.9)
        return 'Obesidade II'
    else if (imc > 39.9)
        return 'Obesidade III'
    else
        return false  
}

// exporta a função
module.exports = {
    classificarImc
}