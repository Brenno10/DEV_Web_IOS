const alunos = [
    {
        nome: 'Nora',
        idade: 16,
        turma: 2,
        nota: 5,
    },
    {
        nome: 'Sellene',
        idade: 17,
        turma: 3,
        nota: 9,
    },
    {
        nome: 'Mikael',
        idade: 16,
        turma: 2,
        nota: 4,
    },
    {
        nome: 'Lutz',
        idade: 15,
        turma: 1,
        nota: 7,
    },
];

alunos.forEach((name) => console.log(name.nome));

let highScore = alunos.filter((highScore) => {
    return highScore.nota > 6;
});
console.log(highScore);

console.log(
    alunos.find((lowScore) => {
        return lowScore.nota < 5;
    })
);
