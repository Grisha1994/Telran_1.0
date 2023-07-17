import { addNewProductListAction } from '../reducer/productListReducer'



export function fetchProductList(){
    return function(disptach){
        const url = 'https://api.escuelajs.co/api/v1/products/'
        fetch(url)
            .then(res => res.json())
            .then(data => disptach(addNewProductListAction(data)))
    }
}



export function fetchAddNewProduct(data){
    return function(dispatch){
        const url = 'https://api.escuelajs.co/api/v1/products/'
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        }).then(() => dispatch(fetchProductList()))

    }
}