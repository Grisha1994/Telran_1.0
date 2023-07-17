export const getCategorys = callback => {
    fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(json => callback(json))
}