let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productsWrapper = document.querySelector(".products-wrapper")

let products = [
    {
        name: "Velosiped",
        price: 40000,
        id : Date.now()+1
    },
    {
        name: "Samocat",
        price: 15000,
        id : Date.now()+2
    },
    {
        name: "luigzi",
        price: 20000,
        id : Date.now()+3
    },
    {
        name: "snoybord",
        price: 25000,
        id : Date.now()+4
    },
]




form.addEventListener("submit", function(event) {
    event.preventDefault()
    // console.log(productName.value)
    // console.log(productPrice.value)
    let newProduct = {
        name: productName.value,
        price: Number(productPrice.value),
        id: Date.now()
    }
    // console.log(newProduct)
    products.push(newProduct)
    // console.log(products)
    renderProducts(products)
    onHover()
    deleteProduct()

    clearInputs()   
})

function clearInputs() {
    productName.value = ''
    productPrice.value = ''
}


function renderProducts(arr) {
    productsWrapper.innerHTML = ''
    arr.forEach(function(element) {
        productsWrapper.innerHTML += 
        ` <div class="product" id="${element.id}">
            <p class="product-name">${element.name}</p>
            <p class="product-price">${element.price}</p>
            <button class="delete-btn">X</button>

        </div>`
    })
}
renderProducts(products)



function onHover() {
    let product = document.querySelectorAll(".product")
    product.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            element.querySelector(".delete-btn").style.display = "block"
        })
        element.addEventListener("mouseout", function() {
            element.querySelector(".delete-btn").style.display = "none"
        })
    })
}
onHover()

// function offHover() {
//     let product = document.querySelectorAll(".product")
//     product.forEach(function(element) {
//         element.addEventListener("mouseout", function() {
//             element.querySelector(".delete-btn").style.display = "none"
//         })
//     })
// }
// offHover()

function deleteProduct() {
    let deleteBtns = document.querySelectorAll(".delete-btn")
    deleteBtns.forEach(function(btn) {
             btn.addEventListener("click", function() {
            //  btn.parentElement.remove()
            // console.log(btn.parentElement.getAttribute("id"));
            deleteElement(btn.parentElement.getAttribute("id"));
            btn.parentElement.remove()
        })
    })
}
deleteProduct()

function deleteElement(id) {
    products.forEach(function(btn, i) {
        if(btn.id == id) {
            products.splice(i,1)
        }
    })
}


