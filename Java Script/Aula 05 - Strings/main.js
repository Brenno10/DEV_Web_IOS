// - Concatenação de strings

let exemplo1 = 10;
let exemplo2 = 2;
let string1 = 'Aqui vai um texto';

// Exemplo de concatenação com aspas simples
console.log('O resultado da soma é:' + ' ' + (exemplo1 + exemplo2));

// Exemplo de concatenação com aspas dublas
console.log("O resultado da soma é:" + " " + (exemplo1 + exemplo2));

// Exemplo de concatenação com crase
console.log(`O resultado da soma é: ${exemplo1 + exemplo2}`);

// - Métodos de strings

// Acesse uma String
let string2 = 'Aqui vai um texto';
console.log(string1.charAt(0));
console.log(string1[1]);

// Tamanho da String
let string3 = 'Aqui vai um texto';
console.log(string1.length);

// Maiúsculas e minúsculas
let string4 = 'Aqui vai um texto';
let string5 = 'AQUI VAI UM TEXTO';
console.log(string4.toUpperCase());
console.log(string5.toLowerCase());

// Substring
let string6 = 'Mozilla';
console.log(string6.substring(1, 3));

// Split
let string7 = 'A raposa é um animal esperto';
let string8 = string7.split(' ');
console.log(string8[4]);

// Substituir uma string dentro da string
let string9 = 'Aqui vai um texto';
let string10 = string9.replace('Aqui', 'Kauan');
console.log(string10);

// Remover espaços da string
let string11 = '     Aqui vai um texto                  ';
console.log(string11);
console.log(string11.trim());

// Métodos de buscar em strings
let string12 = 'Aqui vai um texto Aqui';

// String.indexOf():
// conta a posição da primeira letra
console.log(string12.indexOf('Aqui'));

// String.lastIndexOf:
// conta a posição da ultima letra
console.log(string12.lastIndexOf('Aqui'));

// String.search():
console.log(string12.search('Aqui'));

// String.startWith():
// Verifica se o texto começa com o valor indicado e retorna valor boleano
console.log(string12.startsWith('A')); // true
console.log(string12.startsWith('a')); // false

// String.endsWith():
// Verifica se o texto termina com o valor indicado e retorna valor boleano
console.log(string12.endsWith('i')); // true
console.log(string12.endsWith('.')); // false
console.log(string12.endsWith('I')); // false