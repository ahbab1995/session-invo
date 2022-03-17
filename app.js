// handle detail submit button

const detailSubmit = getId('detail-submit-btn');
const buyerDetailInput = getId('buyer-details-input');

detailSubmit.addEventListener('click',
function(){
    const buyerInput = getId('buyer-info');
    buyerInput.innerText = buyerDetailInput.value;
    buyerDetailInput.value = '';
})

// handle item details add button

const addDetailItem = getId('add-details-btn');

const itemNameInput = getId('item-name-input');
const itemPriceInput = getId('item-price-input');
const itemQuantityInput = getId('item-quantity-input');

// fun create element handle
function element(params) {
    return document.createElement(params);
}

// fun create element by id handle
function getId(params) {
    const elementId = document.getElementById(params);
    return elementId;
}

addDetailItem.addEventListener('click',()=>{
    let itemNameText = itemNameInput.value;
    let itemPriceText = itemPriceInput.value;
    let itemQuantityText = itemQuantityInput.value;

    // Error handle
    if (itemNameText == '' ||
        itemPriceText == '' || 
        itemPriceText < 0 || 
        itemQuantityText == ''|| 
        itemQuantityText < 0
        ) {
            console.log("sorry.....! Filed Empty");
            return;
        }

    const infoTable = getId('info-table')

    const totalPrice = parseInt(itemPriceText) * parseInt(itemQuantityText);

   

    const tr = element('tr');
    const th = element('th');
    const td1 = element('td');;
    const td2 = element('td');
    const td3 = element('td');

    td3.classList.add('item-total');

    th.innerText = itemNameText;
    td1.innerText = itemPriceText;
    td2.innerText = itemQuantityText;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
    totalCalculation()

    itemNameInput.value = '';
    itemPriceInput.value = '';
    itemQuantityInput.value = '';

    

})

function totalCalculation() {
    const subTotal = calculationSubTotal()
    const subTotalToDisplay = getId('sub-total')
    subTotalToDisplay.innerText = subTotal;

    let tax = subTotal * 0.2;
    
    getId('tax').innerText = tax.toFixed(2);
    getId('grand-total').innerText = subTotal + tax;
    getId('grand-total-2').innerText = subTotal + tax;
}

function calculationSubTotal() {
    const itemTotal = document.getElementsByClassName('item-total');
    let subTotal = 0;
    for (let i = 0; i < itemTotal.length; i++) {
        const element = itemTotal[i];
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }
    return subTotal;
}


// Set Date

const showDate = getId('show-date');
const date = new Date();

showDate.innerText=date.toLocaleDateString();