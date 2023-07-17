let products = [];

fetch('https://fakestoreapi.com/products')
.then(function(res){
    return res.json()
})
.then(function(json){
    console.log(json)
    // products.push({ 
    //     json
    // })
})

console.log(products);