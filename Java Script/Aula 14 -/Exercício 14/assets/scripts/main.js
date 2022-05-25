let data = new Date();
var day = data.getDate();
var month = data.getMonth();
var year = data.getFullYear();

const form = document.querySelector('#form');
const inputName = document.querySelector('#name');
const birthday = document.querySelector('#birthday');
const email = document.querySelector('#email');
const users = document.querySelector('#users');

const noName = document.querySelector('#noName');
const noBirthday = document.querySelector('#noBirthday');
const noEmail = document.querySelector('#noEmail');

const addUser = document.querySelector('#include');
const deleteUser = document.querySelector('#exclude');

function createNewUser() {
    if (inputName.value === '' || email.value === '' || birthday.value === '') {
        if (inputName.value === '') {
            noName.classList.add('error');
            noName.innerText = 'Insira seu nome';
        } else if (email.value === '') {
            noEmail.classList.add('error');
            noEmail.innerText = 'Insira seu email';
        } else if (birthday.value) {
            noBirthday.classList.add('error');
            noBirthday.innerText = 'Insira sua data de nascimento';
        }
    } else {
        let newUser = document.createElement('li');
        users.appendChild(newUser);
        newUser.innerText = `${inputName} ${birthday} ${email}`;
    }
}
