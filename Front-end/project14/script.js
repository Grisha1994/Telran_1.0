// let item = document.querySelector("main")

// console.log(item.innerText)
// console.log(item.innerHTML)


// item.innerHTML = item.innerHTML + "<h2>Hello</h2>"
// item.innerHTML += "<h2>Hello</h2>"

// let num = 10
// num = 10+5

// let h = document.querySelector("h2")
// let greeting = "Hello"
// greeting += " Arsen"

// h.innerHTML = greeting

// let main = document.querySelector("main")
// let name = "Grisha"
// main.innerHTML += `<p>${name}</p>`

// for (let i = 0; i < 5; i++) {
//     main.innerHTML += "<p>Hello</p>"
// }

// for (let i = 0; i < 5; i++) {
//     main.innerHTML += `<p>Hello${i+1}</p>`
// }

// let link = "https://google.com"
// let link_name = "Google"
// main.innerHTML = `<a href=${link}>${link_name}</a>`

// let laptop = {
//     name : "Aser",
//     model : "G44m",
//     price : 15000
// }
// main.innerHTML += 
// `<div>
//      <h1>${laptop.name}</h1>
//      <p>${laptop.model}</p>
//      <p>${laptop.price}</p>
// </div>`


// let book = {
//     name : "Garri Potter",
//     avtor : "Gina",
//     count : 800
// }

// main.innerHTML += 
// `<div>
//      <h1>${book.name}</h1>
//      <p>${book.avtor}</p>
//      <p>${book.count}</p>
// </div>`


// Есть массив объектов. 
// let laptops = [
//     {
//         mark : "Acer",
//         model : "G444M",
//         price : 18000
//     },
//     {
//         mark : "Asus",
//         model : "705K",
//         price : 25000
//     },
//     {
//         mark : "HP",
//         model : "P500",
//         price : 50000
//     }
// ]

// for (let i = 0; i < laptops.length; i++) {
//     main.innerHTML += 
//     `<div class="laptop">
//          <h1>${laptops[i].mark}</h1>
//          <p class="nout">${laptops[i].model}</p>
//          <p class="cena">${laptops[i].price}</p>
//     </div>` 
// }

// laptops.forEach(function (laptop) {
//     main.innerHTML += 
//  `<div class="laptop">
//     <h1>${laptop.mark}</h1>
//     <p class="nout">${laptop.model}</p>
//     <p class="cena">${laptop.price}</p>
// </div>` 
// })

// let arr = [2, 4, 6, 8, 10]

// arr.forEach(function (num) {
//     console.log(num + 2)
    
// })
// console.log(arr)

// Есть массив 
// let names = ["Arsen", "Paul", "Lyudmila", "Grisha"]
// В консоли вывести "Hello +имя" для каждого элемента массива
// Hello Arsen, Hello Paul, Hello Lyudmila, Hello Grisha. forEach

// names.forEach(function (name) {
//     console.log("Hello " + name )
// })


// Есть массив объектов
 let cars = [
    {
        mark : "Mercedes-Benz",
        model : " S600",
        year : "2005",
        price : 50000
    }, 
    {
        mark : "BMW",
        model : " M5",
        year : "2010",
        price : 30000
    },
    {
        mark : "VW",
        model : " Golf5",
        year : "2015",
        price : 25000
    },
    {
        mark : "Toyota",
        model : " Camry",
        year : "2015",
        price : 25000
    }
 ] 

//  Для каждого из элементов массива отобразить разметку
let main = document.querySelector("main")
cars.forEach(function (auto) {
    main.innerHTML += 
    `<div class="car">  
    <h1 class="auto">${auto.mark + auto.model}</h1>
    <p class="nout">${auto.year}</p>
    <p class="cena">${auto.price}</p>
 </div>`
})

