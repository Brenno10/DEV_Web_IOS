var nome = 'Brenno';
var altura = 1.7;
var peso = 80;
var imc = peso / (altura ^ 2);
const templateString = `${nome} possui altura ${altura} e peso ${peso}, seu IMC é ${imc}`;

console.log(templateString);
