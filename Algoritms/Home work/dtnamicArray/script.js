// Допишите реализацию динамического массива с урока. Так чтобы он содержал в себе следующий набор методов:
// DynamicArray() - конструктор по умолчанию
// DynamicArray(capacity) - конструктор создающий массив определенного размера
// add(data) - добавляет в конец
// remove() - удаляет последний
// removeAt(index) - удаляет по индексу
// growSize() - увеличивает размер
// set(index, data) - изменяет элемент
// clean() - удаляет все элементы
// contains(data) - проверяет существует ли элемент
// isEmpty() - вернет false, если в структуре есть элемент


// DynamicArray() - конструктор по умолчанию
class DynamicArray {
    // DynamicArray(capacity) - конструктор создающий массив определенного размера
    constructor(capacity = 16) {
    this.capacity = capacity;
    this.array = new Array(capacity);
    this.length = 0;
    }
    
    // add(data) - добавляет в конец
    add(data) {
    if (this.length >= this.capacity) {
    this.growSize();
    }
    
   
    this.array[this.length] = data;
    this.length++;
    }
    
    // remove() - удаляет последний
    remove() {
    if (this.length === 0) {
    throw new Error("Массив пуст (Array is empty)");
    }
    
    this.length--;
    const removed = this.array[this.length];
    this.array[this.length] = null; // чтобы избежать утечки памяти
    return removed;
    }
    
    // removeAt(index) - удаляет по индексу
    removeAt(index) {
    if (index < 0 || index >= this.length) {
    throw new Error("Индекс выходит за границы (Index out of bounds)");
    }
    
   
    const removed = this.array[index];
    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.array[this.length] = null; // чтобы избежать утечки памяти
    this.length--;
    return removed;
    }
    
    // growSize() - увеличивает размер
    growSize() {
    const newCapacity = this.capacity * 2;
    const newArray = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
    newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.capacity = newCapacity;
    }
    
    // set(index, data) - изменяет элемент
    set(index, data) {
    if (index < 0 || index >= this.length) {
    throw new Error("Индекс выходит за границы (Index out of bounds)");
    }
    
  
    this.array[index] = data;
    }
    
    // clean() - удаляет все элементы
    clean() {
    for (let i = 0; i < this.length; i++) {
    this.array[i] = null;
    }
    this.length = 0;
    }
    
    // contains(data) - проверяет существует ли элемент
    contains(data) {
    for (let i = 0; i < this.length; i++) {
    if (this.array[i] === data) {
    return true;
    }
    }
    return false;
    }
    
    // isEmpty() - вернет false, если в структуре есть элемент
    isEmpty() {
    return this.length === 0;
    }
    }


    let arr = new DynamicArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    arr.add(4);
    arr.add(5);
    arr.add(6);
    arr.add(7);
    arr.add(8);
    arr.add(9);
    arr.add(10);
    console.log(arr.array);
    const div = document.querySelector('div');
    div.append(arr.array);
    arr.remove()
    arr.remove()
    arr.remove()
    console.log(arr.array);
    div.append(arr.array);
    div.append(" ");
    arr.removeAt(2)
    console.log(arr.array);
    div.append(arr.array);
    div.append(" ");
    arr.growSize();
    console.log(arr.array);
    div.append(arr.array);
    arr.set(3, 9)
    console.log(arr.array);
    div.append(arr.array);
    console.log(arr.contains(4));
    console.log(arr.contains(3));
    console.log(arr.isEmpty(1));
    arr.clean();
    console.log(arr.array);



    function countLetters(str) {
        const letterCount = {};
        for (let i = 0; i < str.length; i++) {
          if (letterCount[str[i]]) {
            letterCount[str[i]]++;
          } else {
            letterCount[str[i]] = 1;
          }
        }
        return letterCount;
      }
      
      const str = "абракадабра";
      
      // const letterCounts = countLetters(str);
      // for (const letter in letterCounts) {
      //   console.log(`${letter}: ${letterCounts[letter]}`);
      // }

    console.log(countLetters(str));