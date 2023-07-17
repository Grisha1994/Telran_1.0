// используя map формировать массив в котором все
// числа меньше 10 должны быть увеличены на 10

// результат
const numbers = [12, 4, 32, 5, 4, 2, 65]

// const num = numbers.map(function (el){
//     if(10 > el){
//          el += 10;
//     }
//     return el
// })
// console.log(num);


// const num = numbers.filter(function (el){
//    return el % 2 === 0
// })
// console.log(num);


// const num = numbers.reduce(function (acc, el){
//     if(el % 2 === 0){
//         acc += el
//     }
//     return acc  
//  }, 0);
//  console.log(num);

//  const num = numbers.reduce(function (acc, el){
//     return acc + ( el % 2 === 0 ? el : 0)
//  }, 0);
//  console.log(num);

// const products = [
//     {id: 1, title: 'велосипед', price: 5000, discount: 12},
//     {id: 2, title: 'ролики', price: 1000, discount: 0},
//     {id: 3, title: 'самокат', price: 900, discount: 5},
//     {id: 4, title: 'лыжи', price: 1200, discount: 0},
//     {id: 5, title: 'сноуборд', price: 1500, discount: 10}
// ]

// const product = products.map(function(el){ 
//     return {
//         title: el.title,
//         price: el.price - el.price * el.discount / 100
//     }
// })
// console.log(product);

// const product = products.map(function({title, price, discount}){ 
//     return {
//         title,
//         price: price - price * discount / 100
//     }
// })
// console.log(product);

// const product = products
//     .filter(function({price}){ 
//         return price < 1200
//     })
//     .map(function({price}){ 
//     return price
// })
// console.log(product);

// const product = products
//     .filter(function({price}){ 
//         return price < 1200
//     })
//     .map(function({title, price, discount}){ 
//         return {
//             title,
//             price: price - price * discount / 100
//     }
// });
// console.log(product);

// localStorage.setItem('testKey', 'testValue');

// const result = localStorage.getItem('testKey');
// console.log(result);

const button = document.querySelector(".btn");
let count = +localStorage.getItem('counter') ?? 0;
// if(count === null){
//     count = 0;
// }
// count = count === null? 0 : count;

button.innerText = count; 

button.addEventListener("click", function(){
   count = count + 5;
   button.innerText = count; 
   localStorage.setItem('counter', count);
})