const mysql = require('mysql2');

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',      // Endereço do servidor MySQL
  user: 'root',           // Usuário do banco de dados
  password: 'Gabibi89*',   // Senha do banco de dados
  database: 'bd_tasks', // Nome do banco de dados
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados MySQL estabelecida com sucesso.');
  }
});

module.exports = connection;