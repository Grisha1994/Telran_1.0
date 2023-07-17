function quickSortIterative(arr, left = 0, right = arr.length - 1) {
    // Создаем стек для хранения границ подмассивов, которые нужно отсортировать
    let stack = [];

    // Изначально добавляем в стек границы всего массива
    stack.push(left);
    stack.push(right);

    // Цикл, пока в стеке есть границы подмассивов
    while (stack.length > 0) {
        // Извлекаем из стека границы подмассива
        right = stack.pop();
        left = stack.pop();

        // Выбираем опорный элемент
        let pivotIndex = partition(arr, left, right);

        // Если есть элементы слева от опорного, добавляем их границы в стек
        if (pivotIndex - 1 > left) {
            stack.push(left);
            stack.push(pivotIndex - 1);
        }

        // Если есть элементы справа от опорного, добавляем их границы в стек
        if (pivotIndex + 1 < right) {
            stack.push(pivotIndex + 1);
            stack.push(right);
        }
    }

    // Возвращаем отсортированный массив
    return arr;
}

// Функция для разбиения массива на подмассивы
function partition(arr, left, right) {
    // Выбираем опорный элемент (в данном случае, последний элемент)
    let pivotValue = arr[right];
    let pivotIndex = left;

    // Проходим по всем элементам от left до right-1
    for (let i = left; i < right; i++) {
        // Если текущий элемент меньше или равен опорному, меняем его местами с элементом на pivotIndex и увеличиваем pivotIndex на 1
        if (arr[i] <= pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    // Меняем местами опорный элемент и элемент на позиции pivotIndex
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

    // Возвращаем индекс опорного элемента
    return pivotIndex;
}

let arr = [7, 2, 1, 6, 8, 5, 3, 4];
quickSortIterative(arr);
console.log(arr);