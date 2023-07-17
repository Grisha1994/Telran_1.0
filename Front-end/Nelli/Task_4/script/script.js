const products = [
    {
      id: 1,
      title: 'Apple',
      price: 50,
      image: 'https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png'
    },
    {
      id: 2,
      title: 'Orange',
      price: 20,
      image: 'https://w7.pngwing.com/pngs/187/615/png-transparent-orange-fruit-orange-tangerine-orange-natural-foods-food-citrus.png'
    },
    {
      id: 3,
      title: 'Lime',
      price: 50,
      image: 'https://w7.pngwing.com/pngs/116/773/png-transparent-green-limes-cocktail-sweet-lemon-key-lime-pie-persian-lime-lime-food-citrus-lime-juice-thumbnail.png'
    },
    {
      id: 4,
      title: 'Kiwi',
      price: 50,
      image: 'https://e7.pngegg.com/pngimages/166/911/png-clipart-kiwi-kiwi.png'
    }
  ]



const products_container = document.querySelector('.products_container');

products.forEach(function({ title, price, image}) {
    const cardElem = document.createElement('div');
    const imageElem = document.createElement('div');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
    
    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;

    imageElem.style.backgroundImage = `url(${image})`;

    cardElem.classList.add('product_card');
    
    cardElem.append(imageElem, titleElem, priceElem);
    products_container.append(cardElem);

});