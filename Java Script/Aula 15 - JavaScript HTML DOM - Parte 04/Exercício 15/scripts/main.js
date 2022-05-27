let itemName = document.getElementById('itemName');
let itemPrice = document.getElementById('itemPrice');
let newItemBtnList = document.getElementById('items');
let addNewItem = document.getElementById('addNewItem');

class PriceTable {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.createNewItem();
    }

    createNewItem() {
        let newItem = document.createElement('li');
        let btnDiv = document.createElement('div');

        newItem.innerText = `${this.name} ${this.price}`;
        newItem.classList = 'd-block p-2 list-group-item';
        btnDiv.classList = '';

        this.addAllButtons(btnDiv);

        newItem.appendChild(btnDiv);
        newItemBtnList.appendChild(newItem);
    }

    addAllButtons(whereToPlace) {
        // Quantidade atual de itens
        let moreItemValue = document.createElement('p');
        let currentValue = 1;

        moreItemValue.innerText = `${currentValue}`;
        moreItemValue.classList = 'list-group-item float-end';

        // Botão que aumenta a quantidade de itens
        let moreItemBtn = document.createElement('button');

        moreItemBtn.innerText = '+';
        moreItemBtn.classList =
            'btn btn-success btn-sm list-group-item float-end';

        // Botão que diminui a quantidade de itens
        let lessItemBtn = document.createElement('button');

        lessItemBtn.innerText = '-';
        lessItemBtn.classList =
            'btn btn-warning btn-sm list-group-item float-end';

        // Botão que remove o item
        let removeItemBtn = document.createElement('button');

        removeItemBtn.innerText = 'X';
        removeItemBtn.classList =
            'btn btn-sm btn-danger list-group-item float-end';

        whereToPlace.appendChild(moreItemBtn);
        whereToPlace.appendChild(lessItemBtn);
        whereToPlace.appendChild(removeItemBtn);
        whereToPlace.appendChild(moreItemValue);

        // Eventos
        moreItemBtn.addEventListener('click', moreItems);
        lessItemBtn.addEventListener('click', lessItems);
        removeItemBtn.addEventListener('click', removeItem);

        function moreItems(e) {
            e.preventDefault();

            currentValue++;
            if (currentValue === 0) {
            }
            moreItemValue.innerText = `${currentValue}`;
        }

        function lessItems(e) {
            e.preventDefault();

            currentValue--;
            if (currentValue === 0) {
            }
            moreItemValue.innerText = `${currentValue}`;
        }

        function removeItem(e) {
            e.preventDefault();

            currentValue = 0;
            if (currentValue === 0) {
            }
            moreItemValue.innerText = `${currentValue}`;
        }
    }
}

addNewItem.addEventListener('click', prevent);

function prevent(e) {
    e.preventDefault();
    new PriceTable(itemName.value, itemPrice.value);
}
