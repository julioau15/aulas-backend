/***********************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD do Banco de Dados MYSQL na tabela aluno
 * Data: 30/05/2026
 * Autor: Julio Augusto
 * Versão: 1.0.0
 ***********************************************************************************/

const knex = require('knex')
const knexConfig = require('../../database_config_knex/knexFile.js')
const knexConex = knex(knexConfig.development)

// insert de aluno
const insertAluno = async (aluno) => {

    let sql = `INSERT INTO tbl_aluno
               (
                    nome,
                    email,
                    senha,
                    ativo
               )
               VALUES
               (
                    '${aluno.nome}',
                    '${aluno.email}',
                    '${aluno.senha}',
                    ${aluno.ativo}
               )`

    try {

        let response = await knexConex.raw(sql)

        if (response)
            return response[0].insertId

    } catch (error) {}

    return false
}

// update de aluno
const updateAluno = async (aluno) => {

    let sql = `UPDATE tbl_aluno
               SET nome   = '${aluno.nome}',
                   email  = '${aluno.email}',
                   senha  = '${aluno.senha}',
                   ativo  = ${aluno.ativo}
               WHERE id   = ${aluno.id}`

    try {

        let response = await knexConex.raw(sql)

        if (response)
            return response

    } catch (error) {}

    return false
}

// select de todos alunos
const selectAllAluno = async () => {

    let sql = `SELECT *
               FROM tbl_aluno
               ORDER BY id DESC`

    try {

        let response = await knexConex.raw(sql)

        if (response)
            return response[0]

    } catch (error) {}

    return false
}

// select aluno pelo id
const selectByIdAluno = async (id) => {

    let sql = `SELECT *
               FROM tbl_aluno
               WHERE id = ${id}`

    try {

        let response = await knexConex.raw(sql)

        if (response)
            return response[0]

    } catch (error) {}

    return false
}

// select aluno pelo email
const selectByEmailAluno = async (email) => {

    let sql = `SELECT *
               FROM tbl_aluno
               WHERE email = '${email}'`

    try {

        let response = await knexConex.raw(sql)

        if (response)
            return response[0]

    } catch (error) {}

    return false
}

// delete de aluno
const deleteAluno = async (id) => {

    let sql = `DELETE FROM tbl_aluno
               WHERE id = ${id}`

    try {

        let response = await knexConex.raw(sql)

        if (response)
            return response

    } catch (error) {}

    return false
}

// valida o aluno
const selectAuthByPassword = async (email, senha) => {

    let sql = `SELECT *
               FROM tbl_aluno
               WHERE email = '${email}'
               AND senha = '${senha}'`

    let response = await knexConex.raw(sql)

    if(response)
        return response[0]

    return false
}

module.exports = {
    insertAluno,
    updateAluno,
    selectAllAluno,
    selectByIdAluno,
    selectByEmailAluno,
    deleteAluno,
    selectAuthByPassword
}