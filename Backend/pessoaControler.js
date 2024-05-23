import { create, read, update, deletePes } from './pessoaModel.js';

export async function createPessoa(req, res){
    const {nome, idade, cpf, numero} = req.body;
    console.log('Dados recebidos do frontend:', {nome, idade, cpf, numero });

    create(nome, idade, cpf, numero, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({ mensagem: 'Pessoa criada com sucesso' });
    });
}

export async function getAllPessoas(req, res) {
    read((err, pessoa) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(pessoa);
    });
}

export async function updatePessoa(req, res) {
    const { id } = req.params;
    console.log('Dados recebidos do frontend:', {id});
    const {nome,idade,cpf,numero} = req.body
    update(nome,idade,cpf,numero,id, (err, result) => {
         if (err) {
            res.status(500).json({ error: err.message });
            return;
         }
         res.send('Pessoa atualizada com sucesso');
    });
}

export async function deletePessoa(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend:', {id});
    deletePes(id, (err, result) => {
        if(err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.send('Pessoa excluida com sucesso');
    });
}