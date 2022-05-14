const base = 20;

// Verifica qual multiplo esta sendo usado
for (let i = 0; i <= base; i++) {
    if (i == 0) {
        console.log(`Todo Multiplo de ${i} é igual a 0`);
    } else {
        console.log(`Multiplos de ${i}`);
        contador(i);
    }
}

// Multiplicador
function contador(base) {
    let i = 1;
    while (i <= 10) {
        console.log(`${base} x ${i} = ${i * base}`);
        i++;
    }
}
