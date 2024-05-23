import express from "express";
const app = express();
import cors from 'cors';
import connection from './conecta.js';


app.use(express.json());
app.use(cors());

app.post('/cadastrarPessoa.js', (req, res) => {


    const { nome, idade, cpf, numero } = req.body;
    console.log("Dados recebidos", {nome, idade, cpf, numero});
    const sql = 'INSERT INTO pessoa (nome,idade,cpf,numero) VALUES (?,?,?,?)';
    connection.query(sql, [ nome,idade,cpf,numero ], (error,results,fields) => {

        console.log('Dados inseridos com sucesso!');
    });
  });

app.listen(3000, () =>{
    console.log(`Servidor rodando com sucesso 3000`);
});