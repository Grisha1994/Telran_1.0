// создать файл data с 3 массивами
// так же в этом файле должна быть функция которая получает массив и возвращает сумму чисел
// импортируйте эти данные и запустите функцию с тремя массивами отдельно 
// результаты работы данной функции вывеси в консоль

export const arr_1 = [5, 6, 2, 21, 17];
export const arr_2 = [51, 16, 12, 2, 7];
export const arr_3 = [15, 61, 22, 11, 27];


export default (arr) => {
    return arr.reduce((acc, item) => acc + item, 0);
}

// export default (arr) => {
//     for (let i = 0; i < arr_1.length; i++) {
//         sum = 0;
//         sum += arr_1[i];
//         console.log(sum);
//     }
// }

