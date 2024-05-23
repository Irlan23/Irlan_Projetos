import connection from './conecta.js';

export function read(callback) {
    connection.query('SELECT * from pessoa where ativo_pessoa = 1 ', callback);

}
export function create(nome,idade,cpf,numero,callback) {
    connection.query('INSERT INTO pessoa (nome,idade,cpf,numero) VALUES (?, ?, ?, ?)', [nome,idade,cpf,numero], callback);

}
export function update( nome,idade,cpf,numero,id, callback) {
    connection.query('UPDATE pessoa SET nome = ?, idade = ?, cpf = ?, numero = ?, ativo_pessoa = 1 WHERE id_pessoa = ?', [nome,idade,cpf,numero,id], callback);

}
export function deletePes(id, callback) {
    connection.query('DELETE from pessoa where id_pessoa = ? ', [id], callback);

}