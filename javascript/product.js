/* PRODUCT PAGE */

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Story of Nunu: Collector Edition',
        image: '../images/product_1.png',
        price: 99.99
    },

    {
        id: 2,
        name: 'Nunu & Willump Figurine',
        image: '../images/product_2.png',
        price: 129.99
    },

    {
        id: 3,
        name: 'Cafe Cuties Gwen Figure',
        image: '../images/product_3.png',
        price: 34.99
    },

    {
        id: 4,
        name: 'Cafe Cuties Tibbers Plush',
        image: '../images/product_4.png',
        price: 29.99
    },

    {
        id: 5,
        name: 'Cafe Cuties Gwen Plush',
        image: '../images/product_5.png',
        price: 29.99
    },

    {
        id: 6,
        name: 'Gwen Keychain',
        image: '../images/product_6.png',
        price: 12.55
    },

    {
        id: 7,
        name: 'Gwen Plush',
        image: '../images/product_7.png',
        price: 33.49
    },

    {
        id: 8,
        name: 'HEARTSTEEL Band Poster',
        image: '../images/product_8.png',
        price: 21.49
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = 'Total: $'+totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}