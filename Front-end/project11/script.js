// alert("Hello world")
// console.log("Hello Arsen")
// let name = prompt("vvedite svoe imya")
// alert(name)

// let name = prompt("vvedite svoe imya")
// alert(name)
// console.log(name)

// let userName = "Arsen"
// let filteredUserProduct = "Product"

// let name = prompt("vvedite svoe imya")
// console.log("Hello," + name)

// let isRaining = false
// if(isRaining == true){
//     alert("vozmi zont")
// }

// else{
//     alert("pogoda solnechnaya")
// }

// let degree = 26
// if(degree > 15) {
//     alert ("vihodi v futbolke")
// } 
// else if(degree < 3) {
//     alert("naden kyrtky")
// }
// else {
//     alert("naden kofty")
// }
// let price = 700

//  if(price >= 700) {
//     alert("20")
//     }

// else if(price > 500) {
//     alert("15")
// }

// else {
//     alert("net skidki")
// }

// let r = 40
// let g = 50
// let b = 200

// let common = "rgb(" + r + "," + g + "," + b + ")"
// console.log(common);

// let str = `rgb(${r}, ${g}, ${b})`
// console.log(str)

// let n1 = +prompt("");
// let n2 = +prompt("");

// if (n1 > n2) {
//   console.log(n1);
// } else if (n1 == n2) {
//   console.log("ravni");
// } else {
//   console.log(n2);
// }

// <<obiekt>>
// let Book = {
//     nazvanie: "Vedmak",
//     glavy: "11",
//     god napisania : "2000",
//     tom : "3",
//     avtor: "sabkovskyi",
// }


// let numbers = [0, 1, 2, 3, 4]
// console.log(numbers)

// numbers.push(5)
// console.log(numbers)


// let num1 = +prompt("enter num1");
// let num2 = +prompt("enter num2");
// let num3 = +prompt("enter num3");

// let num = [100, 500];

// num.push(num1, num2, num3);
// console.log(num);


// console.log(num[0])
// console.log(num[1])
// console.log(num[2])

// for(let i = 1; i <= 10000; i++) {
//     console.log(100)
// }

// for (let i = 0; i <= 100; i++) {
//   if (i > 30) {
//     console.log("bolshe", i);
//   } else {
//     console.log(i);
//   }
// }

// ДЗ.1. Есть массив [-10, 50, 60, 0, -100, 125]. Вывести в консоль только положительные+ числа.
// ДЗ.2. Есть массив [11, 12, 15, 17, 18, 25, 26]. Вывести в консоль только четные числа. % - вычислить остаток от деления. 10 % 2 = 0. 11 % 2 = 1
// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60]. Найти сумму чисел в массиве и вывести их в консоль.let sum =  sum + arr[i]
// ДЗ.4. Есть массив [-10, 50, 60, 0, -100, 125]. Найти произведение отрицательных чисел

/* ДЗ.5
    Запросить 10 чисел. 
    let num1 = +prompt("enter num 1")
    let num2 = +prompt("enter num 2")
    let num3 = +prompt("enter num 3")

    let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]
    nums.push(num1, num2, num3)
    console.log(nums);
*/


// dz-1
// let num = [-32, -51, -60, -78, -105, 14, 10]
// for(let i = 0; i <num.length; i++) {
//     if (num[i] >= 0) {
//         console.log(num[i]);
//       } 
// }

// dz-2
// let num = [32, 51, 60, 78, 105, 14, 10]
// for(let i = 0; i <num.length; i++) {
//     if (num[i] % 2 == 0) {
//         console.log(num[i]);
//       }
// }

// dz-3
// let num = [32, 51, 60, 78, 105, 14, 10];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   if (sum += num[i]) {
//     console.log(sum);
//   }
// }

// dz-4
// let num = [-10, 50, 60, 0, -100, 125]
// let sum = 1;
// for (let i = 0; i < num.length; i++) 
//     if (num[i] < 0) {
//      sum *= num[i] 
// }
// console.log(sum);

// dz-5

// let nums = [100, 500]

