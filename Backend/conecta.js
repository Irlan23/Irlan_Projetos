import mysql from 'mysql';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'irlanmysql'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao realizar conexão com o BD:', err);
        throw err;

    }

    console.log('Conexão com o BD estabelicida com sucesso!');

});

export default connection;