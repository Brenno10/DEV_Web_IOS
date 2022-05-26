// Data atual
let atualDate = new Date();
var day = atualDate.getDate();
var month = atualDate.getMonth();
var year = atualDate.getFullYear();

// Botões
const addBtn = document.getElementById('include');
const delBtn = document.getElementById('exclude');
addBtn.addEventListener('click', createNewUser);
delBtn.addEventListener('click', deleteExistingUser);

// Itens do HTML
let userName = document.getElementById('name');
let userBirthday = document.getElementById('birthday');
let userEmail = document.getElementById('email');
let users = document.getElementById('users');
let userId = document.getElementById('deleteUser');

// Mensagens de erro
let noName = document.getElementById('noName');
let noEmail = document.getElementById('noEmail');
let noBirthday = document.getElementById('noBirthday');
let noId = document.getElementById('noId');

// Variaveis de funções
let idNum = 1;

// Apaga apenas 1 input do formulário
function formClear(i) {
    let input = document.getElementsByTagName('input');

    input[i].value = '';
}

// Apaga todas as informações do formulário
function formFullClear() {
    let input = document.getElementsByTagName('input');

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
}

// Verifica se todas as credenciais estão certas e cria um novo usuario
function createNewUser() {
    let fixedUserName = userName.value;
    let fixedUserEmail = userEmail.value;
    let fixedUserBirthday = userBirthday.value;
    let fixedUserAge = new Date(fixedUserBirthday);

    let validEmailTest = new RegExp(/.*@.*\..*/i);

    if (fixedUserName.trim() === '') {
        let noNameHere = document.createElement('p');
        noName.appendChild(noNameHere);

        noNameHere.classList.add('error');
        noNameHere.innerText = 'Por favor, digite seu nome';
        setTimeout(() => noNameHere.remove(), 3000);
        formClear(0);
    } else if (fixedUserBirthday.trim() === '') {
        let noBirthdayHere = document.createElement('p');
        noBirthday.appendChild(noBirthdayHere);

        noBirthdayHere.classList.add('error');
        noBirthdayHere.innerText = 'Por favor, digite sua data de nascimento';
        setTimeout(() => noBirthdayHere.remove(), 3000);
        formClear(1);
    } else if (year - fixedUserAge.getFullYear() < 18) {
        let notEnoughAge = document.createElement('p');
        noBirthday.appendChild(notEnoughAge);

        notEnoughAge.classList.add('error');
        notEnoughAge.innerText = 'Menores de 18 anos não podem ser adicionados';
        setTimeout(() => notEnoughAge.remove(), 3000);
        formClear(1);
    } else if (fixedUserEmail.trim() === '') {
        let noEmailHere = document.createElement('p');
        noEmail.appendChild(noEmailHere);

        noEmailHere.classList.add('error');
        noEmailHere.innerText = 'Por favor, digite seu e-mail';
        setTimeout(() => noEmailHere.remove(), 3000);
        formClear(2);
    } else if (!validEmailTest.test(userEmail.value)) {
        let noValidEmail = document.createElement('p');
        noEmail.appendChild(noValidEmail);

        noValidEmail.classList.add('error');
        noValidEmail.innerText = 'Email invalido';
        setTimeout(() => noValidEmail.remove(), 3000);
        formClear(2);
    } else {
        let newUser = document.createElement('li');
        newUser.appendChild(
            document.createTextNode(
                `Nome ${fixedUserName} : data de nascimento ${fixedUserBirthday} : e-mail ${fixedUserEmail}}`
            )
        );
        users.appendChild(newUser);
        formFullClear();
    }
}

// Exclui um usuario existente pelo id
function deleteExistingUser() {
    let getExistingUser = users.getElementsByTagName('li');
    let allExistingUsers = Array.from(getExistingUser);
    let getUserID = userId.value;

    if (isNaN(getUserID)) {
        let idNaN = document.createElement('p');
        noId.appendChild(idNaN);

        idNaN.classList.add('error');
        idNaN.innerText = 'Por favor, digite um número';
        setTimeout(() => idNaN.remove(), 3000);
        formClear(3);
    } else if (allExistingUsers[getUserID - 1] === undefined) {
        let dontExist = document.createElement('p');
        noId.appendChild(dontExist);

        dontExist.classList.add('error');
        dontExist.innerText = `${getUserID} não existe`;
        setTimeout(() => dontExist.remove(), 3000);
        formClear(3);
    } else {
        allExistingUsers[getUserID - 1].remove();
        formClear(3);
    }
}
