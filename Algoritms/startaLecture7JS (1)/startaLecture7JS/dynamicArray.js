class DynamicArray {
    constructor() {
        this.array = [];
        this.length = 0;
    }

    // Добавление элемента в конец массива
    push(element) {
        this.array[this.length] = element;
        this.length++;
        return this.length;
    }

    // Получение элемента по индексу
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        return this.array[index];
    }

    // Удаление последнего элемента массива
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        let removedElement = this.array[this.length];
        delete this.array[this.length];
        return removedElement;
    }

    // Получение длины массива
    size() {
        return this.length;
    }

}

let arr = new DynamicArray();
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr.get(1)); // 2
console.log(arr.pop()); // 3
console.log(arr.size()); // 2