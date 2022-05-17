const alunos = [
    {
        nome: 'Nora',
        idade: 16,
        gender: 'female',
        nota: 5,
    },
    {
        nome: 'Sellene',
        idade: 17,
        gender: 'female',
        nota: 9,
    },
    {
        nome: 'Mikael',
        idade: 16,
        gender: 'male',
        nota: 4,
    },
    {
        nome: 'Lutz',
        idade: 15,
        gender: 'male',
        nota: 7,
    },
];

// Verifica o nome de cada aluno e aluna por gênero e suas notas
alunos.forEach((name) => {
    if (name.gender == 'female') {
        console.log(`Aluna: ${name.nome}, Nota: ${name.nota}`);
    } else {
        console.log(`Aluno: ${name.nome}, Nota: ${name.nota}`);
    }
});

// Filtra todos os alunos com nota superior a 6
let highScore = alunos.filter((highScore) => {
    return highScore.nota > 6;
});

highScore.forEach((Name) => {
    if (Name.gender == 'female') {
        console.log(`A aluna ${Name.nome} obteu nota maior que 6`);
    } else {
        console.log(`O aluno ${Name.nome} obteu nota maior que 6`);
    }
});

// Acha o aluno com nota menor que 6
let lowScore = alunos.find((lowScore) => {
    return lowScore.nota < 5;
});

if (lowScore.gender == 'female') {
    console.log(`A aluna ${lowScore.nome} obteve nota menor que 5`);
} else {
    console.log(`O aluno ${lowScore.nome} obteve nota menor que 5`);
}
