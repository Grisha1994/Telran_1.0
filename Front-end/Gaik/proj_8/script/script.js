// const numbers = [12, 435, 1, 32, 545, 21, 555];

// numbers.forEach(function (num){
//  if (num < 100 ){
//     console.log(num)
//  }  
// })

// numbers.forEach(function (num){
//     if (num % 2 === 0 ){
//        console.log(num)
//     }  
//    })


// используя метод map сформируйте новый массив на основе массива numbers 
// если число в массиве numbers меньше 100 то к ему нужно прибавить 100

// [112, 435, 101, 132, 545, 121, 555]

// 1-variant
// const result = numbers.map(function (item){
//         if( item < 100 ){
//           item += 100
//         } 
//         return item
//     })
// console.log(result);


// 2-variant
// const result = numbers.map(function (item){
//         if( item < 100 ){
//          return item +100
//         } 
//         return item
//     })
// console.log(result);


// используя метод map сформировать массив из имен пользователей

// const users = [
//     {
//         id: 1,
//         name: 'Анатолий',
//         lastname: 'Ушанов',
//         age: 30
//     },
//     {
//         id: 2,
//         name: 'Максим',
//         lastname: 'Грибов',
//         age: 28
//     },
//     {
//         id: 3,
//         name: 'Антон',
//         lastname: 'Куликов',
//         age: 27
//     },
//     {
//         id: 4,
//         name: 'Юрий',
//         lastname: 'Митрофанов',
//         age: 45
//     }
// ];

// 1-variant
// const result = users.map(function (item){
//     return item.name   
    
// })
// console.log(result);


// 2-variant
// const result = users.map(function ({name}){
//     return name   
    
// })
// console.log(result);

// const numbers = [12, 435, 1, 32, 545, 21, 555];

// const result = numbers.filter(function(item){
//     if(item % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(result);

// -----------pravilnii variant
// const result = numbers.filter(function(item){
//     return item % 2 === 0
// })
// console.log(result);

//сформировать массив, который состоит из объектов с данными пользователей, которые младше 30

// const result = users.filter(function ({age}){
//     if( age > 30)   {
//         return users
//     }
// })
// console.log(result);

// ----------pravilnii variant
// const result = users.filter(function ({age}){
//     return age < 30   
// })
// console.log(result);


// 1-variant
// const result = users.filter(function ({age}){
//     return age < 30   
// })

// const result_1 = result.map(function(item){
//     return {name: item.name, 
//             lastname: item.lastname}
// })
    
//-----------sokraschennii variant
// const result_1 = result.map(function({name, lastname}){
// return {name, lastname}
// })
// console.log(result_1);

// 2-variant (sokraschennii variant)
// const result = users
//     .filter(function ({age}){
//         return age < 30   
//     })
//     .map(function({name, lastname}){
//     return {name, lastname}
// })
// console.log(result);

// const numbers = [45, 2, 6, 3];
// const result = numbers.reduce(function(acc, item){
//     return acc + item
// }, 0);
// console.log(result);

// const numbers = [45, 2, 6, 3];
// const result = numbers.reduce(function(acc, item){
//      if( acc > item ){
//         return item
//      }else{
//         return acc
//      }
// });


// const numbers = [45, 6, 3, 2, 6];
// const result = numbers.reduce(function(acc, item){
//     return acc * item
// });
// console.log(result);

// найти сумму amount
// const data = [
//     {id: 1, amount: 12000},
//     {id: 2, amount: 13000},
//     {id: 3, amount: 14000},
//     {id: 4, amount: 15000},
//     {id: 5, amount: 16000}
// ];

// const result = data.reduce(function(acc, item){
//     return acc + item.amount
// }, 0);
// console.log(result);

// const result = data.reduce(function(acc, {amount}){
//     return acc + amount
// }, 0);
// console.log(result);



//--------TASK

// Дан массив

// const products = ['apple', 'orange', 'pineapple', 'lemon', 'lime', 'kiwi'];

// 1. Сформировать новый массив с продуктами, название которых длиннее 5 символов
// const result = products.filter(function(item){
//     return item.length >= 5 
// })
// console.log(result);


// 2. Сформировать новый массив с продуктами, название которых начинается на букву l
// const result = products.filter(function(item){
//     return item[0] === 'l'
// })
// console.log(result);


// 3. Сформировать новый массив с продуктами, названия продуктов должны быть написаны в верхнем регистре
// const result = products.map(function(item){
//         return item.toUpperCase();
// });
// console.log(result);


// 4. Сформировать новый массив с продуктами, названия продуктов должны начинаться с большой буквы
// const result = products.map(function(item){
//     return item[0].toUpperCase() + item.slice(1);
// });
// console.log(result);

// const result = products.map(function(item){
//     return item[0] + item[1].toUpperCase() + item.slice(2);
// });
// console.log(result);


// Дан массив с пользователями

const users = [
    {
      id: 1,
      name: 'Anton',
      age: 44,
      country: 'Germany'
    },
    {
      id: 2,
      name: 'Irina',
      age: 23,
      country: 'Spain'
    },
    {
      id: 3,
      name: 'Olga',
      age: 14,
      country: 'Poland'
    },
    {
      id: 4,
      name: 'Oleg',
      age: 23,
      country: 'France'
    }
  ]

// 5. Сформировать новый массив с пользователями, чье имя начинается на букву O (регистр может быть любым)
// const result = users.filter(function({name}){
//     return name[0] === 'O' || name[0] === 'o'                  
// });

// const result_1 = users.filter(function({name}){
//     return name[0].toUpperCase() === 'O'                   
// });
// console.log(result);
// console.log(result_1);

// const result = users.map(function({name, age, country}){
//     return `${name}, ${age} (${country})`             
// });
// console.log(result);

// 7. Сформировать новый массив с информацией о совершеннолетних пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'
// ['Anton, 44 (Germany)', 'Irina, 23 (Spain)', ...]
const result = users

    .filter(function({name, age, country}){
    if( age > 18){
    return {name, age, country}  
    }
    })  

    .map(function({name, age, country}){
        return `${name}, ${age} (${country})`             
    });
console.log(result);

  