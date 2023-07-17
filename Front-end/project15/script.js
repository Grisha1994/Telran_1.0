let main = document.querySelector("main")
// main.className += " block"

// let on = document.querySelector(".on")
// on.addEventListener("click", function(){
//     main.classList.add("active")
// })

// let off = document.querySelector(".off")
// off.addEventListener("click", function(){
//     main.classList.remove("active")
// })


// let button = document.querySelector(".btn")
// button.addEventListener("click", function(){
//     main.classList.toggle("active")
// })

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach(function (num){
//     main.innerHTML += `<p>${num}</p>`
// })

// let p = document.querySelectorAll("p")

// 1-variant
// for (let i = 0; i < numbers.length; i++) {
//     p[i].addEventListener("click", function(){
//         p[i].classList.toggle("red")
//     })
// }

// 2-variant
// p.forEach(function (p){
//     p.addEventListener("click", function(){
//     p.classList.toggle("red")
//     })
// })

// Есть массив объектов. Нужно отобразить разметку в html. Внутрь div, 
// положить тег p c текстом из этого массива объектов
/*
    <div>
        <p>{Вынести мусор}</p>
    </div>
    <div>
        <p>{Проверить ДЗ}</p>
    </div>
*/

// let todos = [
//     {
//         name : "Вынести мусор"
//     },
//     {
//         name : "Проверить ДЗ"
//     },
//     {
//         name : "Создать веб-приложение"
//     },
//     {
//         name : "Помыть посуду"
//     }
// ]


// todos.forEach(function (todo) {
//         main.innerHTML += 

//         `<div class="todo">
//             <p>${todo.name}</p>
//         </div>`

//     })
    
// let divs = document.querySelectorAll("div")

// 1-variant - ne sovsem pravilno
//     divs.forEach(function (div){
//     div.addEventListener("click", function(){
//     div.classList.toggle("line")
//     })
// })

// 2-variant
// divs.forEach(function (div){
//     div.addEventListener("click", function(){
//     div.children[0].classList.toggle("line")
//     })
// })

// 3-variant
// divs.forEach(function (div){
//     div.addEventListener("click", function(){
//     div.querySelector("p").classList.toggle("line")
//     })
// })


// let todo = document.querySelector(".todo")
// let text = document.querySelector("p")

// text.addEventListener("click", function () {
//     console.log("click po tegu p")
// })

// todo.addEventListener("click", function () {
//     console.log("click po tegu div")
// })

// todo.children[1].innerText = "Hello"

// С помощью forEach() создать карточки товаров из массива arr. 
// При нажатии на карточку делать ее фон красным. При втором нажатии возвращать на прежний цвет. 
let arr = [
    {
        name : "Acer",
        price : 50000,
        img : "./images/img1.jpg"
    },
    {
        name : "Asus",
        price: 45000
    },
    {
        name : "HP",
        price: 60000
    }
]

arr.forEach(function (nout) {
        main.innerHTML += 

        `<div class="todo" id="red">
            <p>${nout.name}</p>
            <p>${nout.price}</p>
        </div>`

    })

let divs = document.querySelectorAll("div")
    
divs.forEach(function (div){
    div.addEventListener("click", function(){
        div.classList.toggle("red")
    })
})


    
        