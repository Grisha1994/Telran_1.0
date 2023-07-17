
// console.log(document.body)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// console.log(document.querySelector("button"))  //  po tegy
// console.log(document.querySelector(".item")) //  po ckassy
// console.log(document.querySelector("#green")) //  po id
// console.log(document.querySelector("#red"))



// console.log(document.querySelectorAll("button"))
// console.log(document.querySelectorAll(".item"))

// let buttonRed = document.querySelector("#red")

// buttonRed.style.backgroundColor = "red"
// console.log(buttonRed)

// 1-variant
// let body1 = document.body
// body1.style.backgroundColor = "black"

// 2-variant (rabochei variant)
// document.body.style.backgroundColor = "black"




// Задача1. При нажатии на картинку, цвета фона не отрабатывают. Починить!
// Задача2. Создать кнопку <button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]


// let buttonRed = document.querySelector("#red")
// buttonRed.addEventListener("click", function() {
//     document.body.style.background = "red" 
//     // document.body.style.backgroundImage = "none" 
// })
// console.log(buttonRed.innerText)  // Red

// let buttonGreen = document.querySelector("#green")
// buttonGreen.addEventListener("click", function() {
//     document.body.style.background = "green" 
//     // document.body.style.backgroundImage = "none"
// })

// let buttonImg = document.querySelector("#img")
// buttonImg.addEventListener("click", function() {
//     document.body.style.background = "url(./retro.jpg)"   
// })


// let buttonRandom = document.querySelector("#random")
// buttonRandom.addEventListener("click", function () { 
// let x = parseInt(Math.random()*256)
// let y = parseInt(Math.random()*256)
// let z = parseInt(Math.random()*256)
// let color = "rgb("+x+","+y+","+z+")"
// document.body.style.backgroundColor = color;
// })

// let color = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"];
// let index = 0
// let buttonRandom = document.querySelector("#random");
// buttonRandom.addEventListener("click", function () {
       
//         index++;
//         if (index == color.length)
//             index = 0;
//         document.body.style.background = color[index];
//         });
    
// dz-2
// let body = document.querySelectorAll(".item" )
// for( let i = 0; i < body.length; i++) {
//     body[i].addEventListener("click", function() {
//         console.log("на меня кликнули")
//     })
    
// }



// 1. Project10. Buttons. При нажатии на кнопку менять цвет body.
//     У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
//     По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
//     Менять фона body на считанный атрибут id.
//     Добавить кнопку blue и orange. 

// 2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
//     для каждого тега p добавить соотв-ю текст. innerText


// 3. Есть массив arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
// ]
//     В html создаем 3 тега a - <a href=""></a> x3. Для каждого из трех, 
//         добавить link в href и title внутрь тега из массива arr

// 4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
//     Создать тег p с начальным значением - 0. 
//     При клике на buttonPlus увеличивать значение в теге p на 1
//     При клике на buttonMinus уменьшать значение в теге p на 1
//     addEventListener. innerText. 
// */

// DZ-1
// 1-variant
// let buttons = document.querySelectorAll(".item")

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         let id = buttons[i].getAttribute("id")
//         document.body.style.background = id
//         console.log("click", id);
//     })
// }

// 2-variant
// let buttonRed = document.querySelector("#red")
// let idRed = buttonRed.getAttribute("id")

// buttonRed.addEventListener("click", function() {
//     document.body.style.background = idRed   
//     console.log("click", idRed)   
// })
   

// let buttonGreen = document.querySelector("#green")
// let idGreen = buttonGreen.getAttribute("id")

// buttonGreen.addEventListener("click", function() {
//     document.body.style.background = idGreen 
//     console.log("click", idGreen)  
// })

// let buttonBlue = document.querySelector("#blue")
// let idBlue = buttonBlue.getAttribute("id")

// buttonBlue.addEventListener("click", function() {
//     document.body.style.background = idBlue  
//     console.log("click", idBlue)    
// })


// let buttonOrange = document.querySelector("#orange")
// let  idOrange = buttonOrange.getAttribute("id")

// buttonOrange.addEventListener("click", function() {
//     document.body.style.background = idOrange  
//     console.log("click", idOrange)    
// })

// Dz-2
// let text = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
// let p = document.querySelectorAll(".p");

// 1-variant
// for(i=0; i < p.length; i++) {
//     p[i].innerText = text[i]
// }

// 2-variant
// text.forEach(function (textIter, i) {
//     let pIter = p[i]
//     pIter.innerText = textIter;
// });

// 3-variant
// p.forEach(function (p, i) {
//     let textIter = text[i]
//     p.innerText = textIter;
// });



// DZ-3
// arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
// ]

// let a = document.querySelectorAll(".ssilki")
// for(i=0; i < arr.length; i++) {
//     a[i].innerText = arr[i].title
//     a[i].setAttribute("href", arr[i].link)
// }


// let p1 = document.querySelector("p")
// let plus = document.querySelector(".pl")
// let minus = document.querySelector(".mn")

// // 1-variant
// plus.addEventListener("click", toSquare)
// let a = n => n+1;
// function toSquare() {
//    p1.innerText = a(Number(p1.innerText)); 
// }

// // 2-variant
// minus.addEventListener("click", Square)
// // let b = n => n-1;
// function Square() {
//    p1.innerText = Number(p1.innerText) - 1
// }

          
        
        














