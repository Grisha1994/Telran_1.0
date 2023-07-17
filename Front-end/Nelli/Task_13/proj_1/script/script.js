const cards_container = document.querySelector('.cards_container');
const add_product_form = document.querySelector('.add_product_form');

function getProducts(){  
fetch('https://api.storerestapi.com/products')
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    cards_render(json.data)
  })
}

getProducts();

function cards_render(products){
    cards_container.innerText = '';
  products.forEach(function({ title, price }){
    const cardElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');

    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}$`;

    cardElem.classList.add('cardElem');

    cardElem.append(titleElem, priceElem);
    cards_container.append(cardElem);
  })
}

add_product_form.addEventListener('submit', function(event){
    event.preventDefault();
    const { title, price  } = event.target;
    console.log({
        title: title.value,
        price: +price.value,
        description: "dddd",
        category:"3432g34hh3434g343"

    });
    event.target.reset();
});

function createProduct(obj){
    fhech('https://api.storerestapi.com/products', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',

        }
    })
    .then(function(res){
        return res.json()
      })
      .then(function(json){
        console.log(json);
        getProducts();
      })
}