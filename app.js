//importação das bibliotecas 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

//cria uma instância do Express e define a porta em que o servidor irá escutar
const app = express();
const port = 3000;


// Configurando o express para aceitar JSON
//bodyParser.urlencoded analisa corpos de solicitação HTTP
//extended: true analisa dados codificados de forms que possuem estrutura aninhada (array e obj)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//conectar com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gestao_tarefas'
});

//estabelecer conexão com o banco de dados, se ocorrer algum erro ele será lançado 
connection.connect(function (err) {
    if (err) throw err;
    console.log('Conectado!');
});

//testando novo arquivo

//praticando git

//fazendo commits