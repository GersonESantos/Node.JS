// Importar arquivo de cálculos
var calculos = require('./calculos');

// Obter a função para multiplicar
var multiplicar = calculos.multiplicar;
var somar = calculos.somar;

// Realizar um cálculo de multiplicação
console.log(multiplicar(5, 6));
console.log(somar(5, 6));
