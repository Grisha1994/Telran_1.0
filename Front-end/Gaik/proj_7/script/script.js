// for (let i = 0; i <=10; i++) {
//     console.log(arr[i])  
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// const arr = [12, 5, -43, 1, 54, -32, 23];

// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] > 0) {
//     console.log(arr[i])
//    }
    
// }

// function func() {
//     console.log('Hi')
// }

// setInterval(func, 100);

// let a = func;
// a();

// function hendler(callback) {
//     for (let i = 0; i <=10; i++) {
//     callback();
//     }
// }
// hendler(func);

// const arr = [12, 5, -43, 1, 54, -32, 23];

// function hendler(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//      func(arr[i]);
//     }
// }

// function power(arg){
//     console.log(arg ** 2);
// }

// // hendler(arr, console.log);
// // hendler(arr, power);

// arr.forEach(console.log);
// arr.forEach(power);


// const arr = [12, 5, -43, 1, 54, -32, 23];

// function hahdler (arg){
//     if(arg >= 0 ){
//         console.log(arg);
//     }
// }

// Nazvanie function expreshen
// const hahdler = function (arg){
//     if(arg >= 0 ){
//         console.log(arg);
//     }
// }

// arr.forEach(function (arg){
//     if(arg >= 0){
//         console.log(arg);
//     }
// })

// arr.forEach(function (arg){
//     if(arg < 0){
//         console.log(arg * (-1));
//     }
// })

// arr.forEach(function (arg){
//     if(arg < 0){
//         console.log(-arg);
//     }else{
//         console.log(arg);
//     }
// })

// const products = [
//     {id: 1, title: 'велосипед', price: 1200},
//     {id: 2, title: 'ролики', price: 300},
//     {id: 3, title: 'самокат', price: 450},
//     {id: 4, title: 'лыжи', price: 1100}
// ];

// console.log(products);

// for (let i = 0; i < products.length; i++) {
//    console.log(products[i].title)
// }

// products.forEach(function (item){
//     console.log(item.title);
// })

// products.forEach(function (item){
//     if(item.price > 1000){
//         console.log(item.title, item.price)     
//     }
// })

// const result = products.map(function (item){
//      return item.title
// })

// console.log(result);

// const result = products.map(function (item){
//     return {
//         title: item.title,
//         price: item.price
//     }
// })
// console.log(result);

// distructurizacia
// const result = products.map(function ({title, price}){
//     return {
//         title: title,
//         price: price
//     }
// })
// console.log(result);

// sokraschenie sintaksisa
// const result = products.map(function ({title, price}){
//     return {title, price}
// })
// console.log(result);

// ne pravilnii variant
// const result = products.map(function ({title, price}){ 
//     console.log(title, price)
// })
  


// const obj ={
//     a: 12,
//     b: 43,
//     c: 76
// }

// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

// const {a, b ,c} = obj;
// console.log(a, b, c);

// function func({a, b, c}) {
//     console.log(a + b + c);
// }

// func(obj);


// -----------------------------

// Простые методы массивов:
// - мутируют исходный массив
// - не принимают колбэк-функцию

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.push(8); // добавляет в конец массива переданное значение
// numbers.unshift(9); // добавляет в начало массива переданное значение
// numbers.pop(); // удаляет последний элемент из массива
// numbers.shift(); // удаляет первый элемент из массива


// console.log(numbers);

// Сложные методы:
// - принимают колбэк в качестве аргумента
// - не мутируют исходный массив (кроме sort())
  
// const numbers2 = [23, 11, -9, 57, -3, 64];

// const positive_numbers = [];
// numbers2.forEach(function (el){
//     if(el > 0){
//         positive_numbers.push(el)
//     }
// });

// console.log(positive_numbers);

// map() - возвращает новый массив, применяет указанную функцию к 
//каждому элементу массива один раз и возвращает новый массив с 
//измененными элементами. Длина исходного массива = длине нового 
//массива

// filter() - возвращает новый массив, в который попадут только те 
//элементы из исходного массива, которые соответствуют переданному условию


// const pos_numbers = numbers2.map(function(el){
//     if(el > 0){
//        return el
//     }
// })
// console.log(pos_numbers);


// const pos1_numbers = numbers2.filter(function(el){
//     return el > 0
// })
// console.log(pos1_numbers);

// // Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums умноженные на 2

// const nums = [1, 2, 3, 4, 5];

// const doubled_nums = [];
// function doubleNums(){
//   for(let i = 0; i < nums.length; i++){
//     doubled_nums.push(nums[i] * 2)
//   }
// }

// // Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums деленные на 2

// const divided_nums = [];
// function doubleNums(){
//   for(let i = 0; i < nums.length; i++){
//     divided_nums.push(nums[i] / 2)
//   }
// }

// // Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums возведенные в степень 2

// const powered_nums = [];
// function doubleNums(){
//   for(let i = 0; i < nums.length; i++){
//     powered_nums.push(nums[i] ** 2)
//   }
// }


// // Универсальная функция, принимающая колбэк
// function change_nums(array, callback) {
//     for(let i = 0; i < nums.length; i++){
//       array.push(callback(nums[i]))
//     }
//   }
  
//   const div_nums = [];
//   const pow_nums = [];
  
//   function divNums(num){
//     return num / 2
//   }
  
//   function powNums(num){
//     return num ** 2
//   }
  
//   change_nums(div_nums, divNums);
//   change_nums(pow_nums, powNums);
  
//   console.log(div_nums);
//   console.log(pow_nums);
  




