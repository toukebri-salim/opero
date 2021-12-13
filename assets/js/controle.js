let myBody = document.getElementById('my-body')
let myNavbar = document.getElementById('my-navbar')
let btnCart = document.getElementById('btn-cart')
let btnDarkMode = document.getElementById('btn-dark-mode')
let iconDarkMode = document.getElementById('icon-dark-mode')

let cartNumber = document.getElementById('cart-number')

let productsList = document.getElementById('products-list')

let cartProducts = []

let products = [
    {
        id: 1,
        image: "./assets/images/airpods.jpg",
        name: "AIRPODS",
        price: 779.000
    },
    {
        id: 2,
        image: "./assets/images/ecouteur sans fils.jpg",
        name: "Ecouteur Sans Fils LEDWOOD",
        price: 88.500
    },
    {
        id: 3,
        image: "./assets/images/ecouteurjbl.jpg",
        name: "Ecouteur JBL",
        price: 125.000
    },
    {
        id: 4,
        image: "./assets/images/huawei free buds.jpg",
        name: "HUAWEI FREE BUDS",
        price: 449.000
    },
    {
        id: 5,
        image: "./assets/images/infinix.jpg",
        name: "INFINIX",
        price: 129.000
    },
    {
        id: 6,
        image: "./assets/images/samsunggalaxybuds.jpg",
        name: "SAMSUNG GALAXY BUDS",
        price: 599.000
    },
]

//appel mta3 fonction
intiWebsite()

function intiWebsite() {
    let cart = localStorage.getItem("cart")
    let allProducts = localStorage.getItem("products")

    cart ? cartNumber.textContent = cart : cartNumber.textContent = 0
    allProducts ? cartProducts = JSON.parse(allProducts) : cartProducts = []

    for (let i = 0; i < products.length; i++) {
        productsList.innerHTML = productsList.innerHTML +
            `<div class="col-4 mb-5 ">
                <div class="card">
                    <img src="${products[i].image}" class="img-fluid">
                    <div class="card-body text-center">
                        <h4 class="card-title">${products[i].name}</h4>
                        <p class="card-text">${products[i].price} DT</p>
                    </div>
                    <div class="card-footer">
                        <button onclick="addToCart(${products[i].id},'${products[i].image}','${products[i].name}',${products[i].price})" class="btn btn-dark btn-block">
                            <i class="fa fa-plus"></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>`
    }

}

function darkMode() {
    // body toggle bg-dark
    myBody.classList.toggle('bg-dark')
    // navbar toggle navbar-light bg-light
    myNavbar.classList.toggle('navbar-light')
    myNavbar.classList.toggle('bg-light')
    // navbar toggle navbar-dark bg-dark
    myNavbar.classList.toggle('navbar-dark')
    myNavbar.classList.toggle('bg-dark')
    // btncart toggle btn-light
    btnCart.classList.toggle('btn-light')
    // btndarkmode toggle btn-dark
    btnDarkMode.classList.toggle('btn-dark')
    // btndarkmode toggle btn-light
    btnDarkMode.classList.toggle('btn-light')
    // iconedarkmode toggle fa-moon
    iconDarkMode.classList.toggle('fa-moon')
    // iconedarkmode toggle fa-sun
    iconDarkMode.classList.toggle('fa-sun')
}

function addToCart(id, image, name, price) {
    cartNumber.textContent = Number(cartNumber.textContent) + 1
    localStorage.setItem("cart", cartNumber.textContent)

    if (cartProducts.length == 0) {
        let product = { id, image, name, price, qte: 1 }
        cartProducts.push(product)
    } else {
        let trouve = false
        for (let i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i].id == id) {
                trouve = true
                cartProducts[i].qte = cartProducts[i].qte + 1
            }
        }
        if (!trouve) {
            let product = { id, image, name, price, qte: 1 }
            cartProducts.push(product)
        }
    }
    localStorage.setItem("products", JSON.stringify(cartProducts))
}