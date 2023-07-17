// const item = document.querySelector("div")

// let itemClass = item.getAttribute("class")
// let itemId = item.getAttribute("id") // null - ne syschestvyuoschiei
// let itemClass1 = document.querySelector("div").getAttribute("class")

// console.log(itemClass1)


// const a = document.querySelector("a")
// let href = a.getAttribute("href")
// console.log(href)


// let p = document.querySelector("p")
// let id = p.getAttribute("id")
// console.log(id)


// let item = document.querySelector("div")

// item.setAttribute("id", "item-1")
// console.log(item.getAttribute("id"))


// let img = document.querySelector("img")
// img.setAttribute("src", "./img/aston_martin.jpeg")

// let img = document.querySelector("img")
// let button1 = document.querySelector("button")

// // button1.addEventListener("click", function () {
// // img.setAttribute("src", "./img/aston_martin.jpeg")
// // })

// function addAttr() {
//     img.setAttribute("src", "./img/aston_martin.jpeg")
// }
// // addAttr()
// button1.addEventListener("click", addAttr)



// let button = document.querySelector(".to")
// button.addEventListener("click", function(){
//     let img = document.querySelector("img")
//     if(img.hasAttribute("src")){
//         img.removeAttribute("src")
//         button.innerText = "добавить картинку"
//     }else{
//         img.setAttribute("src", "./images/Rectangle1.png")
//         button.innerText = "Удалить картинку"
//     }
// })



// let img = document.querySelectorAll("img")
// console.log(img)

// for(i=0; i < img.length; i++) {
//     img[i].setAttribute("src", `./img/img-${i+1}.jpg`)
// }


// let ipt = document.querySelector(".ipt")
// let bth = document.querySelector(".bth")

// function bthCallBack() {
//     ipt.value = "thanks"
//     console.log("click")
//     bth.removeEventListener("click", bthCallBack )
// }
// bth.addEventListener("click", bthCallBack )


// let input = document.querySelector(".square");
// let button = document.querySelector(".action");

// button.addEventListener("click", toSquare)
// let square = n => n * n;

// function toSquare(event) {
// //  let num = Number(input.value);
// //  Number(input.value) = square(num)
//  input.value = square(Number(input.value))
// }


// let input = document.querySelector(".square");
// let off = document.querySelector(".off");
// let on = document.querySelector(".on");

// off.addEventListener("click", disabled)
// on.addEventListener("click", anabled)
// function disabled(event) {
//     input.setAttribute("disabled", true)
    
// }

// function anabled(event) {
//     input.removeAttribute("disabled")
    
// }


// 4) На querySelectorAll
// Задача. Дан HTML код (см. под задачей). Поменяйте содержимое абзацев с классом zzz на их порядковый номер в коде.

// <h2 class="zzz">Заголовок с классом zzz, не поменяется.</h2>
// <p class="zzz">Абзац с классом zzz.</p>
// <p class="zzz">Абзац с классом zzz.</p>
// <p>Просто абзац, не поменяется.</p>
// 'p.zzz'




