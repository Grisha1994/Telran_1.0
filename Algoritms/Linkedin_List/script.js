let list = {
    value: 9,
    next: {
        value: 10,
        next: {
            value: 5,
            next: null
        }
    }
}

const myFunc = (obj) => {
    const arr = new Set();
    let tempSize = 0;
    while (obj != null) {
        tempSize++;
        arr.add(obj.value);
        obj = obj.next;
        if (arr.size !== tempSize) return false

    }
    return true;
}


const ifSame = (status) => status ?  "net petli" : "est petlya";

console.log(ifSame(myFunc(list)));


// const myFunc = (obj) => {
//     const arr = [];
//     while (obj != null) {
//         if (arr.includes(obj.value)) return false
//         arr.add(obj.value);
//         obj = obj.next

//     }
//     return true;
// }

// console.log(
//     myFunc(list) ? "Нет одинаковых value" : "Есть одинаковые value"
// );
