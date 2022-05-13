// while
var profHello = 1;

while (profHello <= 5) {
    console.log('hello prof');
    // profHello = profHello + 1
    profHello++; // Sempre tem que existir um incremento ou decremento
}

// do while
do {
    console.log(`profHello = ${profHello}`); // a variavel profHello = 6, e esta sendo executada uma vez e o loop para
    console.log('bate palma');
    profHello++;
} while (profHello <= 5);

// Incremento
let val = 1;

// Começa com 1 e termina em 10
while (val <= 10) {
    console.log(val);
    val++;
}

// Decremento
let val2 = 10;

// Começa com 10 e termina em 0
while (val2 >= 0) {
    console.log(`O valor é ${val2}`);
    val2--;
}

// for
for (let varr = 1; varr <= 5; varr++) {
    console.log(`Olá jackass`);
}

// Começa com o valor 10 e termina com 0
for (let varr1 = 10; varr1 >= 0; varr1--) {
    console.log(`Contador: ${varr1}`);
}

// Incremento de 2 ou mais
for (let i = 1; i <= 30; i = i + 2) {
    console.log(`Uhu ${i}`);
}

// Laços de repetições e arrays
const frutas = ['maca', 'laranja', 'pera', 10];

for (let j = 0; j < frutas.length; j++) {
    console.log(frutas[j]);
}

// Array de objetos e laços
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];
// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}
