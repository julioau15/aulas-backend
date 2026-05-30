/*********************************************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e manipulação de dados para o CRUD de aluno
 * Data: 30/05/2026
 * Autor: Julio Augusto
 * Versão: 1.0.0
 *********************************************************************************************************/

const config_message = require('../module/configMessages.js')
const alunoDAO = require('../../model/DAO/aluno/aluno.js')
const jwt = require('../../middleware/middlewareJWT.js')

// inserir novo aluno
const inserirNovoAluno = async (aluno, contentType) => {

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let validar = await validarDados(aluno, contentType)

        if (validar)
            return validar // 400 ou 415

        let result = await alunoDAO.insertAluno(aluno)

        if (!result)
            return message.ERROR_INTERNAL_SERVER_MODEL // 500

        aluno.id = Number(result)

        return await montarMensagem(
            message,
            message.SUCESS_CREATED_ITEM,
            aluno
        )

    } catch (error) {
        console.log(error)
    }

    return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
}

// atualizar aluno
const atualizarAluno = async (aluno, id, contentType) => {

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let validar = await validarDados(aluno, contentType)

        if (validar)
            return validar // 400 ou 415

        let resultBuscar = await buscarAluno(id)

        if (!resultBuscar.status)
            return resultBuscar // 400 ou 404

        aluno.id = Number(id)

        let result = await alunoDAO.updateAluno(aluno)

        if (!result)
            return message.ERROR_INTERNAL_SERVER_MODEL // 500

        return await montarMensagem(
            message,
            message.SUCESS_UPDATE_ITEM,
            aluno
        )

    } catch (error) {
        console.log(error)
    }

    return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
}

// listar alunos
const listarAluno = async () => {

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let result = await alunoDAO.selectAllAluno()

        if (!result)
            return message.ERROR_INTERNAL_SERVER_MODEL // 500

        if (result.length < 1)
            return message.ERROR_NOT_FOUND // 404

        let listarAlunoMessage = await montarMensagem(
            message,
            message.SUCESS_RESPONSE,
            result
        )

        listarAlunoMessage.response.count = result.length

        return listarAlunoMessage // 200

    } catch (error) {
        console.log(error)
    }

    return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
}

// buscar aluno pelo id
const buscarAluno = async (id) => {

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let validarID = await validarId(id)

        if (validarID)
            return validarID // 400

        let result = await alunoDAO.selectByIdAluno(id)

        if (!result)
            return message.ERROR_INTERNAL_SERVER_MODEL // 500

        if (result.length < 1)
            return message.ERROR_NOT_FOUND // 404

        return await montarMensagem(
            message,
            message.SUCESS_RESPONSE,
            result
        )

    } catch (error) {
        console.log(error)
    }

    return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
}

// excluir aluno
const excluirAluno = async (id) => {

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscar = await buscarAluno(id)

        if (!resultBuscar.status)
            return resultBuscar

        let result = await alunoDAO.deleteAluno(id)

        if (!result)
            return message.ERROR_INTERNAL_SERVER_MODEL // 500

        return await montarMensagem(
            message,
            message.SUCESS_DELETE_ITEM
        )

    } catch (error) {
        console.log(error)
    }

    return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500
}

// autenticar usuário
const autenticarAluno = async (email, senha) => {

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if (
            email == undefined ||
            email == '' ||
            email == null ||
            typeof(email) != 'string'
        ) {

            message.ERROR_BAD_REQUEST.field = '[EMAIL] INVÁLIDO'

            return message.ERROR_BAD_REQUEST
        }

        if (
            senha == undefined ||
            senha == '' ||
            senha == null ||
            typeof(senha) != 'string'
        ) {

            message.ERROR_BAD_REQUEST.field = '[SENHA] INVÁLIDA'

            return message.ERROR_BAD_REQUEST
        }

        const dadosAluno = await alunoDAO.selectAuthByPassword(
            email,
            senha
        )

        if (!dadosAluno || dadosAluno.length < 1)
            return message.ERROR_NOT_FOUND

        // gera token JWT
        let tokenUser = await jwt.createJWT(dadosAluno[0].id)

        // adiciona token no json
        dadosAluno[0].token = tokenUser

        return await montarMensagem(
            message,
            message.SUCESS_RESPONSE,
            dadosAluno[0]
        )

    } catch (error) {
        console.log(error)
    }

    return message.ERROR_INTERNAL_SERVER_CONTROLLER
}

// validar dados
const validarDados = async (aluno, contentType) => {

    let message = JSON.parse(JSON.stringify(config_message))

    // content type
    if (String(contentType).toLowerCase() != 'application/json')
        return message.ERROR_CONTENT_TYPE // 415

    // nome
    if (
        aluno.nome == undefined ||
        aluno.nome == null ||
        aluno.nome == '' ||
        aluno.nome.length > 100 ||
        typeof(aluno.nome) != 'string'
    ) {

        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'

        return message.ERROR_BAD_REQUEST
    }

    // email
    if (
        aluno.email == undefined ||
        aluno.email == null ||
        aluno.email == '' ||
        aluno.email.length > 150 ||
        typeof(aluno.email) != 'string'
    ) {

        message.ERROR_BAD_REQUEST.field = '[EMAIL] INVÁLIDO'

        return message.ERROR_BAD_REQUEST
    }

    // senha
    if (
        aluno.senha == undefined ||
        aluno.senha == null ||
        aluno.senha == '' ||
        aluno.senha.length > 255 ||
        typeof(aluno.senha) != 'string'
    ) {

        message.ERROR_BAD_REQUEST.field = '[SENHA] INVÁLIDA'

        return message.ERROR_BAD_REQUEST
    }

    // ativo
    if (
        aluno.ativo == undefined ||
        aluno.ativo == null
    ) {

        message.ERROR_BAD_REQUEST.field = '[ATIVO] INVÁLIDO'

        return message.ERROR_BAD_REQUEST
    }

    return false
}

// validar id
const validarId = async (id) => {

    let message = JSON.parse(JSON.stringify(config_message))

    if (
        id == undefined ||
        id == '' ||
        id == null ||
        id <= 0 ||
        isNaN(String(id))
    ) {

        message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'

        return message.ERROR_BAD_REQUEST
    }

    return false
}

// montar mensagem
const montarMensagem = async (base, status, response = null) => {

    base.DEFAULT_MESSAGE.status = status.status
    base.DEFAULT_MESSAGE.status_code = status.status_code
    base.DEFAULT_MESSAGE.message = status.message

    if (response != null)
        base.DEFAULT_MESSAGE.response.aluno = response

    return base.DEFAULT_MESSAGE
}

module.exports = {
    inserirNovoAluno,
    atualizarAluno,
    listarAluno,
    buscarAluno,
    excluirAluno,
    autenticarAluno
}