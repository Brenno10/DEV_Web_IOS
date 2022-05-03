// Estrutura de uma function

/*
function 'nome' (valor1, valor2) {
    return valor1 * valor2;    
}
*/

//funções
function addNums(num = 2, num2 = 5) {
    return num + num2;
}

// =

const somaaddNums = (num = 2, num2 = 5) => {
    return num + num2;
};

// console.log(addNums());
var x = addNums(10, 11);
console.log(x);
console.clear();

// Estrutura da arrow funtion

/*
const 'nome' = () => {
    return;
}
*/

const hello = (first = 2, second = 5) => {
    return first * second;
};

console.log(hello());
console.clear();

// Objetos
const aluno = {
    primeiroNome: 'Brenno',
    segundoNome: 'Caravante',
    idade: '19',
};
console.clear();

// Eventos
const boasVindas = () => {
    alert('Bem vindo a nossa página meu caro e amado amigo');
    console.log('Bem vindo a nossa página meu caro e amado amigo');
};

function eventClick() {
    console.log('Você clicou aqui meu caro e amado amigo');
}
