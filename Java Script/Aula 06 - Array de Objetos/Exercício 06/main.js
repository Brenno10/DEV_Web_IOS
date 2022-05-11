// Alunos
const alunos = [
    {
        firstName: 'Nora',
        lastName: 'kym',
        age: 16,
        notas: [7, 6, 8, 6],
        media: 0,
        pass: 'aprovada',
        turma: 2,
        endereco: {
            rua: 'Rua Conselheiro Furtado',
            numero: 839,
            cidade: 'São Paulo',
            estado: 'SP',
        },
    },
    {
        firstName: 'Sellene',
        lastName: 'Nyah',
        age: 17,
        notas: [8, 10, 9, 10],
        media: 0,
        pass: 'aprovada',
        turma: 3,
        endereco: {
            rua: 'Rua Conde de Sarzedas',
            numero: 449,
            cidade: 'São Paulo',
            estado: 'SP',
        },
    },
    {
        firstName: 'Mikael',
        lastName: 'Asil',
        age: 16,
        notas: [6, 5, 7, 6],
        media: 0,
        pass: 'reprovado',
        turma: 2,
        endereco: {
            rua: 'Rua Maranhão',
            numero: 729,
            cidade: 'São Paulo',
            estado: 'SP',
        },
    },
    {
        firstName: 'Akari',
        lastName: 'Hikari',
        age: 17,
        notas: [8, 7, 8, 9],
        media: 0,
        pass: 'aprovada',
        turma: 3,
        endereco: {
            rua: 'Rua Pedro Doll',
            numero: 722,
            cidade: 'São Paulo',
            estado: 'SP',
        },
    },
    {
        firstName: 'Lutz',
        lastName: 'Dejan',
        age: 15,
        notas: [9, 8, 10, 9],
        media: 0,
        pass: 'aprovado',
        turma: 1,
        endereco: {
            rua: 'Rua Estados Unidos',
            numero: 304,
            cidade: 'São Paulo',
            estado: 'SP',
        },
    },
];

// calculo de média para cada aluno
var media =
    (alunos[0].notas[0] +
        alunos[0].notas[1] +
        alunos[0].notas[2] +
        alunos[0].notas[3]) /
    alunos[0].notas.length;
alunos[0].media = media;

var media =
    (alunos[1].notas[0] +
        alunos[1].notas[1] +
        alunos[1].notas[2] +
        alunos[1].notas[3]) /
    alunos[1].notas.length;
alunos[1].media = media;

var media =
    (alunos[2].notas[0] +
        alunos[2].notas[1] +
        alunos[2].notas[2] +
        alunos[2].notas[3]) /
    alunos[2].notas.length;
alunos[2].media = media;

var media =
    (alunos[3].notas[0] +
        alunos[3].notas[1] +
        alunos[3].notas[2] +
        alunos[3].notas[3]) /
    alunos[3].notas.length;
alunos[3].media = media;

var media =
    (alunos[4].notas[0] +
        alunos[4].notas[1] +
        alunos[4].notas[2] +
        alunos[4].notas[3]) /
    alunos[4].notas.length;
alunos[4].media = media;

// console.log()
console.log(
    `Aluna ${alunos[0].firstName} ${alunos[0].lastName}, ${alunos[0].age}, da turma ${alunos[0].turma} com as notas ${alunos[0].notas}, mora em ${alunos[0].endereco.rua} e teve a média de ${alunos[0].media}/7, portanto foi ${alunos[0].pass}`
);
console.log(
    `Aluna ${alunos[1].firstName} ${alunos[1].lastName}, ${alunos[1].age}, da turma ${alunos[1].turma} com as notas ${alunos[1].notas}, mora em ${alunos[1].endereco.rua} e teve a média de ${alunos[1].media}/7, portanto foi ${alunos[1].pass}`
);
console.log(
    `Aluno ${alunos[2].firstName} ${alunos[2].lastName}, ${alunos[2].age}, da turma ${alunos[2].turma} com as notas ${alunos[2].notas}, mora em ${alunos[2].endereco.rua} e teve a média de ${alunos[2].media}/7, portanto foi ${alunos[2].pass}`
);
console.log(
    `Aluna ${alunos[3].lastName} ${alunos[3].firstName}, ${alunos[3].age}, da turma ${alunos[3].turma} com as notas ${alunos[3].notas}, mora em ${alunos[3].endereco.rua} e teve a média de ${alunos[3].media}/7, portanto foi ${alunos[3].pass}`
);
console.log(
    `Aluno ${alunos[4].firstName} ${alunos[4].lastName}, ${alunos[4].age}, da turma ${alunos[4].turma} com as notas ${alunos[4].notas}, mora em ${alunos[4].endereco.rua} e teve a média de ${alunos[4].media}/7, portanto foi ${alunos[4].pass}`
);
