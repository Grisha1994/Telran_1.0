//1. Создать форму с двумя инпутами (название, цена).
//При отправке формы формируется объект со свойствами id,
//product, price, quantity и выводит его в консоль.
//Свойство quantity у всех формируемых объектов по умолчанию равно 5.

// 2. При отправке формы собранные данные добавляются в массив products
// 3. Из массива products формируются карточки товаров (название, цена и
//кол-ве) и доьавляются в div products_container


const add_product_form = document.querySelector('.add_product_form');
const products_container = document.querySelector('.products_container');

const product_input = document.createElement('input');
const price_input = document.createElement('input');
const form_btn = document.createElement('button');

form_btn.innerText = 'Add product';

product_input.setAttribute('placeholder', 'Product name');
product_input.setAttribute('name', 'product');
price_input.setAttribute('placeholder', 'Price');
price_input.setAttribute('name', 'price');

add_product_form.append(product_input, price_input, form_btn);

let products = [];

add_product_form.addEventListener('submit', function(event){
  event.preventDefault();
  const { product, price } = event.target;

  products.push({
    id: Date.now(),
    product: product.value,
    price: +price.value,
    quantity: 5
    
  });
  product.value = '';
  price.value = '';
  render_cards();
});

function render_cards(){
    products_container.innerText = '';
  
    products.forEach(function({id, product, price, quantity }){
      const cardElem = document.createElement('div');
      const titleElem = document.createElement('p');
      const priceElem = document.createElement('p');
      const quantityElem = document.createElement('p');
  
      titleElem.innerText = `Title: ${product}`;
      priceElem.innerText = `Price: ${price}`;
      quantityElem.innerText = `Quantity: ${quantity}`;

      cardElem.classList.add('product_card');

      cardElem.style.backgroundColor = price <= 1000 ? 'blue' : 'red';

      cardElem.addEventListener('click', function(){
        products = products.filter(function(el){
          return el.id !== id
        });
        render_cards();
      });
  

      cardElem.append(titleElem, priceElem, quantityElem);
      products_container.append(cardElem);
    })


  }

// 7. Добавить кнопку, при клике на которую удаляются все карточки
// 8. Добавить кнопку, при клике на которую все карточки сортируются в порядке возрастания цены

  