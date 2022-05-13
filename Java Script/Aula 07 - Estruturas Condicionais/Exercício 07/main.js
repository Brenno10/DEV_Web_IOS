const intColab = [
    {
        nome: 'Nora',
        salario: 3280,
        vinculo: 'CLT',
    },
    {
        nome: 'Sellene',
        salario: 7490,
        vinculo: 'CLT',
    },
    {
        nome: 'Mikael',
        salario: 1280,
        vinculo: 'PJ',
    },
    {
        nome: 'Akari',
        salario: 6150,
        vinculo: 'CLT',
    },
    {
        nome: 'Lutz',
        salario: 2380,
        vinculo: 'PJ',
    },
];

const tableINSS = [
    [0, 1212, 0.075],
    [1212, 2427, 0.09],
    [2427, 3641, 0.12],
    [3641, 7087, 0.14],
];

for (let i = 0; i < intColab.length; i++) {
    if (intColab[i].vinculo === 'CLT') {
        if (intColab[i].salario <= tableINSS[0][1]) {
            var INSS = intColab[i].salario * tableINSS[0][2];
        } else if (intColab[i].salario > tableINSS[1][0] && intColab[i].salario <= tableINSS[1][1]) {
            var INSS = intColab[i].salario * tableINSS[1][2];
        } else if (intColab[i].salario > tableINSS[2][0] && intColab[i].salario <= tableINSS[2][1]) {
            var INSS = intColab[i].salario * tableINSS[2][2];
        } else if (intColab[i].salario > tableINSS[3][0] && intColab[i].salario <= tableINSS[3][1]) {
            var INSS = intColab[i].salario * tableINSS[3][2];
        } else if (intColab[i].salario > tableINSS[3][1]) {
            var INSS = intColab[i].salario * tableINSS[3][2];
        } else {
            console.log('incalculavel');
        }
        console.log(`O vínculo de ${intColab[i].nome} é ${intColab[i].vinculo}, seu salário é de ${intColab[i].salario} e seu INSS é de ${INSS.toFixed(1)}`);
    } else {
        console.log(`O vínculo de ${intColab[i].nome} é ${intColab[i].vinculo}, então não paga INSS.`);
    }
}