// for (let i = 0; i < 10; i++) {
//     let num = +prompt("")
//     num.push(num)
// }
//     console.log(nums)

// let laptop = {
//     color : "black",
//     mark : "Aser",
//     model: "445456GG",
//     size : "15.6",
//     tech : {
//         ozu : "16GB",
//         proccessor : "Intel i7",
//         videocard : "nvidia"
//     },
//     price : 5000
// }

// console.log(`<p>${laptop.color}</P>`)

// console.log(`<div>
// <h1>${laptop.model}<h1>
// <p>${laptop.color}</p>
// <p>${laptop.price}</p>
// </div>`)


// let laptops = [
//     {
//         color : "black",
//         mark : "Aser",
//         model: "445456GG",
//         size : "15.6",
//         tech : {
//             ozu : "16GB",
//             proccessor : "Intel i7",
//             videocard : "nvidia"
//         },
//         price : 5000
//     },

//     {
//         color : "with",
//         mark : "Asus",
//         model: "ghh565",
//         size : "17",
//         tech : {
//             ozu : "8GB",
//             proccessor : "Intel i5",
//             videocard : "msi"
//         },
//         price : 3000
//     }
// ]

// console.log(`
//     <div>
//         <h1>${laptops[0].price}</h1>
//         <p>${laptops[0].mark}</p>
//         <p>${laptops[0].color}</p>
//     </div>
//     <div>
//         <h1>${laptops[1].price}</h1>
//         <p>${laptops[1].mark}</p>
//         <p>${laptops[1].color}</p>
//     </div>
// `)


// let instaPosts = [
//   {
//     title: "My one foto",
//     descr: "Foto bilo sdelano v Berline",
//     author: "arsen",
//     likes: 100,
//     img: "https://img1.jpg",
//   },

//   {
//     title: "Super foto",
//     descr: "Foto bilo sdelano v Alpah",
//     author: "ruslan",
//     likes: 222,
//     img: "https://img2.jpg",
//   },

//   {
//     title: "Foto",
//     descr: "Foto Gemalai",
//     author: "artyr",
//     likes: 256,
//     img: "https://img3.jpg",
//   },
//   {
//     title: "My foto super ",
//     descr: "Foto Tailand",
//     author: "artyr",
//     likes: 298,
//     img: "https://img4.jpg",
//   },
// ];

// for (let i = 0; i < instaPosts.length; i++) {

//     if (instaPosts[i].author == "artyr" || instaPosts[i].author == "arsen" )

// {
//   console.log(`
//     <div class="insta-post">
//         <h1>${instaPosts[i].title}</h1>
//         <p>${instaPosts[i].descr}</p>
//         <p>${instaPosts[i].author}</p>
//         <p>${instaPosts[i].likes}</p>
//         <img src="${instaPosts[i].img}" alt="foto v inste">
//     </div>
// `);
// }
// }

// Задача 1. Вывести в консоли:
// а) все ноутбуки. Лутше в html.
// б) все ноутбуки, цена которых больше 40000
// в) Посчитать сумму цен всех ноутбуков. 

// let laptops = [

//     {
//         mark : "Acer",
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         price : 52000
//     }
// ]

// DZ-1

// for (let i = 0; i < laptops.length; i++) {
//     console.log(`
//     <h1>${laptops[i].mark}</h1>
//     `)
// }

// for (let i = 0; i < laptops.length; i++) {
//     if (laptops[i].price > 40000)
//     console.log(`
//     <h1>${laptops[i].mark}</h1>
//     `)
// }

// let sum = 0
// for (let i = 0; i < laptops.length; i++) {
//      sum += laptops[i].price
// }
//     console.log(`
//     <h1>${sum}</h1>
//     `)
    



// // Задача.2
// // а) Вывести все ноутбуки, у которых есть категория "laptop"
// // б) Вывести все ноутбуки, у которых категория "premium"
// // в) Вывести все ноутбуки, у которых категория "tech"

