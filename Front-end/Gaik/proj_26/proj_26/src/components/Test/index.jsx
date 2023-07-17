import React from 'react'

export default function Test() {

    const products = [
        {id: 1, title: 'велосипед', price: 4300, discount: 5, marks: [5, 4, 4, 5, 4, 5]},
        {id: 2, title: 'ролики', price: 400, discount: 10, marks: [2, 3, 2]},
        {id: 3, title: 'самокат', price: 500, discount: 7, marks: [4, 4, 3, 4, 5]},
        {id: 4, title: 'лыжи', price: 2300, discount: 5, marks: [3, 3, 4, 3, 2]},
        {id: 5, title: 'коньки', price: 720, discount: 12, marks: [3, 4, 4, 4, 4]},
        {id: 6, title: 'сноуборд', price: 1200, discount: 5, marks: []}
      ];
    

    //   используя методы массивов сформируйте массив объектов со свойствами title и price
    // const result = products.map(({title}) => title);

    //   используя методы массивов сформируйте массив объектов со свойствами title и price (цена со скидкой)
    // const result = products.map(({title, price}) => ({title, price}));

    //   сформировать массив из товаров, у которых скидка больше либо равна 10
    // const result = products.map(({title, price, discount}) => ( {title, price: price - price / 100 * discount}));

    //   сформировать массив из названий товаров (строки в массиве), у которых скидка больше либо равна 10
    // const result = products.filter(({discount}) => discount >= 10);
    
    // найти общую сумму товаров без учета скидки
    // const result = products
    //     .filter(({discount}) => discount >= 10)
    //     .map(({title}) => title);

    // найти общую сумму товаров с учетом скидки
    // const result = products.reduce((acc, {price, discount}) => acc + price - price / 100 * discount, 0);


    // найти общую сумму товаров без учета скидки у тех товаров, у которых скидка 5 процентов
    //   const result = products
    //     .filter(({discount}) => discount === 5)
    //     .reduce((acc, {price}) => acc + price, 0);

    // найти общую сумму товаров c учетом скидки у тех товаров, у которых скидка 5 процентов
    // const result = products
    // .filter(({discount}) => discount === 5)
    // .reduce((acc, {price, discount}) => acc + (price - price / 100 * discount), 0);

    //   сформировать массив из объектов со свойствами title и avgMark (средняя оценка)
    // const result = products.map(({title, marks}) => (
    //     {
    //         title,
    //         avgMarks: (marks.reduce((acc, item) => acc + item, 0) / marks.length || null)
    //     }
    // ));

    // console.log(result);

    //   найти среднюю оценку среди всех товаров
    // const sum = products.reduce((acc, {marks}) => acc + marks.reduce((acc, item) => acc + item, 0) ,0)
    // const length = products.reduce((acc, {marks}) => acc + marks.length ,0)

    // console.log(sum / length);

    //найти товар, у которого больше всего оценок
    //  const result = products.reduce((acc, item) => acc.marks.length > item.marks.length ? acc : item);

    // console.log(result);

    

  return (
    <div>Test</div>
  )
}
