const productsContainer = document.querySelector('#root');


function cardsRender(products_data){ 
    
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    const rateElem = document.createElement('p');

    titleElem.innerText = products_data.title;
    priceElem.innerText = products_data.price;
    rateElem.innerText = products_data.rating.rate;
    productsContainer.innerText = '';

    cardElem.classList.add('item');
    
    cardElem.append(titleElem, priceElem, rateElem);
    productsContainer.append(cardElem);

  }

function getProducts(id, callback){
    const link = `https://fakestoreapi.com/products/${id}`;
    fetch(link)
    .then(function(res){
        return res.json()
    })
    
    .then(function(json){
        console.log(json);
        callback(json);

    })
    
    }

    
    getProducts(7, cardsRender);
    getProducts(1, cardsRender);
    getProducts(2, cardsRender);
    getProducts(3, cardsRender);
    // getProducts(5, function (data){
    //     console.log(data.title);
    // });

      


















// function handler(){
//     console.log('handler works!')
// }
// handler();

// const a = handler;
// a();

// function calculation(a, b, callback){
//     return callback(a, b);
// }

// const result = calculation(12, 4, function(a, b){
//     return a / b
// })

// console.log(result);

// const arr = [1,2,3,4,5,6];

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
        
//     }  
// }

// forEach(arr, function(el){
//     console.log(el **2);
// });

// const arr = [1,2,3,4,5,6];

// function map(arr, callback){
//     const arr1 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr1.push(callback(arr[i]));
                
//     }  
//     return arr1;
// }

// const newArr = map(arr, function(el){
//     return el ** 2;
    
// });

// console.log('+-', newArr);

// const arr = [1,2,3,4,5,6];

// function filter(arr, callback){
//     const arr1 = [];
//     for (let i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             arr1.push(arr[i]);
//         }         
//     }  
//     return arr1;
// }

// const newArr = filter(arr, function(el){
// return el > 4  
// });

// console.log(newArr);

// const arr = [1,2,3,4,5,6];

// function find(arr, callback){
    
//     for (let i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             return arr[i]
//         }     
//     }         
// }  


// const num = find(arr, function(el){
// if(el / 2 === 1){
//     return el;
// }
// });

// console.log(num);