// let laptopsSecond = [
//     {
//         mark : "Acer",
//         category : ["laptop", "tech"],
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         category : ["notebook", "tech"],
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         category : ["computer", "premium"],
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         category : ["computer", "tech"],
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         category : ["notebook", "premium"],
//         price : 52000
//     }
// ]

// // // for (let i = 0; i < laptopsSecond.length; i++) {
// // //     if (laptopsSecond[i].category[i] == "laptop")
// // //     console.log(`
// // //     <h1>${laptopsSecond[i].mark}</h1>
// // //     `)
// // // }

// for (let i = 0; i < laptopsSecond.length; i++) {
   
//     for (let j = 0; j < laptopsSecond[i].category.length; j++) {
//         if ( laptopsSecond[i].category[j] == "tech")
    
//     console.log(`
//     <h1>${laptopsSecond[i].mark}</h1>
//     `)
// }
// }


// for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let x = 0; x < laptopsSecond[i].category.length; x++) {
//         if (laptopsSecond[i].category[x] == "laptop") {
//             console.log(`
//                     <div class="laptops">
//                         <h1> laptop </h1>
//                         <p>Mark: ${laptopsSecond[i].mark}</p>
//                         <p>category:  ${laptopsSecond[i].category}</p>
//                         <p>price:  ${laptopsSecond[i].price}</p>
//                     </div>
//             `)
//         }
//     }

// }

// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.

// let laptops_third = []

// for (let i = 0; i < 3; i++) {
//     mark1 = prompt("введи марку ноута")
//     price1 = +prompt("введи цену ноута")
//     laptops_third.push({mark : mark1, price : price1})

// }
// console.log(laptops_third)

// // Задача 4. 
// // У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// // Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// // На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене


// let laptopsSecond1 = [
//     {
//         mark : "Acer",
//         category : ["laptop", "tech"],
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         category : ["notebook", "tech"],
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         category : ["computer", "premium"],
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         category : ["computer", "tech"],
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         category : ["notebook", "premium"],
//         price : 52000
//     }
// ]

// let name = prompt("Введите название ноутбука который вы ищите");
// let cena = +prompt("Введите приемлемую цену для вас");

// for (let i = 0; i < laptopsSecond1.length; i++) { 
//     if (laptopsSecond1[i].mark == name && laptopsSecond1[i].price <= cena ) {
//         console.log(`
//         <div>
//         <p>mark:${laptopsSecond1[i].mark} </p>
//         <p>category:${laptopsSecond1[i].category} </p>
//         <p>price:${laptopsSecond1[i].price} </p>
//         </div>
//         `);
//     }
// }



// let laptops_third = []

// for (let i = 0; i < 3; i++) {
//     mark1 = prompt("введи марку ноута")
//     price1 = +prompt("введи цену ноута")
//     laptops_third.push({mark : mark1, price : price1})

// }
// console.log(laptops_third)


// let arr = []
// for (let i = 0; i < 10; i++) {
//      arr.push({name:'Alex'})
// }
// console.log(arr);

