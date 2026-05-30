/*************************************************************************************
 * Objetivo: Arquivo responsável pela criação da API de Alunos
 * Data: 30/05/2026
 * Autor: Julio Augusto
 * Versão: 1.0.0
 * *********************************************************************************/

// IMPORT das dependências para criar a API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// IMPORT das funções
const {
    inserirNovoAluno,
    atualizarAluno,
    listarAluno,
    buscarAluno,
    excluirAluno,
    autenticarAluno
} = require('./controller/aluno/controller_aluno.js')

// Criando um objeto para manipular o EXPRESS
const app = express()

// Porta onde a API esta rodando
const port = 8080

// Conjuntos de Permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], // Origem da requisição (quem pode fazer a requisição) podendo ser o IP ou '*'
    methods: 'GET, POST, PUT, DELETE, OPTIONS', // Verbos que serão liberados na API
    allowedHeaders: ['Content-type', 'Autorization'] // Permissões de cabeçalho do cors
}

// Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

// Configura as permissões da API através do CORS
app.use(cors(corsOptions))

const DOC_API = {
    project: "Escola de Alunos",
    description: "API para manipular dados dos alunos",
    date: "2026-05-30",
    version: "1.0.0",
    developer: "Julio Augusto",

    endpoints: {

        aluno: {
            POST: {
                route: "/v1/escola/aluno",
                description: "Insere um novo aluno."
            },

            GET_ALL: {
                route: "/v1/escola/aluno",
                description: "Retorna todos os alunos."
            },

            GET_BY_ID: {
                route: "/v1/escola/aluno/:id",
                description: "Retorna um aluno pelo ID."
            },

            PUT: {
                route: "/v1/escola/aluno/:id",
                description: "Atualiza um aluno pelo ID."
            },

            DELETE: {
                route: "/v1/escola/aluno/:id",
                description: "Remove um aluno pelo ID."
            }
        }
    }
}

// Recebe o token encaminhado nas requisições e solicitar as validações
const verifyJWT = async (req, res, next) => {
    // import da biblioteca para validação dos tokens
    const jwt = require('./middleware/middlewareJWT.js')

    // recebe o token encaminhado no header da requisição
    let token = req.headers['x-access-token']

    // valida a autencidade do token
    const autenticidadeToken = await jwt.validateJWT(token)

    // valida se a requisição podera continuar
    if(autenticidadeToken) 
        next()
    else
        return res.status(401).end()
}

// Raiz da API
app.get('/help', (req,res) => {
    res.status(200).json(DOC_API)
})

// ---------------- Aluno -----------------

// endpoint para inserir aluno
app.post('/v1/escola/aluno', bodyParserJSON, async (req,res) => {

    // recebe o conteudo dentro do body da requisição
    let dados = req.body
    let contentType = req.headers['content-type']

    let result = await inserirNovoAluno(dados, contentType)

    res.status(result.status_code).json(result)
})

// endpoint para retornar todos alunos
app.get('/v1/escola/aluno',verifyJWT, async (req,res) => {

    let result = await listarAluno()

    res.status(result.status_code).json(result)
})

// endpoint para buscar um aluno pelo id
app.get('/v1/escola/aluno/:id',verifyJWT, async (req,res) => {

    // recebe o conteudo dentro do body da requisição
    let dados = req.body
    let contentType = req.headers['content-type']
    let id = req.params.id

    let result = await buscarAluno(id, dados)

    res.status(result.status_code).json(result)
})

// endpoint para atualizar um aluno pelo id
app.put('/v1/escola/aluno/:id', bodyParserJSON, async (req,res) => {

    let id          = req.params.id                 // Recebe o id por parametro
    let dados       = req.body                      // Recebe os dados do body da requisição
    let contentType = req.headers['content-type']   // Recebe o ContentType do header da requisição

    let result = await atualizarAluno(dados, id, contentType)

    res.status(result.status_code).json(result)
})

// endpoint para deletar um aluno pelo id
app.delete('/v1/escola/aluno/:id', async (req,res) => {

    let id = req.params.id

    let result = await excluirAluno(id)

    res.status(result.status_code).json(result)
})

// endpoint para autenticar usuario
app.post('/v1/escola/aluno/autenticar', bodyParserJSON, async (req,res) => {

    let dados = req.body

    let result = await autenticarAluno(
        dados.email,
        dados.senha
    )

    res.status(result.status_code).json(result)
})

// Serve para inicializar a API para receber requisições
app.listen(port, () => {
    console.log(`API alunos rodando em http://localhost:8080`)
})