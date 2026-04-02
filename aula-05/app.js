/*************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API do projeto de estados e cidades
 * Data: 01/04/2026
 * Autor: Julio Augusto
 * Versão: 1.0
 * 
 * Instalação do EXPRESS: npm install express --save
 *      Dependência responsável pela utilização do protocolo http
 *      para criar a API
 * 
 * Instalação do CORS: npm install cors --save
 *      Dependência responsável pelas configurações a serem realizadas
 *      para a permissão de acesso da API
 * 
 * *********************************************************************************/

// IMPORT das dependências para criar a API
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

// Criando um objeto para manipular o EXPRESS
const app = express()

// Porta onde a API esta rodando
const port = 8080

// Conjuntos de Permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], // Origem da requisição (quem pode fazer a requisição) podendo ser o IP ou '*'
    methods: 'GET', // Verbos que serão liberados na API
    allowedHeaders: ['Content-type', 'Autorization'] // Permissões de cabeçalho do cors
}

const DOC_API = {
    "project": "Estados e Cidades",
    "description":"API para manipular dados de Cidades e Estados",
    "date": "2026-04-02",
    "version": "1.0",
    "developer": "Julio Augusto",
    "end-points": [
        {
            "id": 1,
            "route 1": '/v1/senai/estados',
            "description":"Retorna uma lista com todos estados"
        },
        {
            "id": 2,
            "route 2": '/v1/senai/estado/dados/sp',
            "description":"Retorna os dados dos estados filtrando pela uf"
        },
        {
            "id": 3,
            "route 3": '/v1/senai/estado/capital/sp',
            "description":"Retorna os dados da capital de cada estado filtrando pela uf"
        },
        {
            "id": 4,
            "route 4": '/v1/senai/estado/cidades/sp',
            "description":"Retorna as cidades de cada estado filtrando pela uf"
        },
        {
            "id": 5,
            "route 5": '/v1/senai/regiao/estados/norte',
            "description":"Retorna os estados de cada região filtrando pelo nome da região"
        }, 
        {
            "id": 6,
            "route 6": '/v1/senai/capital/brasil',
            "description":"Retorna os estados que foram capitais do Brasil"
        }
    ]
}

// Raiz da API
app.get('/v1/senai/help', (req,res) => {
    res.status(200).json(DOC_API)
})

// Configura as permissões da API através do CORS
app.use(cors(corsOptions))

// Criando EndPoints para a API
    // (res) Response → retornos da API
    // (req) Request → chegada de dados na API
// retorna todas UFs dos estados do Brasil
app.get('/v1/senai/estados', (req,res) => {
    let estados = getListaDeEstados()
    if(estados)
        res.status(200).json(estados)
    else
        res.status(404).json({"message": "Erro, não foi possivel acessar a lista de estados."})
})

// Retorna os dados dos estados filtrando pela uf
app.get('/v1/senai/estado/dados/:uf', (req,res) => {
    let uf = req.params.uf
    let dadosEstado = getDadosEstado(uf)
    if(dadosEstado)
        res.status(200).json(dadosEstado)
    else
        res.status(404).json({"message": "Erro, dados do estado não encontrados."})
    
    
})

// Retorna os dados da capital de cada estado filtrando pela uf
app.get('/v1/senai/estado/capital/:uf', (req,res) => {
    let uf = req.params.uf
    let capitalEstado = getCapitalEstado(uf)
    if(capitalEstado)
        res.status(200).json(capitalEstado)
    else
        res.status(404).json({"message": "Erro, dados do estado não encontrados."})
})

// Retorna os estados de cada região filtrando pelo nome da região
app.get('/v1/senai/regiao/estados/:regiao', (req, res) => {
    let regiao = req.params.regiao
    let estadosRegiao = getEstadosRegiao(regiao)
    if(estadosRegiao)
        res.status(200).json(estadosRegiao)
    else
        res.status(404).json({"message": "Erro, dados da região não encontrados."})
})

// Retorna as cidades de cada estado filtrando pela uf
app.get('/v1/senai/estado/cidades/:uf', (req, res) => {
    let uf = req.params.uf
    let cidades = getCidades(uf)
    if(cidades)
        res.status(200).json(cidades)
    else
        res.status(404).json({"message": "Erro, dados do estado não encontrados."})   
})

// Retorna os estados que foram capitais do Brasil
app.get('/v1/senai/capital/brasil', (req,res) => {
    let capital = getCapitalPais()
    if(capital)
        res.status(200).json(capital)
    else
        res.status(404).json({"message": "Erro, dados da capital não encontrados."})
})

// Serve para inicializar a API para receber requisições
app.listen(port, () => {
    console.log(`API de estados e cidades rodando em http://localhost:${port}`)
})