const alunos = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2°B',
    },
    {
        nome: 'Bruno',
        idade: 16,
        nota: 6,
        ano: '2°C',
    },
    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2°C',
    },
    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3°C',
    },
    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3°C',
    },
    {
        nome: 'Maria',
        idade: 14,
        nota: 4,
        ano: '1°F',
    },
];

// Nome e ano de cada aluno
console.log(`Todos os alunos -`);
alunos.forEach((name) => console.log(name.nome, name.ano));

// Apenas os alunos do 2° ano
console.log(`Alunos do 2° ano -`);
let secondYear = alunos.filter((year) => {
    return year.ano.match('2°'); // .match verifica se o valor especificado existe na string e retorna valor booleano
});
secondYear.forEach((i) => console.log(i.nome));

// Média das notas de todos os alunos
let totalScore = alunos.map((score) => {
    return score.nota;
});

// Calcula a média da sala
let media =
    // Não sei oq .reduce() faz mas ta funcionando :)
    totalScore.reduce((media, i) => {
        return media + i;
    }) / alunos.length;

// Verifica se a média é maior, igual ou menor que 7
if (media > 7) {
    console.log(
        `A média da sala é ${media.toFixed(1)}/7 e estão Acima da média`
    );
} else if (media == 7) {
    console.log(`A média da sala é ${media.toFixed(1)}/7 e estão na média`);
} else {
    console.log(
        `A média da sala é ${media.toFixed(1)}/7 e estão abaixo da média`
    );
}
