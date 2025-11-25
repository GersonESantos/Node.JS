// Importar o módulo http
const http = require('http');
// criar um servidor
http.createServer((req, res) => {
    // escrever uma resposta
    res.write('Olá Mundo!');
    // finalizar a resposta
    res.end();
}).listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});