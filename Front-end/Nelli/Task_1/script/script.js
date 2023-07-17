// 1. Написать функцию, которая в качестве аргумента принимает
// числовое значение и возвращает это значение, возведенное в квадрат

// function power (num) {
//     return num * num //  или return num ** 2
// }

// console.log(power(3))

// 2. Написать функцию, которая будет принимать два числовых значения
// и возвращать их сумму

// a)
// function power (num1, num2) {
//     return num1 + num2 
// }

// console.log(power(3,4))

// b)
// function power (num1, num2 = 10) {
//     return num1 + num2;
// }

// console.log(power(3,4))
// console.log(power(3))

// 3. Написать функцию, которая принимает строку и возвращает сообщение
//'Hello, <string>!'. Если строка не передана, то возвращать сообщение
//  'Hello, my dear friend!'


function greeting( name = 'my dear friend!') {
    return 'Hello, ' + name
}
    console.log(greeting('Grisha'))
    console.log(greeting())


