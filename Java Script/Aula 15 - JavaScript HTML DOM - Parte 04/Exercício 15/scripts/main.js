let Arroz = 18.0;

let addArroz = document.getElementById('addArroz');
let items = document.getElementById('items');
let total = document.getElementById('totalPrice');

addArroz.addEventListener('click', addNewItem);

function addNewItem() {
    let newItem = document.createElement('li');
    items.appendChild(newItem);
    newItem.innerText = 'teste';
}
