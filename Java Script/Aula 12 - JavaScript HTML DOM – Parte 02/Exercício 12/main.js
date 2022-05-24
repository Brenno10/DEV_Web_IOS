let btns = document.getElementsByClassName('B_12');
for (let i = 0; i < btns.length; i++) {
    btns[i].style.border = '2px solid #D9BC66';
    btns[i].style.padding = '.5rem';
    btns[i].style.backgroundColor = '#BFBFBF';
    btns[i].style.margin = '.7rem';
}

function umbrella() {
    alert('Imagem da Série Umbrella Academy');
    let figureSect = document.createElement('section');
    document.body.appendChild(figureSect);

    let umbrellaTitle = document.createElement('h3');
    figureSect.appendChild(umbrellaTitle);
    umbrellaTitle.innerHTML = 'Cartaz da série Umbrella Academy';
    umbrellaTitle.style.textAlign = 'center';

    let figureImg = document.createElement('figure');
    figureSect.appendChild(figureImg);

    // É melhor adicionar o estilo antes de completar o elemento
    let img = document.createElement('img');
    figureImg.appendChild(img);
    img.src = './assets/umbrella.jpg';
    img.style.maxWidth = '40%';
    img.style.margin = '0 auto';
    img.style.display = 'block';
    figure.appendChild(img);

    document.body.style.backgroundColor = '#262525';
}

function requiredName() {
    let userName = prompt('Seja Bem-Vindo(a); por favor preencha seu nome:');
    let user = userName.trim();

    if (user != '') {
        let welcomeSec = document.createElement('section');
        document.body.appendChild(welcomeSec);

        let welcomeName = document.createElement('h2');
        welcomeSec.appendChild(welcomeName);
        welcomeName.innerHTML = `Olá ${user}, Bem-vindo a nossa academia.`;
    } else {
        alert('Por favor, preencha seu nome');
        requiredName();
    }
}

function multiply() {
    let base = prompt('Por favor digite um número:');

    let multSect = document.createElement('section');
    document.body.appendChild(multSect);

    let listName = document.createElement('h3');
    multSect.appendChild(listName);
    listName.innerHTML = `Tabuada de 1 a 10 de ${base}`;

    let multNum = document.createElement('ul');
    multSect.appendChild(multNum);

    // isNaN é uma função que aceita como parametro oque sera comparado
    if (!isNaN(base)) {
        for (let i = 1; i <= 10; i++) {
            let multList = document.createElement('li');
            multNum.appendChild(multList);

            multList.innerHTML = `${base} x ${i} = ${base * i} <br>`;
        }
    } else {
        let multList = document.createElement('li');
        multNum.appendChild(multList);

        multList.innerHTML = `${base} não é um número`;
    }
}
