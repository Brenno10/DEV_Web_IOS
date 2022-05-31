let itemName = document.getElementById('itemName');
let itemPrice = document.getElementById('itemPrice');
let newItemBtnList = document.getElementById('items');
let addNewItem = document.getElementById('addNewItem');
let errorMensage = document.getElementById('error');

let totalPrice = document.getElementById('totalPrice');
let finalPriceDisplay = document.createElement('li');
totalPrice.appendChild(finalPriceDisplay);
let pricePool = [];

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
            totalPriceCalculationAddition(itemPrice.value);

            if (currentValue === 0) {
                this.parentElement.parentElement.remove();
            }

            moreItemValue.innerText = `${currentValue}`;
        }

        function lessItems(e) {
            e.preventDefault();

            currentValue--;
            if (currentValue === 0) {
                this.parentElement.parentElement.remove();
            }

            moreItemValue.innerText = `${currentValue}`;
            totalPriceCalculationAddition(-itemPrice.value);
        }

        function removeItem(e) {
            e.preventDefault();

            totalPriceCalculationAddition(-itemPrice.value * currentValue);

            currentValue = 0;
            if (currentValue === 0) {
                this.parentElement.parentElement.remove();
            }
            moreItemValue.innerText = `${currentValue}`;
        }

        totalPriceCalculationAddition(itemPrice.value);
    }
}

function itemPriceClear() {
    itemPrice.value = '';
}

function totalPriceCalculationAddition(i) {
    let fixedItemPrice = parseInt(i);
    pricePool.push(fixedItemPrice);
    let total = 0;

    if (pricePool.length <= 1) {
        total = i;
    } else {
        for (let i = 0; i < pricePool.length; i++) {
            total += pricePool[i];
        }
    }

    finalPriceDisplay.innerText = `${total}`;
    finalPriceDisplay.classList = 'list-group-item float-start';
}

// Criando mensagem de erro
let noNumberHere = document.createElement('p');
errorMensage.appendChild(noNumberHere);
noNumberHere.classList = 'error text-opacity-75 text-danger';

addNewItem.addEventListener('click', createAndPrevent);

function createAndPrevent(e) {
    e.preventDefault();

    if (itemPrice.value == 0) {
        noNumberHere.innerText = `Digite um número!`;
        setTimeout(() => (noNumberHere.innerText = ''), 3000);
        itemPriceClear();
    } else if (isNaN(parseInt(itemPrice.value))) {
        noNumberHere.innerText = `${itemPrice.value} não é um número!`;
        setTimeout(() => (noNumberHere.innerText = ''), 3000);
        itemPriceClear();
    } else if (itemPrice.value < 0) {
        noNumberHere.innerText = `Números negativos não são permitidos!`;
        setTimeout(() => (noNumberHere.innerText = ''), 3000);
        itemPriceClear();
    } else {
        new PriceTable(itemName.value, itemPrice.value);
    }
}
