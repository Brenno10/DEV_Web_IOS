const estavam = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(estavam);

let = estavam.unshift('Amanda');
console.log(estavam, 'Amanda entrou');

let = estavam.pop();
console.log(estavam, 'Xavier saiu');

let = estavam.push('Zuleica');
console.log(estavam, 'Zuleica entrou');

let = estavam.shift('Amanda');
console.log(estavam, 'Amanda saiu');

delete estavam[2];
console.log(estavam, 'Silva saiu');

estavam[2] = 'Silvana';
console.log(estavam, 'Silvana entrou');
console.log(
    'Ficaram 4 pessoas na festa, que são: Joaquim, José, Silvana e Zuleica'
);

// Método .reverse();
// Template String
const item = [1, 2, 3, 4, 5];
console.log(`Antes: ${item}`);

let = item.reverse();
console.log(`Depois: ${item}`);
