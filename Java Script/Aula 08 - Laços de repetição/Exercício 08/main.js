const base = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Verifica qual multiplo esta sendo usado
for (let i = 0; i <= base.length; i++) {
    if (i == 0) {
        console.log(`Todo Multiplo de ${i} é igual a 0`);
    } else {
        console.log(`Multiplos de ${i}`);
        contador(i);
    }
}

// Multiplicador
function contador(base) {
    let i = 0;
    while (i <= 10) {
        console.log(`${base} x ${i} = ${i * base}`);
        i++;
    }
}
