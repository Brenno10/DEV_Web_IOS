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

switch (intColab.salario) {
    case intColab.salario <= tableINSS[0][1]:
        intColab.salario + intColab.salario * tableINSS[0][2];
        break;

    case intColab.salario > tableINSS[1][0] &&
        intColab.salario <= tableINSS[1][1]:
        intColab.salario + intColab.salario * tableINSS[1][2];
        break;

    case intColab.salario > tableINSS[2][0] &&
        intColab.salario <= tableINSS[2][1]:
        intColab.salario + intColab.salario * tableINSS[2][2];
        break;

    case intColab.salario > tableINSS[3][0] &&
        intColab.salario <= tableINSS[3][1]:
        intColab.salario + intColab.salario * tableINSS[3][2];
        break;

    case intColab.salario > tableINSS[3][1]:
        intColab.salario + intColab.salario * tableINSS[3][2];
        break;
}
