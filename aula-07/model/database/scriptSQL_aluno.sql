DROP DATABASE IF EXISTS db_jwt_escola;

-- Cria database
CREATE DATABASE IF NOT EXISTS db_jwt_escola;

-- Usa o database
USE db_jwt_escola;

-- =====================================
-- TABELA ALUNO
-- =====================================
CREATE TABLE IF NOT EXISTS tbl_aluno (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    
    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);