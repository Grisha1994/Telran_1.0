
    // const root = document.querySelector('#root');
    // const pEl = document.createElement('p');

    // const divEl = document.createElement('div');
    // const spanEL = document.createElement('span');

    // pEl.innerText = 'я параграф из JS';
    // spanEL.innerText = ' я спан, который внутри div'

    // divEl.append(spanEL);
    // root.append(pEl, divEl);

    
        // const root = document.querySelector('#root');
        
        // for (let i = 1; i <= 100; i++){
        //     const pEl = document.createElement('p');
        //     pEl.innerText = i;
        //     root.append(pEl);
        // }
 

// const words = ['слон', 'жираф', 'лошадь', 'енот', 'змея', 'сова'];

// // for (let i = 0; i <= words[i].length; i++){
// //     const pEl = document.createElement('p');
// //     pEl.innerText = words[i];
// //     root.append(pEl);
// // }
//     words.forEach(function(item){
//         const pEl = document.createElement('p');
//         pEl.innerText = item;
//         root.append(pEl);
//     })


const products = [
    {id: 1, title: 'велосипед', price: 5000},
    {id: 2, title: 'ролики', price: 700},
    {id: 3, title: 'самокат', price: 1000},
    {id: 4, title: 'лыжи', price: 1200},
    {id: 5, title: 'сноуборд', price: 1100},
    {id: 6, title: 'скейт', price: 850}
];

const root = document.querySelector('#root');

function create(title, price){
    const container = document.createElement('div');
    const pTitle = document.createElement('p');
    const pPrice = document.createElement('p');

    pTitle.innerText = title;
    pPrice.innerText = price;

    container.append(pTitle, pPrice);
    return container;
}

products.forEach(function({title, price}){
    const newElement = create(title, price);
    root.append(newElement);
})




