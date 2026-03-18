/***********************************************************************
 * Objetivo: Arquivo responsável manipular dados do projeto 
 * Data: 18/03/2026
 * Autor: Julio
 * Versão: 1.0
 * ********************************************************************/

/**
    Requsitos:
        - Função (getListaDeEstados) que ira retornar todas as siglas dos estados
        - Função (getDadosEstado) que ira retornar as informações do estado recebendo como parametro a sigla do Estado
        - Função (getCapitalEstado) que ira retornar as informações da captal recebendo como parametro a sigla do Estado
        - Função (getEstadosRegiao) que ira retornar os estados de determinada região rebendo como parametro a região
        - Função (getCapitalPais) que ira retornar as capitais do Brasil
        - Função (getCidades) que ira retornar as cidades de determidado estado rebendo como parametro sigla do Estado
 */

const listaDeEstados = require('./estados_cidades')

// retorna as siglas dos estados e a quantidade de estados
const getListaDeEstados = () => {
    let estados = {
        "uf": [],
        "quantidade":0
    }

    let status = false

    listaDeEstados.estados.forEach(estado => {
        estados.uf.push(estado.sigla)
        estados.quantidade++
        status = true
    })

    if(status)
        return estados
    else
        return status
}

// retorna as informações de um estado
const getDadosEstado = (sigla) => {
    let uf = String(sigla).toLowerCase()
    let estado = false

    listaDeEstados.estados.forEach(objetoEstado => {
        if(String(objetoEstado.sigla).toLowerCase() == uf){
            estado = {
                "uf": objetoEstado.sigla,
                "descricao": objetoEstado.nome,
                "capital": objetoEstado.capital,
                "regiao": objetoEstado.regiao
            }
        }
    })

    return estado
}

// retorna as informações de uma capital
const getCapitalEstado = (sigla) => {
    let uf = String(sigla).toLowerCase()
    let capital = false

    listaDeEstados.estados.forEach(objetoEstado => {
        if(String(objetoEstado.sigla).toLowerCase() == uf){
            capital = {
                "uf": objetoEstado.sigla,
                "descricao": objetoEstado.nome,
                "capital": objetoEstado.capital,
            }
        }
    })

    return capital
}

// retorna os estados de um região
const getEstadosRegiao = (nomeRegiao) => {
    let regiao = {
        "regiao":'',
        "estados":[] 
    }
    let status = false

    listaDeEstados.estados.forEach(estado => {
        if(String(estado.regiao).toLowerCase() == String(nomeRegiao).toLowerCase()){
            regiao.estados.push({"uf": estado.sigla,"descricao": estado.nome})
            regiao.regiao = (estado.regiao).toUpperCase()
            status = true
        }
    })

    if(status)
        return regiao
    else
        return status
}