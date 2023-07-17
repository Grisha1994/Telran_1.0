function quickSortRecursive(arr, left = 0, right = arr.length - 1) {
    // Базовый случай: массив состоит из одного элемента или пустой
    if (arr.length <= 1 || left >= right) {
        return arr;
    }

    // Выбираем опорный элемент и разбиваем массив на подмассивы
    let pivotIndex = partition(arr, left, right);

    // Рекурсивно сортируем подмассивы слева и справа от опорного элемента
    quickSortRecursive(arr, left, pivotIndex - 1);
    quickSortRecursive(arr, pivotIndex + 1, right);

    // Возвращаем отсортированный массив
    return arr;
}

// Функция для разбиения массива на подмассивы
function partition(arr, left, right) {
    // Выбираем опорный элемент (в данном случае, последний элемент)
    let pivotValue = arr[right]; // 4
    let pivotIndex = left; // 0

    // Проходим по всем элементам от left до right-1
    for (let i = left; i < right; i++) {
        // Если текущий элемент меньше или равен опорному, меняем его местами с элементом на pivotIndex и увеличиваем pivotIndex на 1
        if (arr[i] <= pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]; //[2, 1, 3, 4, 8, 5, 7, 6]
            pivotIndex++;
        }
    }

    // Меняем местами опорный элемент и элемент на позиции pivotIndex
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

    // Возвращаем индекс опорного элемента
    return pivotIndex; //3
}

let arr = [7, 2, 1, 6, 8, 5, 3, 4];
quickSortRecursive(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]