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
        noName.classList.add('error');
        noName.innerText = 'Por favor, digite seu nome';
        setTimeout(() => noName.remove(), 3000);
        formClear(0);
    } else if (fixedUserBirthday.trim() === '') {
        noBirthday.classList.add('error');
        noBirthday.innerText = 'Por favor, digite sua data de nascimento';
        setTimeout(() => noBirthday.remove(), 3000);
        formClear(1);
    } else if (year - fixedUserAge.getFullYear() < 18) {
        noBirthday.classList.add('error');
        noBirthday.innerText = 'Menores de 18 anos não podem ser adicionados';
        setTimeout(() => noBirthday.remove(), 3000);
        formClear(1);
    } else if (fixedUserEmail.trim() === '') {
        noEmail.classList.add('error');
        noEmail.innerText = 'Por favor, digite seu e-mail';
        setTimeout(() => noEmail.remove(), 3000);
        formClear(2);
    } else if (!validEmailTest.test(userEmail.value)) {
        noEmail.classList.add('error');
        noEmail.innerText = 'Email invalido';
        setTimeout(() => noEmail.remove(), 3000);
        formClear(2);
    } else {
        let newUser = document.createElement('li');
        newUser.appendChild(
            document.createTextNode(
                `Nome ${fixedUserName} : data de nascimento ${userBirthday.value} : e-mail ${userEmail.value} : id `
            )
        );
        users.appendChild(newUser);
        formFullClear();
    }
}

// Exclui um usuario existente pelo id
function deleteExistingUser() {}
