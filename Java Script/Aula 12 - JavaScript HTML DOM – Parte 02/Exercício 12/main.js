// Pega todos os elementos da mesma classe e os transforma em array
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
    umbrellaTitle.style.color = '#ddd';

    let figureImg = document.createElement('figure');
    figureSect.appendChild(figureImg);

    let img = document.createElement('img');
    figureImg.appendChild(img);
    img.src = './assets/umbrella.jpg';
    img.style.maxWidth = '35%';
    img.style.margin = '0 auto';
    img.style.display = 'block';

    document.body.style.backgroundColor = '#262525';
}

function requiredName() {
    let user = prompt('Seja Bem-Vindo(a); por favor preencha seu nome:');

    if (user.trim() != '') {
        let welcomeSec = document.createElement('section');
        document.body.appendChild(welcomeSec);

        let welcomeName = document.createElement('h2');
        welcomeSec.appendChild(welcomeName);
        welcomeName.innerHTML = `Olá ${user}, Bem-vindo a nossa academia.`;
        welcomeName.style.textAlign = 'center';
    } else {
        alert('Por favor, preencha seu nome');
        requiredName();
    }
}

function multiply() {
    let initialBase = prompt('Por favor digite um número:');
    let base = parseInt(initialBase.replace(/\s+/, ''));

    // Verifica se o valor recebido não é vazio
    if (base.length === 0) {
        alert(`Por favor digite um número`);
        multiply();
    } else {
        // isNaN é uma função que verifica se é um número, aceita como parametro oque sera comparado e retorna true ou false
        if (!isNaN(base)) {
            if (base != 0) {
                let multSect = document.createElement('section');
                document.body.appendChild(multSect);

                let listName = document.createElement('h3');
                multSect.appendChild(listName);
                listName.innerHTML = `Tabuada de ${base} de 1 a 10`;

                let multNum = document.createElement('ul');
                multSect.appendChild(multNum);

                for (let i = 1; i <= 10; i++) {
                    let multList = document.createElement('li');
                    multNum.appendChild(multList);

                    multList.innerHTML = `${base} x ${i} = ${base * i} <br>`;
                }
            } else {
                let multSect = document.createElement('section');
                document.body.appendChild(multSect);

                let listName = document.createElement('h3');
                multSect.appendChild(listName);

                listName.innerHTML = `Todo Número multiplicado por 0 é 0!`;
            }
        } else {
            alert(`${initialBase} não é um número!`);
            multiply();
        }
    }
}
