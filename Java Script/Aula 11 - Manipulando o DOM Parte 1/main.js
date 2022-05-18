// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain); // esperado 127.0.0.1 (esse ip se refere para o local host)
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título
document.title = 123;
// Criar um elemento <h1>
// .createElement('') cria um novo elemento html (é nescessário estar em string)
let heading = document.createElement('H1'); // H1 ou h1 n tem difêrença
heading.innerHTML = 'Olá alunos!';
document.body.appendChild(heading); // .appendChild() inclui um elemento dentro de outro elemento no html
heading.style.borderBottom = 'solid 3px #000'; // .style.'comandoCSS' para dar ou modificar o estilo do elemento (tem que ser feito em string)
