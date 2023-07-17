// const peoples = [
//     {
//       first_name: 'Ivan',
//       last_name: 'Ivanov',
//       age: 20,
//       city: 'Moscow',
//       country: 'Russia'
//     },
  
//     {
//       first_name: 'Petr',
//       last_name: 'Petrov',
//       age: 12,
//       city: 'Berlin',
//       country: 'Germany'
//     },
  
//     {
//       first_name: 'irina',
//       last_name: 'Alexandrova',
//       age: 46,
//       city: 'Paris',
//       country: 'France'
//     },
  
//     {
//       first_name: 'Denis',
//       last_name: 'Sokolov',
//       age: 30,
//       city: 'Rome',
//       country: 'Italy'
//     }
//   ];

// 1. Сформируйте массив строк - каждая строка включает в
//себя информацию по каждому человеку в следующем 
//формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

// const people = peoples.map(function({first_name, last_name, city, country}){
//       return `${first_name} ${last_name} (${city}, ${country})`
      
// });

// console.log(people);

// const people = peoples.filter(function({first_name, last_name, age, city, country}){
//   return first_name[0].toUpperCase() === 'I'    
// });

// console.log(people);

// const people = peoples.filter(function(el){
//   return el.country === 'Germany' || el.country === 'France'
// }).map(function(el){
//   return `${el.first_name} ${el.last_name}`
// });
// console.log(people);


// 1. Сформировать карточки товаров (название, цену, наличие 
//на складе). Если товар есть на складе, то выводить 'in stock', 
//если нет - 'not in stock'. Добавить карточки в div products_container
// ДЗ
// Стилизовать карточки
// Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты должны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают

const goods = [
  // {
  //   id: 1, 
  //   product: 'iPhone 14',
  //   price: 1500,
  //   in_stock: true
  // },
  // {
  //   id: 2, 
  //   product: 'Samsung A53',
  //   price: 1000,
  //   in_stock: true
  // },
  // {
  //   id: 3, 
  //   product: 'Huawei 11',
  //   price: 900,
  //   in_stock: true
  // },
  // {
  //   id: 4, 
  //   product: 'Nokia N4',
  //   price: 500,
  //   in_stock: false
  // },
  {
    id: 5, 
    product: 'iPhone 12',
    price: 1100,
    in_stock: false,
    url: 'https://e7.pngegg.com/pngimages/166/911/png-clipart-kiwi-kiwi.png'
  }
]


const products_container = document.querySelector('.products_container');
const add_product_form = document.querySelector('.add_product_form');
const sortBtnASC = document.querySelector('.sortBtnASC');
const sortBtnDESC = document.querySelector('.sortBtnDESC');
const deleteAllCards = document.querySelector('.deleteAllCards');

// goods.forEach(function({product, price, in_stock}) {
//     const cardElem = document.createElement('div');
//     const elProduct = document.createElement('p');
//     const elPrice = document.createElement('p');
//     const elIn_stock = document.createElement('p');

//     cardElem.append(elProduct, elPrice, elIn_stock);
//     products_container.append(cardElem);

let stored_goods = JSON.parse(localStorage.getItem('goods')) ?? goods;

function render_cards (){
products_container.innerText = '';
stored_goods.map(function({id, product, price, in_stock, url}){
  const productCard = document.createElement('div');
  const imageElem = document.createElement('div');
  const titleElem = document.createElement('p');
  const priceElem = document.createElement('p');
  const inStockElem = document.createElement('p');

  const inStock = in_stock ? 'in stock' : 'not in stock';

  titleElem.innerText = `Title: ${product}`;
  priceElem.innerText = `Price: ${price}`;
  inStockElem.innerText = `Availiability: ${in_stock}`;
  imageElem.style.backgroundImage = `url(${url})`;

  productCard.classList.add('product_card');

  productCard.addEventListener('click', function(){
    stored_goods = stored_goods.filter(function(el){
      return el.id !== id
    })
    localStorage.setItem('goods', JSON.stringify(stored_goods));
    render_cards();
  });

  productCard.append(imageElem, titleElem, priceElem, inStockElem);
  products_container.append(productCard);
});

}

render_cards();

// products_container.append(...products_cards);

add_product_form.addEventListener('submit', function(event){
  event.preventDefault();
  const {url, title, price} = event.target;
  stored_goods.push({
    id: Date.now(),
    url: url.value,
    product: title.value,
    price: price.value,
    in_stock: true
  });
  title.value = '';
  price.value = '';
  url.value = '';
  localStorage.setItem('goods', JSON.stringify(stored_goods));
  render_cards()
});


sortBtnASC.addEventListener('click', function(){
  stored_goods.sort(function(a, b){
    return a.price - b.price
  });
  render_cards()
});

sortBtnDESC.addEventListener('click', function(){
  stored_goods.sort(function(a, b){
    return b.price - a.price
  });
  render_cards()
});


deleteAllCards.addEventListener('click', function(){
  stored_goods = [];
  render_cards();
  localStorage.setItem('goods', JSON.stringify(stored_goods));
});




