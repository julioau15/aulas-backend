/**********************************************************************
 * Objetivo: Arquivo responsavel pela criação e configuração do JWT
 * Autor: Julio Augusto
 * Data: 30/05/2026
 * Versão: 1.0.5.26
 *********************************************************************/
// para instalar o JWT -> npm install jsonwebtoken

// import da biblioteca JWT (Jason Web Token)
    // Com ela é possivel tranformar dados em tokens 
    // para transmiti-los entre sistemas e objetos Json
const jwt = require('jsonwebtoken')
const SECRET = 'a1b2c3' // senha secreta para o token
const EXPIRES = 60 // segundos

// Cria um Token do JWT (retorna um Token)
const createJWT = async (payload) => {
    // gera o token
        // payload - identificação do usuario
        // SECRET - a chave secreta
        // ExpirenIn - tempo de expiração do token
    const token = jwt.sign({userID: payload}, SECRET, {expiresIn: EXPIRES})
    return token
}

// Valida a autenticidade do Token do JWT
const validateJWT = async (token) => {
    let status = false
    // valida a autenticidade
    jwt.verify(token, SECRET, async (err, decode) => {
        if (!err) status = true
    })

    return status
}

module.exports = {
    createJWT,
    validateJWT
}