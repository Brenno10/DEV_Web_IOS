window.alert('Bem Vindo(a)');
document.title = 'Métodos do DOM';

// Article
let article = document.createElement('article');
document.body.appendChild(article);

let titleA = document.createElement('h1');
article.appendChild(titleA);

let textA = document.createElement('p');
article.appendChild(textA);

titleA.innerHTML = 'Métodos do DOM';
textA.innerHTML = 'Isso é um teste em JS de métodos DOM';

titleA.style.borderBottom = '2px #606 solid';
titleA.style.textAlign = 'center';

// Section
let section = document.createElement('section');
document.body.appendChild(section);

let titleS = document.createElement('h1');
section.appendChild(titleS);

let textS = document.createElement('p');
section.appendChild(textS);

titleS.innerHTML = 'LOREN IS LIFE!';
textS.innerHTML =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis enim, ea animi deleniti maxime odit ab a illum quae doloremque harum sint, qui ipsum mollitia et? Eligendi assumenda id officia.';

titleS.style.borderTop = '2px #606 solid';
titleS.style.borderBottom = '2px #606 solid';
titleS.style.backgroundColor = '#404';
titleS.style.color = '#fff';
titleS.style.textAlign = 'center';
