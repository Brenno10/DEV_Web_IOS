// Método forEach() com arrays
const frutas = ['Maçã', 'Pera', 'Banana', 'Uva', 'Abacaxi'];

frutas.forEach(minhaFuncao);

function minhaFuncao(item, index) {
    console.log(`Indice ${index}`);
    console.log(`Elemento ${item}`);
}

// Com arrow function
console.log(' - ');
const frutas2 = ['Maçã', 'Pera', 'Banana', 'Uva', 'Abacaxi'];

frutas2.forEach((item, index) => {
    console.log(`Indice ${index}`);
    console.log(`Elemento ${item}`);
});

// Método forEach() com array de objetos
// Forma mais enxuta de escrever funções
console.log(' - ');
const tarefas = [
    {
        id: 1,
        texto: 'Aqui vai um texto',
    },
    {
        id: 2,
        texto: 'Aqui vai dois textos',
    },
    {
        id: 3,
        texto: 'Aqui vai três textos',
    },
];

tarefas.forEach((teste) => console.log(teste.texto));

// Método map()
console.log(' - ');
const numeros = [16, 4, 9, 25];
const newArray = numeros.map(Math.sqrt); // Math.sqrt faz o calculo de raiz quadrada

console.log('Array antigo');
console.log(numeros);
console.log('Novo array');
console.log(newArray);

// Outro exemplo de map()
console.log(' - ');
const mapText = tarefas.map((valor) => {
    return valor.texto;
});

console.log(mapText);

// Método filter()
console.log(' - ');
const idade = [32, 15, 8, 98, 70];

let filtrIdade = idade.filter((idades) => {
    return idades >= 18;
});

console.log(filtrIdade);

// Método find()
console.log(' - ');
const meuArray = [
    {
        nome: 'Diego',
        idade: 12,
        altura: 120,
        sexo: 'masculino',
    },
    {
        nome: 'Jissara',
        idade: 15,
        altura: 170,
        sexo: 'feminino',
    },
    {
        nome: 'Jheniffer',
        idade: 70,
        altura: 180,
        sexo: 'feminino',
    },
];

console.log(
    meuArray.find((genero) => {
        // O find() só retorna a primeira ocorrencia. Para retornar todas se usa filter()
        return genero.sexo === 'feminino';
    })
);

// Cire um array de objetos com quatro objetos e cada objeto tera 4 propriedades e retorne o nome de todos os alunos
// Retorne todos os alunos que tirou nota maior que 6 e retorne o primeiro aluno que tirou nota menor que 5
