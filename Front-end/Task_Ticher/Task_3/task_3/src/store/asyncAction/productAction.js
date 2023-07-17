import { fetchProductsAction } from "../reducer/productsReducer";


export const fetchProducts = async (dispatch, category) => {
    
    const resp = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await resp.json();
    dispatch(fetchProductsAction(data))
        
}