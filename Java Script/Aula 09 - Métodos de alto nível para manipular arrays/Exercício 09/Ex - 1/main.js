const num = [17, 43, 8, 4, 97, 56, 29];

num.forEach((i) => {
    if (i % 2 == 0) {
        console.log(`O número ${i} é par`);
    } else {
        console.log(`O número ${i} é impar`);
    }
});

let lowerThen = num.filter((i) => {
    return i <= 18;
});
console.log(`Os números ${lowerThen} são menores que 18`);
