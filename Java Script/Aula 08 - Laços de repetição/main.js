//
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

// Exibir o valor de 1 até 10
let val = 1;

while (1 <= 10) {
    console.log(val);
    val++;
}

let val2 = 10;
// Começa com 10 e termina em 0
while (val2 >= 0) {
    console.log(`O valor é ${val2}`);
    val2--;
}