// let arr = [1, 2, 4, -40, -3, 87, 0, -5, 18, 12]
// let dia_arr = []
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i]>=0 && arr[i]<10) {
//         dia_arr.push(arr[i])
//     }
// }
// console.log(dia_arr)


// let arr = [1, 2, 4, -40, -3, 87, 0, -5, 18, 12]
// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum)


// let arr = [1, 2, 4, "false", -40, "true", -3, 87, 0, {}, -5, 18, 12]
// let posSum = 0
// let negSum = 0
// let rest = []
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "number"){
//     if(arr[i]>0) 
//     posSum += arr[i];
//     else 
//     negSum +=arr[i];   
// } else {
//     rest.push(arr[i])
// }
// }
// let arr1 = [posSum, negSum]
// console.log(arr1, rest)


// let arr = [1, 2, 4, "false", -40, "true", -3, 87, 0, {}, -5, 18, 12]
// let posSum = 0
// let negSum = 0
// let rest = []
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === "number" && arr[i]>0) { 
//         posSum += arr[i];
//     } else if (typeof arr[i] === "number" && arr[i]<0) {
//         negSum +=arr[i];  
//     } else {
//         rest.push(arr[i])
//     }
// }
// let arr1 = [posSum, negSum]
// console.log(arr1, rest)

// let arr = [5, 2, 4, -3, 8, 7, 0, -5, 18, 12];
// let sum = 0
// for(let i = 0; i < arr.length; i++) {
//         const iterElement = arr[i];
//         sum += iterElement;
//         if(sum > 10) {
//             console.log(`sum > 10 at ${i+1} iteration`)
//         }
// }


// let arr = [
//     {'salary':'1000','name':'alex'},
//     {'salary':'500','name':'ivan'},
//     {'salary':'200','name':'petr'},
//     ]   
//     sum = 0 
// for(let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i].salary)
// }
// console.log(sum)

// let arr = [
//     {'salary':'1000','name':'alex'},
//     {'salary':'500','name':'ivan'},
//     {'salary':'200','name':'petr'},
//     ]   
//     sum = 0 
// for(let i = 0; i < arr.length; i++) {
//     salary > Number(arr[i].salary)
// }
// console.log(salary)





// let arr = [
//     {'salary':'1000',
//      'name':'alex'
//     },
//     {'salary':'500',
//      'name':'ivan'
//     },
//     {'salary':'100',
//      'name':'petr'
//     }
//     {'salary':'800',
//      'name':'petr'
//     }
//     {'salary':'600',
//      'name':'petr'
//     }
// ]

// найти самую большую и самую маленькую зарплату

// let sum = 0
// sum += Number(arr[i].salary)

// let max = 0

// for (let i = 0; i <arr.length; i++) {
//     if(max < arr[i].salary){
//     max = Number(arr[i].salary)
//     } 
// }
//     // console.log(max);

//     let min = 0
//     for (let i = 0; i <arr.length; i++) {
//         if(max > arr[i].salary) {
//         min = Number(arr[i].salary)
//         } 
//     }
//     console.log(min);









// function sum(a, b) {
//     return a + b
// }

// function mult(a, b) {
//     return a * b
// }

// console.log(sum(20, 25))

// console.log(sum(100, 200))

// function calc() {
//     let num = +prompt("vvedite chislo")
//     // let square = num * num
//     return mult(num, num)
// }
// console.log(calc())

// function power(a, b) {
//     return Math.pow(a, b) + a
    
// }

// console.log(power(5, 2))

// 1-variant
// function greeting(name) {
//     // return  "Hello " + name
//     return  `Hello ${name}`
// }   
// console.log(greeting("Asus"))

// 2-variant
// function greeting(name) {
//     return "Hello " + name
// }
// let name = prompt("Enter your name")
// console.log(greeting(name));

// 1-variant
// const quarterOf = (month) => {
//     if(month <= 3) {
//       return 1
//     } 
//     if(month <= 6) {
//         return 2
//     }
//     if(month <= 9) {
//         return 3
//     }
//     if(month <= 12) {
//         return 4
//     }
// }
// console.log(quarterOf(4))

// 2-variant
// const quarterOf = (month) => {
//     if(month <= 3) {
//       return 1
//     } 
//     if(month <= 6) {
//         return 2
//     }
//     if(month <= 9) {
//         return 3
//     }
//     if(month <= 12) {
//         return 4
//     }
// }
// let month = prompt("chislo")
// console.log(quarterOf(month))

// 1-variant
// function num(number) {
//     if(number >= 50) {
//         return "Bolche " + number
//     } else { 
//         return number
//     } 
// }
// console.log(num(40))

// 2-variant
// function num(number) {
//     if(number > 50) {
//         return console.log("Больше", number)
//     }
//     console.log(number)
// }
// num(56)


// ДЗ.
//     Задача1. Написать функцию, которая аргументами получается два числа и возвращает большее из них.
//     Задача2. Написать функцию, которая принимает аргументом число(больше 0)
//     и возвращает массив чисел от 0 до этого числа


function num(a, b) {
    if(a > b) {
        return console.log(a)
    }
    console.log(b)
}
num(32, 20)



