let btns = document.getElementsByClassName('B_12');
console.log(btns);
for (let i = 0; i < btns.length; i++) {
    btns[i].style.border = '2px solid #D9BC66';
    btns[i].style.padding = '.5rem';
    btns[i].style.backgroundColor = '#BFBFBF';
    btns[i].style.margin = '.7rem';
}

function umbrella() {
    alert('Imagem da Série Umbrella Academy');
    let figure = document.createElement('serie');
    document.body.appendChild(figure);

    let img = document.createElement('img');
    img.src = './assets/umbrella.jpg';
    figure.appendChild(img);
    img.style.maxWidth = '35%';
    document.body.style.backgroundColor = '#262525';
}

function requiredName() {
    let user = prompt('Seja Bem-Vindo(a); por favor preencha seu nome:');

    document.body.innerHTML = `Olá ${user}, Bem-vindo a nossa academia.`;
}

function multiply() {
    let base = prompt('Por favor digite um número:');

    for (let i = 1; i <= 10; i++) {
        document.write(`${base} x ${i} = ${base * i} <br>`);
    }
}
