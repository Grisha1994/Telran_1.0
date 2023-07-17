 export const getProduct = (callback) =>{
    fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(json => callback(json.products))
  };

 