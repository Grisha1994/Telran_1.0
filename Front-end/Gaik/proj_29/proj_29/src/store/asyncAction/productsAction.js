import {fetchALLproductsAction, fetchALLErrorproductsAction} from '../reducer/productsReducer'

export const fetchProducts = async (dispatch) => {
    try{
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        dispatch(fetchALLproductsAction(data))
    } catch {
        dispatch(fetchALLErrorproductsAction())  
    }   

}


// fetch('https://fakestoreapi.com/products')
//         .then(
//             resp => resp.json(),
//             () => dispatch(fetchAllErrorProductsAction())
//         )
//         .then(data => dispatch(fetchAllProductsAction(data)))