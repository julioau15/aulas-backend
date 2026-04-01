/*************************************************************************************
 * Objetivo: Arquivo responsavel pela craição da api do projeto de estados e cidades
 * Data: 01/04/2026
 * Autor: Julio Augusto
 * Versão: 1.0
 * 
 * instalação do EXPRESS: npm install express --save
 *      Dependencia responsavel pela utilização do protocolo http
 *      para criar uma api
 * 
 * instalação do CORS: npm install cors --save
 *      Dependencia responsavel pelas configurações a serem realizadas
 *      para a permissão de acesso da api
 * 
 * *********************************************************************************/

// IMPORT das depêndencias para criar a api
const express = require('express')
const cors = require('cors')

// IMPORT das funções
const {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
} = require('./module/manipular_dados')

// criando um objeto para manipular o expresss
const app = express()

// porta onde a api esta rodando
const port = 8080

// Conjuntos de Permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], // Origem da requisição (quem pode fazer a requisição) podendo ser o IP ou '*'
    methods: 'GET', // Verbos que serão liberados na API
    allowedHeaders: ['Content-type', 'Autorization'] // Permissões de cabeçalho do cors
}

const DADOS_PROJETO = {
    "versao": "1.0",
    "autor": "Julio Augusto",
    "projeto": "SENAI",
    "end-points": [
        '/v1/senai/estados',
        '/v1/senai/estado/dados/:uf',
        '/v1/senai/estado/capital/:uf',
        '/v1/senai/estado/cidades/:uf',
        '/v1/senai/regiao/estados/:regiao', 
        '/v1/senai/capital'
    ]
}

app.get('/', (req,res) => {
    res.json(DADOS_PROJETO)
    res.status(200)
})

// configura as permissões da API através do CORS
app.use(cors(corsOptions))

// Criando EndPoints para a API
    // (res) Response → retornos da API
    // (req) Request → chegada de dados na API
app.get('/v1/senai/estados', (req,res) => {
    let estados = getListaDeEstados()
    if(estados){
        res.json(estados)
        res.status(200)
    }else{
        res.json({"message": "Erro, não foi possivel acessar a lista de estados."})
        res.status(404)
    }
})

app.get('/v1/senai/estado/dados/:uf', (req,res) => {
    let uf = req.params.uf
    let dadosEstado = getDadosEstado(uf)
    if(dadosEstado){
        res.json(dadosEstado)
        res.status(200)
    }else{
        res.json({"message": "Erro, dados do estado não encontrados."})
        res.status(404)
    }
    
})

app.get('/v1/senai/estado/capital/:uf', (req,res) => {
    let uf = req.params.uf
    let capitalEstado = getCapitalEstado(uf)
    if(capitalEstado){
        res.json(capitalEstado)
        res.status(200)
    }else{
        res.json({"message": "Erro, dados do estado não encontrados."})
        res.status(404)
    }
})

app.get('/v1/senai/regiao/estados/:regiao', (req, res) => {
    let regiao = req.params.regiao
    let estadosRegiao = getEstadosRegiao(regiao)
    if(estadosRegiao){
        res.json(estadosRegiao)
        res.status(200)
    }else{
        res.json({"message": "Erro, dados da região não encontrados."})
        res.status(404)
    }
})

app.get('/v1/senai/estado/cidades/:uf', (req, res) => {
    let uf = req.params.uf
    let cidades = getCidades(uf)
    if(cidades){
        res.json(cidades)
        res.status(200)
    }else{
        res.json({"message": "Erro, dados do estado não encontrados."})
        res.status(404)
    }
})

app.get('/v1/senai/capital', (req,res) => {
    let capital = getCapitalPais()
    if(capital){
        res.json(capital)
        res.status(200)
    }else{
        res.json({"message": "Erro, dados da capital não encontrados."})
        res.status(404)
    }
})

// Serve para inicializar a API para receber requisições
app.listen(port, () => {
    console.log(`API de estados e cidades rodando em http://localhost:${port}`)
})