// 1. Написать функцию, которая принимает число и возвращает это число умноженное на 2

// Function declaration (через function)

console.log(multTwo(9));

function multTwo(num){
  return num * 2
}

// Arrow function (стрелочная функция)


const multTwo_arrow = num => num * 2;

console.log(multTwo_arrow(8));

// 2. Написать функцию, которая будет принимать 2 аргумента. Если сумма аргументов больше или равна 10, то вернуть строку 'more than 10', а если меньше 10 - 'less than 10'

const getMessage = (num1, num2) => {
  if(num1 + num2 >= 10){
    return 'more than 10'
  } else {
    return 'less than 10'
  }
}

const getMessage1 = (num1, num2) => num1 + num2 >= 10 ? 'more than 10' : 'less than 10';


// console.log(getMessage1(5, 7)); // 'more than 10'
// console.log(getMessage1(1, 2)); // 'less than 10'